const router = require('express').Router();
const { newStudent, getStudents } = require('../controllers/student.controller');

router.post('/api/new-student', newStudent);

router.get('/api/get-students', getStudents);

module.exports = router;