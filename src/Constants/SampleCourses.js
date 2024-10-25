
import css from "../Assets/Thumbnails/css.jpeg"
import dsa from "../Assets/Thumbnails/dsa.jpeg"
import javaScript from "../Assets/Thumbnails/javaScript.jpeg"
import nodejs from "../Assets/Thumbnails/nodejs.jpeg"
import react from "../Assets/Thumbnails/react.png"


const SampleCourses = [
    {
        _id: '1',
        title: 'Introduction to React',
        description: 'Learn the basics of React, a popular JavaScript library for building user interfaces.',
        thumbnail: {
            secure_url: react
        },
        numberOfLectures: 10,
        createdBy: 'John Doe',
        keyTopics: [
            'React Components',
            'JSX',
            'State and Props',
            'Lifecycle Methods',
            'React Hooks',
            'Virtual DOM',
            'Forms and Events',
            'React Router',
            'Conditional Rendering',
            'State Management'
        ],
        lectures: [
            { id: 1, title: "React Components", duration: "15 mins" },
            { id: 2, title: "JSX", duration: "10 mins" },
            { id: 3, title: "State and Props", duration: "20 mins" },
            { id: 4, title: "Lifecycle Methods", duration: "25 mins" },
            { id: 5, title: "React Hooks", duration: "30 mins" },
            { id: 6, title: "Virtual DOM", duration: "18 mins" },
            { id: 7, title: "Forms and Events", duration: "22 mins" },
            { id: 8, title: "React Router", duration: "28 mins" },
            { id: 9, title: "Conditional Rendering", duration: "15 mins" },
            { id: 10, title: "State Management", duration: "20 mins" }
        ]
    },
    {
        _id: '2',
        title: 'Advanced JavaScript',
        description: 'Deep dive into JavaScript, covering ES6, async programming, and more.',
        thumbnail: {
            secure_url: javaScript
        },
        numberOfLectures: 8,
        createdBy: 'Jane Smith',
        keyTopics: [
            'ES6 Features',
            'Async/Await',
            'Promises',
            'JavaScript Closures',
            'Event Loop',
            'Hoisting',
            'Prototypal Inheritance',
            'Callbacks'
        ],
        lectures: [
            { id: 1, title: "ES6 Features", duration: "12 mins" },
            { id: 2, title: "Async/Await", duration: "18 mins" },
            { id: 3, title: "Promises", duration: "15 mins" },
            { id: 4, title: "JavaScript Closures", duration: "20 mins" },
            { id: 5, title: "Event Loop", duration: "25 mins" },
            { id: 6, title: "Hoisting", duration: "10 mins" },
            { id: 7, title: "Prototypal Inheritance", duration: "22 mins" },
            { id: 8, title: "Callbacks", duration: "20 mins" }
        ]
    },
    {
        _id: '3',
        title: 'Mastering CSS',
        description: 'Become a CSS pro and learn advanced techniques for layout and styling.',
        thumbnail: {
            secure_url: css
        },
        numberOfLectures: 12,
        createdBy: 'Emily Johnson',
        keyTopics: [
            'Flexbox',
            'Grid Layout',
            'CSS Variables',
            'Animations and Transitions',
            'Media Queries',
            'CSS Preprocessors',
            'Positioning',
            'Pseudo-elements and Pseudo-classes',
            'Z-Index and Stacking Context',
            'Box Model',
            'Responsive Design',
            'Browser Compatibility'
        ],
        lectures: [
            { id: 1, title: "Flexbox", duration: "15 mins" },
            { id: 2, title: "Grid Layout", duration: "20 mins" },
            { id: 3, title: "CSS Variables", duration: "18 mins" },
            { id: 4, title: "Animations and Transitions", duration: "22 mins" },
            { id: 5, title: "Media Queries", duration: "20 mins" },
            { id: 6, title: "CSS Preprocessors", duration: "25 mins" },
            { id: 7, title: "Positioning", duration: "15 mins" },
            { id: 8, title: "Pseudo-elements and Pseudo-classes", duration: "20 mins" },
            { id: 9, title: "Z-Index and Stacking Context", duration: "30 mins" },
            { id: 10, title: "Box Model", duration: "20 mins" },
            { id: 11, title: "Responsive Design", duration: "15 mins" },
            { id: 12, title: "Browser Compatibility", duration: "20 mins" }
        ]
    },
    {
        _id: '4',
        title: 'Node.js Fundamentals',
        description: 'Learn how to build scalable backend applications using Node.js.',
        thumbnail: {
            secure_url: nodejs
        },
        numberOfLectures: 15,
        createdBy: 'Michael Brown',
        keyTopics: [
            'Node.js Basics',
            'Event-driven Architecture',
            'Asynchronous Programming',
            'Streams and Buffers',
            'Express.js',
            'Middleware',
            'Routing in Express',
            'REST APIs',
            'Database Integration',
            'Authentication',
            'Error Handling',
            'Deploying Node.js Apps'
        ],
        lectures: [
            { id: 1, title: "Node.js Basics", duration: "15 mins" },
            { id: 2, title: "Event-driven Architecture", duration: "20 mins" },
            { id: 3, title: "Asynchronous Programming", duration: "25 mins" },
            { id: 4, title: "Streams and Buffers", duration: "20 mins" },
            { id: 5, title: "Express.js", duration: "30 mins" },
            { id: 6, title: "Middleware", duration: "22 mins" },
            { id: 7, title: "Routing in Express", duration: "25 mins" },
            { id: 8, title: "REST APIs", duration: "20 mins" },
            { id: 9, title: "Database Integration", duration: "30 mins" },
            { id: 10, title: "Authentication", duration: "25 mins" },
            { id: 11, title: "Error Handling", duration: "20 mins" },
            { id: 12, title: "Deploying Node.js Apps", duration: "15 mins" }
        ]
    },
    {
        _id: '5',
        title: 'Data Structures & Algorithms',
        description: 'Understand core data structures and algorithms used in programming.',
        thumbnail: {
            secure_url: dsa
        },
        numberOfLectures: 20,
        createdBy: 'Sarah Wilson',
        keyTopics: [
            'Arrays',
            'Linked Lists',
            'Stacks and Queues',
            'Trees and Graphs',
            'Hashing',
            'Sorting Algorithms',
            'Searching Algorithms',
            'Dynamic Programming',
            'Greedy Algorithms',
            'Recursion',
            'Big O Notation',
            'Backtracking'
        ],
        lectures: [
            { id: 1, title: "Arrays", duration: "15 mins" },
            { id: 2, title: "Linked Lists", duration: "20 mins" },
            { id: 3, title: "Stacks and Queues", duration: "25 mins" },
            { id: 4, title: "Trees and Graphs", duration: "30 mins" },
            { id: 5, title: "Hashing", duration: "22 mins" },
            { id: 6, title: "Sorting Algorithms", duration: "25 mins" },
            { id: 7, title: "Searching Algorithms", duration: "20 mins" },
            { id: 8, title: "Dynamic Programming", duration: "30 mins" },
            { id: 9, title: "Greedy Algorithms", duration: "25 mins" },
            { id: 10, title: "Recursion", duration: "20 mins" },
            { id: 11, title: "Big O Notation", duration: "15 mins" },
            { id: 12, title: "Backtracking", duration: "20 mins" }
        ]
    },
];
    

export default SampleCourses;
