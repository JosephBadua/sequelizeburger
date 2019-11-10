require("dotenv").config();
var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

var db = require("./models")

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var exphbs = require("express-handlebars");

db.sequelize.sync()

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.listen(PORT, function(){
    console.log("listening to port " + PORT);
});