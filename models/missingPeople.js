const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const missingPeopleSchema = new Schema({
	firstName : String,
	lastName : {type: Number, required: true},
	dateMissing : {type: Number, required: true},
	location : {type: Number, required: true},
	posessions : [String],
	gender: String,
	famousFor: {type: String, required:true},
	disappearanceContext: {type: String, required: true},

});

module.exports = missingPeople= mongoose.model("missingPeople", missingPeopleSchema);