const Guestbook = require("../models/guestbook.js");

async function newGuestbook(req, res) {
	res.render("/guestbook", {
		title: "Enter a New Guestbook Entry",
	});
}

async function create(req, res) {
	try {
		console.log(req.body);
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

async function get(req, res) {
	try {
		const entries = await Guestbook.find();
		res.status(200).json(entries);
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "An error occurred while fetching guestbook entries",
			error: error.message,
		});
	}
}

module.exports = { 
	create, 
	get, 
};
