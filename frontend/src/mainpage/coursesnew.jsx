
import { useState } from 'react';
import Courses from '../pages/Courses';

function CoursesNew() {
    const [selectedCategory, setSelectedCategory] = useState('');

    return (
        <div className="courses-new">
            <h1>Explore Our Courses</h1>

            <div className="category-container">
                <button onClick={() => setSelectedCategory('Arts')}>
                    Arts
                </button>

                <button onClick={() => setSelectedCategory('Humanities')}>
                    Humanities
                </button>

                <button onClick={() => setSelectedCategory('Technology')}>
                    Technology
                </button>
            </div>

            {selectedCategory && (
                <Courses category={selectedCategory} />
            )}
        </div>
    );
}

export default CoursesNew;
