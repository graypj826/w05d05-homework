const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/missingPeople");

mongoose.connection.on("connected", () => {
	console.log("here's a hot tip")
});

mongoose.connection.on("error", (err) => {
	console.log(err, "we've a problem with the lead")
});

mongoose.connection.on("disconnected", () => {
	console.log("trail has gone cold")
})



