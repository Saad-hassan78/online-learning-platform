const express = require('express');
const router = express.Router();
const { createStudent, enrollInCourse, getStudentData } = require('../controllers/studentController');

router.post('/', createStudent);
router.post('/enroll', enrollInCourse);
router.get('/:id', getStudentData);

module.exports = router;
