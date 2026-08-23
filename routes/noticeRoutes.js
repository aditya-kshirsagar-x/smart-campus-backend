const express = require('express');
const router = express.Router();
const { addNotice, getNotices } = require('../controllers/noticeController');

router.post('/add', addNotice);
router.get('/', getNotices);

module.exports = router;