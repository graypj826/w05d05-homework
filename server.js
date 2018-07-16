const express = require ("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

require("./db/db");


app.use(bodyParser.urlencoded({extended: false}))

app.use(methodOverride("_method"));

app.use(express.static(__dirname + '/public'));


// const missingPeopleController = require("./controllers/missingPeopleController")

// app.use('/missingPeople', missingPeopleController);



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

app.get("/missingpeople", (req,res) => {
	MissingPeople.find({}, (err, allPeople) => {
		if(err){
			res.sender(err);
		} else{
			res.render("index.ejs",{
			missingpeople : allPeople
			})
		}
	})
})

app.get("/missingpeople/:id", (req,res) => {
	MissingPeople.findById(req.params.id, (err, missingPerson) => {
		if(err){
			res.sender(err);
		} else{
			res.render("show.ejs",{
			missingPerson : missingPerson
			})
		}
	})
});
app.get("/missingpeople/:id/edit", (req,res) => {
	MissingPeople.findById(req.params.id, (err, missingPerson) => {
			res.render("edit.ejs",{
			missingPerson : missingPerson
			})
		});
});

app.get("/missingpeople/:id", (req,res) => {
	MissingPeople.findById(req.params.id, (err, missingPerson) => {
		if(err){
			res.sender(err);
		} else{
			res.render("show.ejs",{
			missingPerson : missingPerson
			})
		}
	})
});


app.put("/missingpeople/:id", (req,res) => {
	console.log(req.body, "changes to be made!")
	MissingPeople.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err,updatedPerson) => {
		if(err){
			res.send(err);
		} else {
			console.log(updatedPerson)
			res.redirect("/missingpeople")
		}
	})
});

app.listen(3000, () => {
	console.log("We're on the trail")
});



