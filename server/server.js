// require dependencies
const express = require("express");
const logger = require("morgan");
require("dotenv").config();
require("./config/database");

//require index router module
// const indexRoutes = require("./routes/index");
// const flightRoutes = require("./routes/flights");
// const detailsRoutes = require("./routes/details");
// const ticketsRoutes = require("./routes/tickets");

// initialize express application
const app = express();

// configure application settings
app.set("view engine", "ejs");
// 👆 this sets the default view engine to be "ejs"

require("dotenv").config();
//require an execute database config code
require("./config/database");

console.log(process.env);

// mount middleware
app.use(logger("dev")); // http logger middleware
app.use(express.static("public")); // express static middleware - makes static assets available to the client
app.use(express.urlencoded({ extended: false })); //creates req.body from html form submission

// mount routes
// app.use("/", indexRoutes);
// app.use("/", detailsRoutes);
// app.use("/", ticketsRoutes);
// app.use("/flights", flightRoutes);
// 👆 mount index router module to the root route

// tell the application to listen for requests
app.listen(3000, () => {
	console.log("express is listening on port:3000");
});

