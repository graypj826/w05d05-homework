const mongoose = require("mongoose");
mongoose.connect("mongodb://localhose/missingPeople");
mongoose.connection.on("connected", () => {
	console.log("here's a hot tip")
});
mongoose.connection.on("error", (err) => {
	console.log("we've a problem with the lead")
});
mongoose.connection.on("disconnected", () => {
	console.log("trail has gone cold")
})