
import { useEffect, useState } from 'react';

function Enroll() {
    const [courses, setCourses] = useState([]);

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        school: '',
        email: '',
        courseid: ''
    });

    useEffect(() => {
        fetch('http://localhost:5000/api/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
            .catch(err => console.log(err));
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:5000/api/enrollments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            alert(data.message);

            if (res.ok) {
                setFormData({
                    name: '',
                    age: '',
                    school: '',
                    email: '',
                    courseid: ''
                });
            }

        } catch (err) {
            console.log(err);
            alert('Unable to connect to the server');
        }
    };

    return (
        <div className="enroll">
            <h1>Enroll in a Course</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Student Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="school"
                    placeholder="School / College"
                    value={formData.school}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <select
                    name="courseid"
                    value={formData.courseid}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a Course</option>

                    {courses.map(course => (
                        <option key={course.courseid} value={course.courseid}>
                            {course.coursename}
                        </option>
                    ))}
                </select>

                <button type="submit">Enroll Now</button>
            </form>
        </div>
    );
}

export default Enroll;
