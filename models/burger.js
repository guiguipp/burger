const orm = require("../config/orm.js")

const burger = {
  insertOne: function(value, cb) {
    orm.insertOne("burgers", value, function(res) {
      cb(res);
    });
  },
  updateOne: function(value, condition, cb) {
    orm.updateOne("burgers", value, condition, function(res) {
      // console.log("\n************\n");
      // console.log(`Burger.js => value: ${value} condition: ${condition}`);
      // console.log("\n************\n");
      cb(res);
    });
  },
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res){
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
