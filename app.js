const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res) {
    res.render("home");
});

app.get("/thankyou", function(req, res) {
    res.render("thankyou");
});



app.listen(3000, function(){
    console.log("Server listening on port 3000");
});