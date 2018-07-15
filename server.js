const express = require ("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override")
const missingPeopleController = require(".require/controllers/missingPeopleController")
require(".db/db.js");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride("_method"));
app.use(express.static("/public"));
app.use('/missingPerson',missingPeopleController);

app.listen(300, () => {
	console.log("We're on the trail")
})






