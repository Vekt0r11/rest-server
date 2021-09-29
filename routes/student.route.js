const router = require('express').Router();
const { newStudent } = require('../controllers/student.controller');

router.post('/api/new-student', newStudent);

module.exports = router;