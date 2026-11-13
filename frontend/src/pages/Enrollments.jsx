
import { useState } from 'react';

function Enrollments() {
    const [password, setPassword] = useState('');
    const [enrollments, setEnrollments] = useState([]);
    const [showTable, setShowTable] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:5000/api/enrollments/admin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ password })
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message || 'Access denied');
                setShowTable(false);
                return;
            }

            setEnrollments(data);
            setShowTable(true);

        } catch (err) {
            console.log(err);
            alert('Unable to connect to the server');
        }
    };

    return (
        <div className="enrollments">
            <h1>Admin Access</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="Enter Admin Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                />

                <button type="submit">View Enrollments</button>
            </form>

            {showTable && (
                <>
                    <h2>Student Enrollments</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Enrollment ID</th>
                                <th>Student Name</th>
                                <th>Age</th>
                                <th>School / College</th>
                                <th>Email</th>
                                <th>Course ID</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {enrollments.map(enrollment => (
                                <tr key={enrollment.enrollmentid}>
                                    <td>{enrollment.enrollmentid}</td>
                                    <td>{enrollment.name}</td>
                                    <td>{enrollment.age}</td>
                                    <td>{enrollment.school}</td>
                                    <td>{enrollment.email}</td>
                                    <td>{enrollment.courseid}</td>
                                    <td>{enrollment.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
}

export default Enrollments;
