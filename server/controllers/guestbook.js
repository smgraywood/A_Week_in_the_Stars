const Guestbook = require("../models/guestbook.js")

async function newGuestbook(req, res) {
	res.render("/guestbook", {
		title: "Enter a New Guestbook Entry",
	});
}

async function create(req, res) {
	try {
		console.log(req.body)
		await Guestbook.create(req.body).then(function (newGuestbook) {
			res.redirect("/guestbook");
		});
		// Always redirect after CUDing data
	} catch (err) {
		// Typically some sort of validation error
		console.log(err);
		// res.render("/guestbook", { errorMsg: err.message });
	}
}

module.exports = {create}