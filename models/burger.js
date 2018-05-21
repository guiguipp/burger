const orm = require("../config/orm.js")

const burger = {
  insertOne: function(value, cb) {
    orm.insertOne("burgers", value, function(res) {
      cb(res);
    });
  },
  updateOne: function(condition, cb) {
    orm.updateOne("burgers", condition, function(res) {
      cb(res);
    });
  },
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res){
      console.log("console.log res in burger.js", res);
      
      console.log("it this processed too?");
      cb(res);  
    })
  },
  deleteOne: function(condition, cb) {
    orm.deleteOne("burgers", condition, function(res) {
      cb(res);
    });
  }
};


module.exports = burger;
