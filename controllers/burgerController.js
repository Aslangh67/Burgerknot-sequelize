var express = require("express");

var router = express.Router();
// var db = require("../models");
var db= require("../models")
console.log(db.Burger);



// Import the model (burger.js) to use its database functions.
// var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  db.Burger.findAll().then(function (data) {
    var result=[]
    for (let i=0;i<data.length;i++){
result.push( data[i].dataValues)

  }
let final={
  burgers : result

}
console.log();

    res.render("index", final);
    // res.json( data);
  });
});

router.post("/api/burgers", function (req, res) {
  db.Burger.create({
    name: req.body.name,
    eaten: req.body.eaten
  }).then(function (result) {
    res.end()
  });
});

router.put("/api/burgers/:id", function (req, res) {
  
console.log(req.body.eaten );

  // var condition = "id = " + req.params.id;
  db.Burger.update(
    {eaten: req.body.eaten },
    {where:{id: req.params.id}}
  ).then( function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  }).catch(function(err){
    console.log(err);
    
  });
});

router.delete("/api/burgers/:id", function (req, res) {

  db.Burger.destroy({
    where: {
       id: req.params.id
    }
}).then( function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });

});

module.exports = router;
