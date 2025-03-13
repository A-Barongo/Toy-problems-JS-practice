function getStudentGrade() {
    let marks = prompt("Enter student marks (0-100):");

   // Convert input to a number
    marks = Number(marks);

    // Validate input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        return "Invalid input. Please enter a number between 0 and 100.";
    }

    // Determine grade
    let grade;
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60 && marks<80) {
        grade = "B";
    } else if (marks >= 50 && marks<60) {
        grade = "C";
    } else if (marks >= 40 && marks<50) {
        grade = "D";
    } else {
        grade = "E";
    } 
    console.log(`The student's grade is: ${grade}`);
    return `The student's grade is: ${grade}`
}

getStudentGrade();

