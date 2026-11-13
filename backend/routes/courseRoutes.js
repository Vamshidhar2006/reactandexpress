const express = require('express');
const router = express.Router();
const { courses } = require('../data/data');
router.get('/', (req, res) => {
    res.json(courses);
});
router.get('/:name', (req, res) => {
    const course = courses.find(c => 
        c.coursename.toLowerCase() === req.params.name.toLowerCase()
    );
    if (!course) {
        return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
});
module.exports = router;