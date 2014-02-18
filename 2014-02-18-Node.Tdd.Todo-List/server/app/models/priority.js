'use strict';

module.exports = Priority;
var priorities = global.nss.db.collection('priorities');
var Mongo = require('mongodb');

function Priority(obj){
  this._id = obj._id;
  this.name = obj.name;
  this.value = parseInt(obj.value);
}

Priority.prototype.save = function(fn){
  priorities.save(this, function(err, record){
    fn(record);
  });
};

Priority.findAll = function(fn){
  priorities.find().toArray(function (err, records){
    fn(records);
  });
};

Priority.findByName = function(name, fn){
  priorities.findOne({name: name}, function(err, record){
    fn(new Priority(record));
  });
};

Priority.findById = function(id, fn){
  var _id = Mongo.ObjectID(id);
  priorities.findOne({_id: _id}, function(err, record){
    fn(new Priority(record));
  });
};
