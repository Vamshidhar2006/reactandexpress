const users = [
    {
        id: 1,
        name: "Student",
        email: "student@gmail.com",
        password: "student123",
        role: "student",
        age: 20,
        school: "ABC College"
    },
    {
    id: 2,
    name: "LMS Admin",
    email: "admin@gmail.com",
    password: "admin123",
    role: "admin"
}
];
const courses = [
    {
        courseid: 101,
        coursename: 'Bharatanatyam',
        category: 'Arts',
        Duration: 'One Year',
        Trainer: 'Shobana',
        Cost: 10000,
        image: '/images/courses/bharatanatyam.jpg'
    },
    {
        courseid: 102,
        coursename: 'Kathak',
        category: 'Arts',
        Duration: 'One Year',
        Trainer: 'Vasuki',
        Cost: 10000,
        image: '/images/courses/kathak.jpg'
    },
    {
        courseid: 103,
        coursename: 'Carnatic Music',
        category: 'Arts',
        Duration: 'One Year',
        Trainer: 'Subbalakshmi',
        Cost: 10000,
        image: '/images/courses/carnatic%20-%20Copy.png'
    },
    {
        courseid: 104,
        coursename: 'Philosophy',
        category: 'Humanities',
        Duration: 'Six Months',
        Trainer: 'Krishnamurthy',
        Cost: 5000,
        image: '/images/courses/philosophy.jpg'
    },
    {
        courseid: 105,
        coursename: 'Sustainable Development',
        category: 'Humanities',
        Duration: 'Six Months',
        Trainer: 'Ananya',
        Cost: 5000,
        image: '/images/courses/Sustainable-Development.jpg'
    },
    {
        courseid: 106,
        coursename: 'React JS',
        category: 'Technology',
        Duration: 'Three Months',
        Trainer: 'Dilshad',
        Cost: 6000,
        image: '/images/courses/react.png'
    },
    {
        courseid: 107,
        coursename: 'Python',
        category: 'Technology',
        Duration: 'Three Months',
        Trainer: 'Sunil Yadav',
        Cost: 6000,
        image: '/images/courses/python.png'
    },
    {
        courseid: 108,
        coursename: 'Java',
        category: 'Technology',
        Duration: 'Three Months',
        Trainer: 'Kushi',
        Cost: 6000,
        image: '/images/courses/Java.png'
    }
];
const quizQuestions = [
    {
        courseid: 101,
        questions: [
            { question: 'Bharatanatyam originated in which state?', options: ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh'], answer: 'Tamil Nadu' },
            { question: 'Which instrument is commonly used in Bharatanatyam?', options: ['Mridangam', 'Guitar', 'Piano', 'Flute'], answer: 'Mridangam' },
            { question: 'What is a hand gesture called?', options: ['Mudra', 'Raga', 'Tala', 'Swara'], answer: 'Mudra' },
            { question: 'Which language is used in many traditional Bharatanatyam compositions?', options: ['Tamil', 'French', 'German', 'Spanish'], answer: 'Tamil' }
        ]
    },
    {
        courseid: 102,
        questions: [
            { question: 'Kathak originated in which country?', options: ['India', 'Nepal', 'China', 'Japan'], answer: 'India' },
            { question: 'Kathak is known for which movement?', options: ['Footwork', 'Swimming', 'Jumping', 'Running'], answer: 'Footwork' },
            { question: 'Which musical instrument accompanies Kathak?', options: ['Tabla', 'Guitar', 'Piano', 'Violin'], answer: 'Tabla' },
            { question: 'What is a spin in Kathak called?', options: ['Chakkar', 'Mudra', 'Alap', 'Tihai'], answer: 'Chakkar' }
        ]
    },
    {
        courseid: 103,
        questions: [
            { question: 'Carnatic music belongs to which part of India?', options: ['South India', 'North India', 'East India', 'West India'], answer: 'South India' },
            { question: 'How many basic swaras are there?', options: ['Seven', 'Five', 'Eight', 'Ten'], answer: 'Seven' },
            { question: 'What is the rhythmic cycle called?', options: ['Tala', 'Raga', 'Mudra', 'Shruti'], answer: 'Tala' },
            { question: 'Which instrument is commonly used in Carnatic music?', options: ['Veena', 'Guitar', 'Saxophone', 'Piano'], answer: 'Veena' }
        ]
    },
    {
        courseid: 104,
        questions: [
            { question: 'What does philosophy study?', options: ['Knowledge and existence', 'Only numbers', 'Only plants', 'Only machines'], answer: 'Knowledge and existence' },
            { question: 'Who was the teacher of Plato?', options: ['Socrates', 'Aristotle', 'Newton', 'Einstein'], answer: 'Socrates' },
            { question: 'What is ethics concerned with?', options: ['Right and wrong', 'Weather', 'Technology', 'Geography'], answer: 'Right and wrong' },
            { question: 'Who wrote The Republic?', options: ['Plato', 'Socrates', 'Aristotle', 'Descartes'], answer: 'Plato' }
        ]
    },
    {
        courseid: 105,
        questions: [
            { question: 'What is sustainable development?', options: ['Meeting present needs without harming future generations', 'Using all resources quickly', 'Increasing pollution', 'Stopping all development'], answer: 'Meeting present needs without harming future generations' },
            { question: 'Which is a renewable energy source?', options: ['Solar energy', 'Coal', 'Petroleum', 'Natural gas'], answer: 'Solar energy' },
            { question: 'Which practice saves water?', options: ['Rainwater harvesting', 'Leaving taps open', 'Water wastage', 'Dumping waste'], answer: 'Rainwater harvesting' },
            { question: 'How many Sustainable Development Goals are there?', options: ['17', '10', '12', '20'], answer: '17' }
        ]
    },
    {
        courseid: 106,
        questions: [
            { question: 'What is React used for?', options: ['Building user interfaces', 'Managing databases', 'Creating operating systems', 'Editing videos'], answer: 'Building user interfaces' },
            { question: 'Who developed React?', options: ['Facebook', 'Google', 'Microsoft', 'Amazon'], answer: 'Facebook' },
            { question: 'What is JSX?', options: ['JavaScript XML', 'Java Syntax Extension', 'JSON XML', 'Java Extra'], answer: 'JavaScript XML' },
            { question: 'Which hook manages state in React?', options: ['useState', 'useRoute', 'useHTML', 'useServer'], answer: 'useState' }
        ]
    },
    {
        courseid: 107,
        questions: [
            { question: 'Who created Python?', options: ['Guido van Rossum', 'James Gosling', 'Dennis Ritchie', 'Bjarne Stroustrup'], answer: 'Guido van Rossum' },
            { question: 'Which symbol starts a comment in Python?', options: ['#', '//', '/*', '$'], answer: '#' },
            { question: 'Which data type stores True or False?', options: ['Boolean', 'String', 'List', 'Integer'], answer: 'Boolean' },
            { question: 'Which keyword defines a function in Python?', options: ['def', 'function', 'fun', 'define'], answer: 'def' }
        ]
    },
    {
        courseid: 108,
        questions: [
            { question: 'Java is which type of programming language?', options: ['Object-oriented', 'Markup', 'Query-only', 'Styling'], answer: 'Object-oriented' },
            { question: 'Who developed Java?', options: ['James Gosling', 'Guido van Rossum', 'Dennis Ritchie', 'Brendan Eich'], answer: 'James Gosling' },
            { question: 'Which keyword creates an object in Java?', options: ['new', 'create', 'object', 'make'], answer: 'new' },
            { question: 'Which method is the entry point of a Java program?', options: ['main()', 'start()', 'run()', 'init()'], answer: 'main()' }
        ]
    }
];
const enrollments = [
    {
        enrollmentid: 1,
        studentid: 1,
        name: 'Vamshidhar Reddy',
        age: 20,
        school: 'ABC College',
        email: 'student@gmail.com',
        courseid: 101,
        status: 'Enrolled'
    }
];
module.exports = {
    users,
    courses,
    quizQuestions,
    enrollments
};