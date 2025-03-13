# Net Salary Calculator, Student Grade Generator & Speed Detector

## Overview
This project consists of three JavaScript programs:

1. **Student Grade Generator** - Takes student marks as input and returns the corresponding grade.
2. **Speed Detector** - Determines if a driver is speeding and calculates demerit points.
3. **Net Salary Calculator** - Computes an individual's net salary based on provided salary and benefits.

## Installation & Usage
To run this project, follow these steps:

1. Ensure you have a browser or Node.js installed.
2. Copy the JavaScript code into a `.js` file.
3. Run the file in a browser console or using Node.js:
   ```sh
   node filename.js
   ```

---

## 1. Student Grade Generator

### Description
This function prompts the user to enter student marks (0-100) and returns the corresponding grade:

| Marks Range | Grade |
|------------|-------|
| > 79       | A     |
| 60 - 79    | B     |
| 50 - 59    | C     |
| 40 - 49    | D     |
| < 40       | E     |

### Code Sample
```js
function getStudentGrade() {
    let marks = prompt("Enter student marks (0-100):");
    marks = Number(marks);
    if (isNaN(marks) || marks < 0 || marks > 100) {
        return "Invalid input. Please enter a number between 0 and 100.";
    }
    let grade = marks > 79 ? "A" : marks >= 60 ? "B" : marks >= 50 ? "C" : marks >= 40 ? "D" : "E";
    console.log(`The student's grade is: ${grade}`);
    return grade;
}
getStudentGrade();
```

---

## 2. Speed Detector

### Description
- Takes the car speed as input.
- If speed is below 70, prints "Ok".
- If speed is above 70, calculates demerit points (1 point per 5 km/s over 70).
- If the points exceed 12, prints "License suspended".

### Code Sample
```js
function speedDetector() {
    let speed = prompt('Enter your speed:');
    speed = Number(speed);
    if (isNaN(speed) || speed < 0) return "Invalid input!";
    if (speed <= 70) return "Ok";
    let points = Math.floor((speed - 70) / 5);
    return points > 12 ? "License suspended" : `Points: ${points}`;
}
speedDetector();
```

---

## 3. Net Salary Calculator

### Description
- Takes `basic salary` and `benefits` as input.
- Computes `Gross Salary`, `PAYE (Tax)`, `NHIF`, `NSSF`, and `Net Salary`.
- Uses KRA tax rates.

### Code Sample
```js
function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    let payee = calculatePayee(grossSalary);
    let nhif = grossSalary * 0.0275;
    let nssf = Math.min(7000, grossSalary) * 0.06;
    let netSalary = grossSalary - (payee + nhif + nssf);
    return { Gross_Salary: grossSalary, Payee: payee, NHIF: nhif, NSSF: nssf, Net_Salary: netSalary };
}
console.log(calculateNetSalary(50000, 10000));
```

---

## Author
**Allan Barongo** - Developer

## License
This project is open-source and available for modification.

---

## Contributions
Feel free to contribute to this project! Fork the repository, make changes, and submit a pull request.

---

## Acknowledgments
- **Kenya Revenue Authority (KRA)** for tax rate references.
- **NHIF & NSSF** for deduction rates.
