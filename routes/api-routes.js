var db = require("../models");

module.exports = function(app){
    app.get("/api/burgers", function (req,res){
        db.burgers.findAll({}).then(function(burgers){
            res.json(burgers);
        })
    })
}
