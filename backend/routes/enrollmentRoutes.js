
const express = require('express');
const router = express.Router();

const { enrollments, users } = require('../data/data');

// Admin access using password
router.post('/admin', (req, res) => {

    const admin = users.find(user =>
        user.role === 'admin' &&
        user.password === req.body.password
    );

    if (!admin) {
        return res.status(401).json({
            message: 'Invalid admin password'
        });
    }

    res.json(enrollments);
});

// Student enrollment without login
router.post('/', (req, res) => {

    const student = users.find(user =>
        user.role === 'student' &&
        user.email === req.body.email
    );

    const newEnrollment = {
        enrollmentid: enrollments.length + 17,
        studentid: student ? student.id : null,
        name: req.body.name,
        age: req.body.age,
        school: req.body.school,
        email: req.body.email,
        courseid: Number(req.body.courseid),
        status: 'Enrolled'
    };

    enrollments.push(newEnrollment);

    res.status(201).json({
        message: 'Enrollment successful',
        enrollment: newEnrollment
    });
});

module.exports = router;
