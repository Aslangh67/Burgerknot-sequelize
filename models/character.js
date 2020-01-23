// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.

// Creates a "Chirp" model that matches up with DB


// Syncs with DB
// Burgers.sync();
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    name: DataTypes.STRING,
    eaten: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  
    
  });
  return Burger
}


// Makes the burgers Model available for other files (will also create a table)

