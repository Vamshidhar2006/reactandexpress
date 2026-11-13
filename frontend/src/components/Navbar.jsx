import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                Mini LMS
            </div>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/enroll">Enroll</Link></li>
                <li><Link to="/enrollments">Enrollments</Link></li>
                <li><Link to="/quiz">Quiz</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar;
