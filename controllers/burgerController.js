var express = require("express");

var router = express.Router();
var Burgers = require("../models/character");


// Import the model (burger.js) to use its database functions.
// var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  Burgers.findAll({}).then(function (data) {

    res.render("index", data);
    // res.json( data);
  });
});

router.post("/api/burgers", function (req, res) {
  Burgers.create({
    name: req.body.name,
    eaten: req.body.eaten
  }).then(function (result) {
    res.end()
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    eaten: req.body.eaten
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
