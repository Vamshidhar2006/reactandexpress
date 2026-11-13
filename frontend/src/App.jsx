
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import CoursesNew from './mainpage/coursesnew';
import Enroll from './pages/Enroll';
import Enrollments from './pages/Enrollments';
import Quiz from './pages/Quiz';

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<CoursesNew />} />
                <Route path="/enroll" element={<Enroll />} />
                <Route path="/enrollments" element={<Enrollments />} />
                <Route path="/quiz" element={<Quiz />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
