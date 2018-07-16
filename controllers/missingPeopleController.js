const express = require("express");

const router = express.Router();

const MissingPeople = require("../models/missingPeople");

router.get("/", (req,res) => {
	MissingPeople.find({}, (err, allPeople) => {
		if(err){
			res.sender(err);
		} else{
			res.render("index.ejs",{
			missingpeople : allPeople
			})
		}
	})
});

router.get("/new", (req,res) => {
	res.render("new.ejs", {})
});

router.get("/:id/edit", (req,res) => {
	MissingPeople.findById(req.params.id, (err, missingPerson) => {
			res.render("edit.ejs",{
			missingPerson : missingPerson
			})
		});
});

router.get("/:id", (req,res) => {
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
router.post("/", (req,res) => {
	MissingPeople.create(req.body, (err,newPerson) => {
		if(err){
			res.send(err);
		} else {
			console.log(newPerson)
			res.redirect(`/missingpeople/${newPerson.id}`)
		}
	})
});
router.put("/:id", (req,res) => {
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
router.delete("/:id", (req,res) => {
	MissingPeople.findByIdAndRemove(req.params.id, (err,removePerson) => {
		if(err){
			res.send(err);
		} else {
			res.redirect("/missingpeople")
		}
	})
});

module.exports = router