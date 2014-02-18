'use strict';

module.exports = Priority;
var priorities = global.nss.db.collection('priorities');

function Priority(obj){
  this.name = obj.name;
  this.value = parseInt(obj.value);
}

Priority.prototype.save = function(fn){
  priorities.save(this, function(err, record){
    console.log(record);
    fn(record);
  });
};
