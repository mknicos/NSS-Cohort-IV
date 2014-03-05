/* jshint expr:true */
'use strict';

process.env.DBNAME = 'note2-test';
var app = require('../../app/app');
var expect = require('chai').expect;
var request = require('supertest');
var User;
var sue;

describe('User', function(){
  before(function(done){
    request(app)
    .get('/')
    .end(function(err, res){
      User = require('../../app/models/user');
      done();
    });
  });

  beforeEach(function(done){
    global.nss.db.dropDatabase(function(err, result){
      sue = new User({email: 'sue@aol.com', password: 'abcd'});
      sue.hashPassword(function(){
        sue.insert(function(){
          done();
        });
      });
    });
  });

  describe('GET /', function(){
    it('should display the home page', function(done){
      request(app)
      .get('/')
      .expect(200, done);
    });
  });

  describe('GET /auth', function(){
    it('should display the auth page', function(done){
      request(app)
      .get('/auth')
      .end(function(err, res){
        expect(res.status).to.equal(200);
        expect(res.text).to.include('User Authentication');
        done();
      });
    });
  });

  describe('POST /register', function(){
    it('should register a user', function(done){
      request(app)
      .post('/register')
      .field('email', 'bob@aol.com')
      .field('password', '1234')
      .end(function(err, res){
        expect(res.status).to.equal(302);
        done();
      });
    });
    it('should not register a user', function(done){
      request(app)
      .post('/register')
      .field('email', 'sue@aol.com')
      .field('password', 'abcd')
      .end(function(err, res){
        expect(res.status).to.equal(200);
        expect(res.text).to.include('User Authentication');
        done();
      });
    });
  });


  describe('POST /login', function(){
    it('should login a user', function(done){
      request(app)
      .post('/login')
      .field('email', 'sue@aol.com')
      .field('password', 'abcd')
      .end(function(err, res){
        expect(res.status).to.equal(302);
        done();
      });
    });
    it('should not login a user 2', function(done){
      request(app)
      .post('/login')
      .field('email', 'bob@aol.com')
      .field('password', '1234')
      .end(function(err, res){
        expect(res.status).to.equal(200);
        expect(res.text).to.include('User Authentication');
        done();
      });
    });
  });


});
