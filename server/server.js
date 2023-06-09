// require dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
// require("dotenv").config({path: __dirname + '/.env'});
require("./config/database");

//require index router module
const guestbookRoutes = require("./routes/guestbook");

// initialize express application
const app = express();

// configure application settings

//require an execute database config code
require("./config/database");

console.log(process.env);

// mount middleware
app.use(logger("dev")); // http logger middleware
app.use(express.static("public")); // express static middleware - makes static assets available to the client
app.use(express.urlencoded({ extended: false })); //creates req.body from html form submission
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// POST endpoint for saving form data to MongoDB
// app.post("/guestbook", (req, res) => {
// 	const { name, email, message } = req.body;
// 	const entry = new guestbook({ name, email, message });
// 	entry.save();

// 	res.status(200).json({
// 		success: true,
// 		message: "Form data saved successfully",
// 	});
// });

// mount routes
app.use("/guestbook", guestbookRoutes);

// tell the application to listen for requests
// app.listen(3001, () => {
// 	console.log("express is listening on port:3001");
// });

app.listen(process.env.PORT || 3001);
