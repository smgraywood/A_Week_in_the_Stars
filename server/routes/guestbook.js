const express = require('express');
const router = express.Router();

const guestbookController = require("../controllers/guestbook_entry");

router.get('/Guestbook', guestbookController.newGuestbookEntry);

// router.post('/Guestbook', guestbookController.create);

module.exports = router;