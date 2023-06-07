const Guestbook = require("../models/guestbook_entry.js")

function newGuestbookEntry(req, res) {
	res.render("entrys/new", {
		title: "Leave a New Message",
	});
}

async function create(req, res) {
	try {
		await Guestbook.create(req.body).then(function (newGuestbook) {
			res.redirect("/guestbook/new");
		});
		// Always redirect after CUDing data
	} catch (err) {
		// Typically some sort of validation error
		console.log(err);
		res.render("guestbook/new", { errorMsg: err.message });
	}
}