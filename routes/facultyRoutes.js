const express = require('express');
const router = express.Router();
const { addFaculty, getFaculty } = require('../controllers/facultyController');

router.post('/add', addFaculty);
router.get('/', getFaculty);

module.exports = router;