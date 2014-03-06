'use strict';

process.env.DBNAME = 'note2-test';
var expect = require('chai').expect;
var Mongo = require('mongodb');
var Note, User, n5, n6, n7, sue, bob;

describe('Note', function(){
  before(function(done){
    var initMongo = require('../../app/lib/init-mongo');
    initMongo.db(function(){
      Note = require('../../app/models/note');
      User = require('../../app/models/user');
      done();
    });
  });

  beforeEach(function(done){
    global.nss.db.dropDatabase(function(err, result){
      sue = new User({email: 'sue@aol.com', password: 'abcd'});
      bob = new User({email: 'bob@aol.com', password: '1234'});
      sue.hashPassword(function(){
        bob.hashPassword(function(){
          sue.insert(function(){
            bob.insert(function(){
              n5 = new Note({title:'HTML', body:'html info', dateCreated:'2014-03-23', tags:'hm, html, prog, code', userId: sue._id.toString()});
              n6 = new Note({title:'Javascript', body:'jQuery stuff', dateCreated:'2013-02-21', tags:'fadeIn, javascript', userId: bob._id.toString()});
              n7 = new Note({title:'Chyld', body:'Silly stuff', dateCreated:'2011-02-21', tags:'testing this out, holoween', userId: sue._id.toString()});
              n5.insert(function(){
                n6.insert(function(){
                  n7.insert(function(){
                    done();
                  });
                });
              });
            });
          });
        });
      });
    });
  });

  describe('new', function(){
    it('should create a new Note object', function(){
      var n1 = new Note({title:'Node', body:'node info', dateCreated:'2014-03-24', tags:'hm, prog, code', userId: sue._id.toString()});
      expect(n1.title).to.equal('Node');
      expect(n1).to.be.instanceof(Note);
      expect(n1.body).to.equal('node info');
      expect(n1.dateCreated).to.be.instanceof(Date);
      expect(n1.tags).to.have.length(3);
      expect(n1.userId).to.be.instanceof(Mongo.ObjectID);
    });
    it('should create a new Note with empty data', function(){
      var n1 = new Note({title:'JS', body:'JS info', dateCreated:'', tags:'', userId: sue._id.toString()});
      var d1 = new Date();
      expect(n1.title).to.equal('JS');
      expect(n1).to.be.instanceof(Note);
      expect(n1.body).to.equal('JS info');
      expect(n1.dateCreated).to.be.instanceof(Date);
      expect(n1.dateCreated.toDateString()).to.equal(d1.toDateString());
      expect(n1.tags).to.have.length(0);
      expect(n1.userId).to.be.instanceof(Mongo.ObjectID);
    });
  });

  describe('insert', function(){
    it('should insert the note to the notes db', function(done){
      var n1 = new Note({title:'Node', body:'node info', dateCreated:'2014-03-24', tags:'hm, prog, code', userId: sue._id.toString()});
      n1.insert(function(){
        expect(n1._id.toString()).to.have.length(24);
        done();
      });
    });
  });

  describe('findNotesByUserId', function(){
    it('should find noteis by User id', function(done){
      var id = sue._id.toString();
      Note.findNotesByUserId(id, function(notes){
        expect(notes.length).to.be.equal(2);
        done();
      });
    });
  });

  describe('findById', function(){
    it('should find a note by id', function(done){
      var id = n6._id.toString();
      Note.findById(id, function(note){

        expect(note.title).to.be.equal('Javascript');
        expect(note.body).to.be.equal('jQuery stuff');
        done();
      });
    });
  });

  describe('deleteNote', function(){
    it('should delete note from db', function(done){
      var id = n5._id.toString();
      Note.deleteNote(id, function(count){
        Note.findById(id, function(note){
          expect(count).to.equal(1);
          expect(note).to.equal(null);
          done();
        });
      });
    });
  });


});
