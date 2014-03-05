'use strict';
var bcrypt = require('bcrypt');
var users = global.nss.db.collection('users');
var Mongo = require('mongodb');

module.exports = User;

function User(user){
  this.email = user.email;
  this.password = user.password;
}

User.prototype.hashPassword = function(fn){
  var self = this;
  bcrypt.hash(this.password, 8, function(err, hash){
    self.password = hash;
    fn();
  });
};

User.prototype.insert = function(fn){
  var self = this;
  users.findOne({email: self.email}, function(err, record){
    if(!record){
      users.insert(self, function(err, records){
        fn(records[0]);
      });
    }else{
      fn(null);
    }
  });
};

User.findById = function(id, fn){
  var _id = new Mongo.ObjectID(id);
  users.findOne({_id:_id}, function(err, record){
    fn(record);
  });
};

//Function takes an email and password, searches db by email
// and returns the entire user object if there is a match
User.findByEmailAndPassword = function(email, password, fn){
  users.findOne({email:email}, function(err, record){
    if(!record){
      fn(null);
    } else {
      bcrypt.compare(password, record.password, function(err, res){
        if(res){
          fn(record);
        } else {
          fn(null);
        }
      });
    }
  });
};
