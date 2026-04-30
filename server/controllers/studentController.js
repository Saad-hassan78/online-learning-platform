const Student = require('../models/Student');
const Course = require('../models/Course');

exports.createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json(student);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.enrollInCourse = async (req, res) => {
    try {
        const { studentId, courseId } = req.body;
        const student = await Student.findById(studentId);
        const course = await Course.findById(courseId);

        if (!student || !course) {
            return res.status(404).json({ message: 'Student or Course not found' });
        }

        if (student.courses.includes(courseId)) {
            return res.status(400).json({ message: 'Already enrolled' });
        }

        student.courses.push(courseId);
        course.students.push(studentId);

        await student.save();
        await course.save();

        res.json({ message: 'Enrolled successfully', student });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getStudentData = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id).populate('courses');
        res.json(student);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
