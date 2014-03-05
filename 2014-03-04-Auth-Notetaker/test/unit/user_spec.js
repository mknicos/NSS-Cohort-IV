'use strict';

process.env.DBNAME = 'note2-test';
var expect = require('chai').expect;
var User;

describe('User', function(){
  var testID;
  var u2;
  before(function(done){
    var initMongo = require('../../app/lib/init-mongo');
    initMongo.db(function(){
      User = require('../../app/models/user');
      done();
    });
  });

  beforeEach(function(done){
    global.nss.db.dropDatabase(function(err, result){
      var u1 = new User ({email:'bob@aol.com', password:'1234'});
      u2 = new User({email:'matt@aol.com', password: 'abcd'});
      var u3 = new User({email:'eril@aol.com', password: 'bcdf'});
      u1.hashPassword(function(){
        u1.insert(function(){
          u2.hashPassword(function(){
            u2.insert(function(){
              u3.hashPassword(function(){
                u3.insert(function(){
                  testID = u1._id;
                  done();
                });
              });
            });
          });
        });
      });
    });
  });

  describe('new', function(){
    it('should create a new User object', function(){
      var u1 = new User ({email:'bob@aol.com', password:'1234'});
      expect(u1).to.be.instanceof(User);
      expect(u1.email).to.equal('bob@aol.com');
      expect(u1.password).to.equal('1234');
    });
  });


  describe('hashPassword', function(){
    it('should hash password with saltt', function(done){
      var u1 = new User ({email:'bob@aol.com', password:'1234'});
      u1.hashPassword(function(){
        expect(u1.password).to.not.equal('1234');
        done();
      });
    });
  });

  describe('insert', function(){
    it('should insert the data to the user db', function(done){
      var u3 = new User ({email:'sam@aol.com', password:'12345'});
      u3.hashPassword(function(){
        u3.insert(function(){
          expect(u3._id.toString()).to.have.length(24);
          done();
        });
      });
    });
    it('should not insert the data to the user db, because dup email', function(done){
      var u2 = new User ({email:'bob@aol.com', password:'1234'});
      u2.hashPassword(function(){
        u2.insert(function(){
          expect(u2._id).is.equal(undefined);
          done();
        });
      });
    });
  });


  describe('findById', function(){
    it('should find user by id', function(done){
      var id = testID.toString();

      User.findById(id, function(user){
        expect(user._id).to.deep.equal(testID);
        done();
      });
    });
  });

  describe('findByEmailandPassword', function(){
    it('should return a user by email', function(done){
      User.findByEmailAndPassword('matt@aol.com', 'abcd', function(record){
        expect(record._id).to.deep.equal(u2._id);
        done();
      });
    });

    it('should not return a user', function(done){
      User.findByEmailAndPassword('matt@aol.com', 'abcdesdf', function(record){
        expect(record).to.equal(null);
        done();
      });
    });
    it('should return null', function(done){
      User.findByEmailAndPassword('mattt@aol.com', 'abcd', function(record){
        expect(record).to.equal(null);
        done();
      });
    });
  });
});

/*
    describe('.findById', function(){
      it('should find a spec', function(done){
        Album.findById(a1._if.toString(), function(album){
          expect(album._id).to.deep.equal(a1._id);
          done();
        });
      });
    });
  });





});

*/
