/* jshint expr:true */
/* globals before, beforeEach : true */

'use strict';
var expect = require('chai').expect;
var Priority;

describe('priority', function(){
  
  before(function(done){
    var connect = require('../../app/lib/mongodb-connection-pool');
    connect('todo-test', function(){
      Priority = global.nss.Priority;
      done();
    });
  });

  beforeEach(function(done){
    global.nss.db.dropDatabase(function (err, result){
      done();
    });
  });

  describe('new', function(){
    it('should create a new Priority', function(){
      var obj = {name: 'High', value: '10'};
      var p1 = new Priority(obj);
      expect(p1).to.be.instanceof(Priority);
      expect(p1).to.have.property('name').and.equal('High');
      expect(p1).to.have.property('value').and.deep.equal(10);
    });
  });

  describe('#save', function(){
    it('should save a Priority object into the database', function(done){
      var obj = {name: 'High', value: '10'};
      var p1 = new Priority(obj);
      p1.save(function(savedPriority){
        expect(savedPriority).to.be.instanceof(Priority);
        expect(savedPriority).to.have.property('_id').and.be.ok;
        done();
      });
    });
  });

  describe('.findAll', function(){
    it('should return all Priorities in the database', function(done){
      var p1 = new Priority({name: 'High', value: '10'});
      var p2 = new Priority({name: 'Medium', value: '5'});
      var p3 = new Priority({name: 'Low', value: '1'});

      p1.save(function(){
        p2.save(function(){
          p3.save(function(){
            Priority.findAll(function (priorities){
              expect(priorities).to.have.length(3);
              done();
            });
          });
        });
      });
    });
  });


  describe('.findByName', function(){
    it('should return the Priority by its name', function(done){
      var p1 = new Priority({name: 'High', value: '10'});
      var p2 = new Priority({name: 'Medium', value: '5'});
      var p3 = new Priority({name: 'Low', value: '1'});

      p1.save(function(){
        p2.save(function(){
          p3.save(function(){
            Priority.findByName(p1.name, function (priority){
              expect(priority).to.have.property('name','High');
              expect(priority).to.be.an.instanceof(Priority);
              done();
            });
          });
        });
      });
    });
  });

  describe('.findById', function(){
    it('should return the Priority by its id', function(done){
      var p1 = new Priority({name: 'High', value: '10'});
      var p2 = new Priority({name: 'Medium', value: '5'});
      var p3 = new Priority({name: 'Low', value: '1'});

      p1.save(function(){
        p2.save(function(){
          p3.save(function(){
            Priority.findById(p2._id, function (priority){
              expect(priority).to.have.property('_id', p2._id);
              expect(priority).to.be.an.instanceof(Priority);
              done();
            });
          });
        });
      });
    });
  });
});

