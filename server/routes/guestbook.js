const express = require('express');
const router = express.Router();

const guestbookController = require("../controllers/guestbook");

router.post('/', guestbookController.create);

router.get('/', guestbookController.get);

// router.post('/Guestbook', guestbookController.create);

module.exports = router;