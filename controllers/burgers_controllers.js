const express = require("express");
const router = express.Router();

const burger = require("../models/burger") 

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
      
      var hbsObject = {
        burgers: data
      };
      // console.log("This is hbsObject:", hbsObject);
      res.render("index", hbsObject);
    });

  });
  
router.post("/api/burgers", function(req, res) {
  burger.insertOne(req.body.name, function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function(req, res) {
  var condition = req.params.id;
  var value = JSON.parse(req.body.devoured);
  
  burger.updateOne(
  value, condition, 
  function(result) {    
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {

      res.status(200).end();
    }
  });
});
  
// Export routes for server.js to use.
module.exports = router;
  