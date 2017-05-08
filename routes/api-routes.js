// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Post model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/burgers", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Burger.findAll({}).then(function(dbBurger) {
      // We have access to the todos as an argument inside of the callback function
      var hbsObject = {
        dbBurger: dbBurger
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  // POST route for saving a new post
  app.post("/", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    db.Burger.create({
      name: req.body.name,
      devoured: req.body.devoured
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // PUT route for updating posts
  app.put("/api/:id", function(req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    db.Burger.update({
      name: req.body.name,
      devoured: req.body.devoured
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });
};
