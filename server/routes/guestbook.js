const express = require('express');
const router = express.Router();

const guestbookController = require("../controllers/guestbook");

router.post('/', guestbookController.create);

// router.post('/Guestbook', guestbookController.create);

module.exports = router;