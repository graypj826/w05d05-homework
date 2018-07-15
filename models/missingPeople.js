const mongoose = require("mongoose");

const missingPeopleSchema = new mongoose.Schema({
	firstName : String,
	lastName : {type: String, required: true},
	dateMissing : {type: Date, required: true},
	location : {type: String, required: true},
	posessions : [String],
	gender: String,
	famousFor: {type: String, required:true},
	disappearanceContext: {type: String, required: true},
	ageAtDisappearance: Number,

});



module.exports = mongoose.model("missingPeople", missingPeopleSchema);