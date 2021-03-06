const express = require ("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

require("./db/db");


app.use(bodyParser.urlencoded({extended: false}))

app.use(methodOverride("_method"));

app.use(express.static("public"));


const missingPeopleController = require("./controllers/missingPeopleController")

app.use('/missingPeople', missingPeopleController);


const MissingPeople = require("./models/missingPeople.js");

// /////////////////////Added TO DATABASE ///////////////
///////////////////////  DO NOT UNCOMMENT //////////////
// const missingPeopleList = require("./populateMissingPeople.js")

// MissingPeople.collection.insertMany(
// 	missingPeopleList, (err, data) => {
// 		console.log("missing people are added")
// 		mongoose.connection.close();
// 	}
// );
//////////////////////////////////////////////////////////



app.listen(3000, () => {
	console.log("We're on the trail")
});



