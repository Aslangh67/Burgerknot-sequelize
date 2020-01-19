// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection");

// Creates a "Chirp" model that matches up with DB
var Burgers = sequelize.define("burger", {
  name: Sequelize.STRING,
  eaten: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
  
});

// Syncs with DB
Burgers.sync();

// Makes the burgers Model available for other files (will also create a table)
module.exports = Burgers;
