Student Grade Generator, Speed Detector & Net Salary Calculator

Project Overview
-------------------------------------

This project consists of three JavaScript programs that solve common computational problems:

Student Grade Generator: Determines a student's grade based on their marks.

Speed Detector: Checks if a driver is speeding and calculates demerit points.

Net Salary Calculator: Computes an individual's net salary by accounting for PAYE, NHIF, and NSSF deductions.
--------------------------------------------------------------------------------------------------------------------------
1. Student Grade Generator
------------------------
Description
----------
This function prompts the user to input student marks (0-100) and determines their grade based on the following scale:

A: Above 79

B: 60 to 79

C: 50 to 59

D: 40 to 49

E: Below 40

How It Works

The function takes user input, converts it to a number, and validates it.

It assigns a grade based on predefined thresholds.

The grade is displayed in the console and returned as output.

Usage

getStudentGrade();

2. Speed Detector

Description

This function checks if a car's speed exceeds 70 km/h and assigns demerit points based on the excess speed. If the driver accumulates more than 12 demerit points, their license is suspended.

Rules

Speed ≤ 70: "Ok"

Every 5 km/s over 70: 1 demerit point

More than 12 demerit points: "License suspended"

How It Works

The function takes the car speed as input.

It determines the number of demerit points based on excess speed.

It returns "Ok" if the speed is below 70.

If points exceed 12, it outputs "License suspended."

Usage

speedDetector();

3. Net Salary Calculator

Description

This program calculates an individual's net salary by factoring in basic salary, benefits, PAYE tax, NHIF deductions, and NSSF contributions.

How It Works

The user inputs their basic salary and benefits.

The gross salary is computed as:

Gross Salary = Basic Salary + Benefits

The program calculates deductions:

PAYE (Tax) is determined based on KRA tax brackets.

NHIF is calculated at a fixed rate of 2.75% of gross salary.

NSSF depends on the selected contribution tier (1 or 2).

The net salary is computed as:

Net Salary = Gross Salary - (PAYE + NHIF + NSSF)

The final salary breakdown is displayed.

Usage

calculateNetSalary();

Technologies Used

JavaScript (ES6+)

Browser-based input handling

Basic arithmetic and conditional logic

Author

This project was created to solve fundamental financial and driving-related computations using JavaScript.