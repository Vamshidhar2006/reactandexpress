import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <h1>Welcome to Learnova</h1>
            <h2>Learn Today. Lead Tomorrow.</h2>
            <p>
                Explore new skills, discover exciting courses,
                and take the next step in your learning journey.
            </p>
            <Link to="/courses">Explore Courses</Link>
        </div>
    );
}

export default Home;