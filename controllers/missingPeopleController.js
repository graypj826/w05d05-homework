const express = require("express");

const router = express.Router();

const MissingPeople = require("../models/missingPeople");

router.get("/", (req,res) => {
	MissingPeople.find({}, (err, allPeople) => {
		if (err){
			res.send (err);
		}
	})
})


