var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      db.burgers.findAll({}).then(function(results){
        console.log(results);
        res.render("index", {burgers: results});
      });
  });

  // Load example page and pass in an example by id
  app.post("/burgers/create", function(req, res) {
   db.burgers.create({
     burger_name: req.body.burger_name,
     devoured: false
   })
   .then(function(results){
    console.log(results);
    res.redirect("/");
   });
  });

  app.put("/burgers/update", function(req, res) {
  db.burgers.update(req.body.id,
    {
      where: {
        id: req.body.id
      }
    })
    .then(function(results){
     console.log(results);
     res.redirect("/");
    });
   });
};
