/* jshint expr:true */
'use strict';

process.env.DBNAME = 'note2-test';
var app = require('../../app/app');
var request = require('supertest');
var User, Note;
var sue;
var cookie;

describe('Notes', function(){
  before(function(done){
    request(app)
    .get('/')
    .end(function(err, res){
      User = require('../../app/models/user');
      Note = require('../../app/models/note');
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
  describe('GET /notes', function(){
    it('should not display notes page, user not logged in', function(done){
      request(app)
      .get('/notes')
      .expect(302, done);
    });
  });

  describe('AUTHORIZED', function(){
    beforeEach(function(done){
      request(app)
      .post('/login')
      .field('email', 'sue@aol.com')
      .field('password', 'abcd')
      .end(function(err, res){
        cookie = res.headers['set-cookie'];
        done();
      });
    });

    describe('GET /notes', function(){
      it('should display notes page because user is logged in', function(done){
        request(app)
        .get('/notes')
        .set('cookie', cookie)
        .expect(200, done);
      });
    });

    describe('GET /notes/new', function(){
      it('should display new notes page on click because user is logged in', function(done){
        request(app)
        .get('/notes/new')
        .set('cookie', cookie)
        .expect(200, done);
      });
    });

    describe('POST /notes', function(){
      it('should insert a new note object in the db', function(done){
        var n1 = {title:'Node', body:'node info', dateCreated:'2014-03-24', tags:'hm, prog, code', userId: sue._id.toString()};
        request(app)
        .post('/notes')
        .send(n1)
        .set('cookie', cookie)
        .expect(302, done);
      });
    });

    describe('GET /notes/:id', function(){
      it('should display the note selected on a different page', function(done){
        var n1 = new Note({title:'Node', body:'node info', dateCreated:'2014-03-24', tags:'hm, prog, code', userId: sue._id.toString()});
        n1.insert(function(note){
          request(app)
          .get('/notes/' + n1._id.toString())
          .expect(302, done);
        });
      });
    });

    describe('DELETE /notes/:id', function(){
      it('should delete a note from the notes database', function(done){
        var n1 = new Note({title:'Node', body:'node info', dateCreated:'2014-03-24', tags:'hm, prog, code', userId: sue._id.toString()});
        n1.insert(function(note){
          request(app)
          .del('/notes/' + n1._id.toString())
          .expect(302, done);
        });
      });
    });
  });
});
