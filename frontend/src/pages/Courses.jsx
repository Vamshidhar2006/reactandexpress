
import { useEffect, useState } from 'react';

function Courses({ category }) {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
            .catch(err => console.log(err));
    }, []);

    const filteredCourses = courses.filter(
        course => course.category === category
    );

    return (
        <div className="courses category-courses">
            <h1>{category} Courses</h1>

            <div className="course-container">
                {filteredCourses.map(course => (
                    <div className="course-card" key={course.courseid}>
                        <img src={course.image} alt={course.coursename} />

                        <h2>{course.coursename}</h2>
                        <p>Category: {course.category}</p>
                        <p>Duration: {course.Duration}</p>
                        <p>Trainer: {course.Trainer}</p>
                        <p>Cost: ₹{course.Cost}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;
