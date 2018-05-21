// Import MySQL connection.
const connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
    insertOne: function(table, column, cb) {
    let query = "INSERT INTO ?? SET name=?";
        connection.query(query, [table,column], function(err, result){
        if (err) {
        throw err;
        cb(result)
        }
        // console.log(data);
        // cb(data)
    });
    },
    selectAll: function(table, cb) {
        let query = "SELECT * FROM ??";
        connection.query(query, [table], function(err,result){
            if(err) {
                throw err;
                cb(result) 
            }
            // console.log(query)
            console.log("result in orm.js:", result);
        })
    },
    deleteOne: function(table,column,cb){
        let query= "DELETE FROM ?? WHERE id=?";
        connection.query(query, [table, column],function(err,result){
            if(err) {
                throw err;
                cb(result)
            }
            console.log(result)
        })
    }, 
    updateOne: function(table, id, cb){
        let query= "UPDATE ?? SET devoured= true WHERE id=?"
        connection.query(query, [table, id], function(err, result){
            if(err) {
                throw err;
                cb(result)
            }
            console.log(result)
        })
    }
    };
// orm.insertOne("burgers","Jucy Lucy")
// orm.updateOne("burgers","12")
// orm.deleteOne("burgers","11")
// orm.selectAll("burgers")
module.exports = orm;

