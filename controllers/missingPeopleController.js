const express = require("express");

const router = express.Router();

const MissingPeople = require("../models/missingPeople");

// const missingPeopleList = require("../populateMissingPeople.js")

router.get("/", (req,res) => {
	MissingPeople.find({}, (err, allPeople) => {
		if (err){
			res.send (err);
		}
	})
})


// MissingPeople.collection.insertMany(
// 	missingPeopleList, (err, data) => {
// 		console.log("missing people are added")
// 		mongoose.connection.close();
// 	}
// );

