// Import MySQL connection.
const connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
    create: function(table, column) {
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
    show: function(table) {
        let query = "SELECT * FROM ??";
        connection.query(query, [table], function(err,result){
            if(err) {
                throw err;
                cb(result) 
            }
            console.log(result);
        })
    },
    delete: function(table,column){
        let query= "DELETE FROM ?? WHERE id=?";
        connection.query(query, [table, column],function(err,result){
            if(err) {
                throw err;
                cb(result)
            }
            console.log(result)
        })
    }
    /*,delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;
    
    connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
            }
        cb(result);
    });
    }*/
    };

// orm.create("burgers","Another Test With CallBack")
orm.delete("burgers","2")
orm.show("burgers")

module.exports = orm;

