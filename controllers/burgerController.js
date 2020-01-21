var express = require("express");

var router = express.Router();
var Burgers = require("../models/character");


// Import the model (burger.js) to use its database functions.
// var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  Burgers.findAll({}).then(function (data) {
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
  Burgers.create({
    name: req.body.name,
    eaten: req.body.eaten
  }).then(function (result) {
    res.end()
  });
});

router.put("/api/burgers/:id", function (req, res) {
  
console.log(req.body.eaten );

  // var condition = "id = " + req.params.id;
  Burgers.update(
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

  Burgers.destroy({
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
