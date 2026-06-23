// ==========================================
// 1. OLD JAVASCRIPT CODE
// ==========================================

var studentName = "Nihala";
var studentAge = 18;

console.log("Student Name: " + studentName);
console.log("Student Age: " + studentAge);


// ==========================================
// 2. REFACTORED ES6+ CODE
// ==========================================

const name = "Nihala";
const age = 18;

console.log(`Student Name: ${name}`);
console.log(`Student Age: ${age}`);


// ==========================================
// 3. STUDENT OBJECT
// ==========================================

const student = {
    name: "Nihala",
    age: 18,
    course: "JavaScript",
    city: "Palakkad"
};


// ==========================================
// 4. DESTRUCTURING
// ==========================================

const { name: studentName2, age: studentAge2, course, city } = student;

console.log(studentName2);
console.log(studentAge2);
console.log(course);
console.log(city);


// ==========================================
// 5. DISPLAY STUDENT DATA
// ==========================================

const studentDiv = document.getElementById("studentInfo");

studentDiv.innerHTML = `
    <p><strong>Name:</strong> ${studentName2}</p>
    <p><strong>Age:</strong> ${studentAge2}</p>
    <p><strong>Course:</strong> ${course}</p>
    <p><strong>City:</strong> ${city}</p>
`;


// ==========================================
// 6. ARRAY CLONING
// ==========================================

const fruits = [
    "Apple",
    "Orange",
    "Mango"
];

// Safe clone
const clonedFruits = [...fruits];

// Add item to cloned array
clonedFruits.push("Grapes");

console.log("Original Array:", fruits);
console.log("Cloned Array:", clonedFruits);


// ==========================================
// 7. DISPLAY ARRAYS
// ==========================================

const arrayDiv = document.getElementById("arrayInfo");

arrayDiv.innerHTML = `
    <p><strong>Original Array:</strong></p>
    <p>${fruits.join(", ")}</p>

    <p><strong>Cloned Array:</strong></p>
    <p>${clonedFruits.join(", ")}</p>
`;


// ==========================================
// 8. OBJECT CLONING
// ==========================================

const clonedStudent = {
    ...student
};

// Modify cloned object
clonedStudent.city = "Kochi";

console.log("Original Object:", student);
console.log("Cloned Object:", clonedStudent);


// ==========================================
// 9. DISPLAY OBJECTS
// ==========================================

const objectDiv = document.getElementById("objectInfo");

objectDiv.innerHTML = `
    <p><strong>Original Student City:</strong> ${student.city}</p>

    <p><strong>Cloned Student City:</strong> ${clonedStudent.city}</p>
`;


// ==========================================
// 10. ARROW FUNCTION
// ==========================================

const greet = (name) => {
    return `Welcome ${name}!`;
};

console.log(greet(studentName2));


// ==========================================
// 11. DEFAULT PARAMETER
// ==========================================

const showCourse = (courseName = "JavaScript") => {
    console.log(`Course: ${courseName}`);
};

showCourse();
showCourse("React");