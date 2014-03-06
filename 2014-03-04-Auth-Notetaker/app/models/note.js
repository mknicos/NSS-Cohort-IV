'use strict';

var Mongo = require('mongodb');
var _ = require('lodash');
var notes = global.nss.db.collection('notes');

module.exports = Note;

function Note(note){
  this.title = note.title;
  this.body = note.body;
  this.dateCreated = note.dateCreated ? new Date(note.dateCreated) : new Date();
  this.tags = note.tags.replace(/\s/g, '').split(',');
  this.tags = _.compact(this.tags);
  this.userId = Mongo.ObjectID(note.userId);
}

Note.prototype.insert = function(fn){
  notes.insert(this, function(err, record){
    fn(record);
  });
};

Note.findNotesByUserId = function(id, fn){
  var _id = new Mongo.ObjectID(id);
  notes.find({userId:_id}).toArray(function(err, records){
    fn(records);
    console.log(records);
  });
};

Note.findById = function(id, fn){
  var _id = new Mongo.ObjectID(id);
  notes.findOne({_id:_id}, function(err, record){
    fn(record);
  });
};

Note.deleteNote = function(id, fn){
  var _id = new Mongo.ObjectID(id);
  notes.remove({_id:_id}, function(err, count){
    fn(count);
  });
};
