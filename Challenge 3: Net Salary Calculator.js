let basicSalary = prompt("Input your monthly basic salary");
let benefits = prompt("Enter the amount of your monthly benefits");

// Convert input to numbers
basicSalary = Number(basicSalary);
benefits = Number(benefits);
let grossSalary = basicSalary + benefits;

// Function to calculate PAYE
function calculatePayee(grossSalary) {
    let payee = 0;

    if (grossSalary <= 24000) {
        payee = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        payee = 24000 * 0.1 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
        payee = 24000 * 0.1 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.3;
    } else if (grossSalary <= 800000) {
        payee = 24000 * 0.1 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.3 + (grossSalary - 500000) * 0.32;
    } else {
        payee = 24000 * 0.1 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.3 + (800000 - 500000) * 0.32 + (grossSalary - 800000) * 0.35;
    }
    return payee;
}

// Function to calculate NHIF deductions
function calculateNhif(grossSalary) {
    return grossSalary * 0.0275;
}

// Function to calculate NSSF deductions
function calculateNssf(grossSalary) {
    let tier = prompt("Which NSSF tier are you in? 1 or 2");
    tier = Number(tier);

    let tier1 = Math.min(7000, grossSalary) * 0.06;
    let tier2 = tier1 + ((Math.min(72000, grossSalary) - 7000) * 0.06);

    if (tier === 1) {
        return tier1;
    } else if (tier === 2) {
        return tier2;
    } else {
        return "Invalid input! Enter 1 or 2";
    }
}

// Function to calculate net salary
function calculateNetSalary() {
    let payee = calculatePayee(grossSalary);
    let nhifDeduc = calculateNhif(grossSalary);
    let nssfDeduc = calculateNssf(grossSalary);

    // Ensure NSSF is a number, not an error message
    if (typeof nssfDeduc !== "number") {
        console.log(nssfDeduc);
        return;
    }

    let netSalary = grossSalary - (payee + nhifDeduc + nssfDeduc);

    return {
        Gross_Salary: grossSalary,
        Payee: payee,
        NSSF_Deduction: nssfDeduc,
        NHIF_Deduction: nhifDeduc,
        Net_Salary: netSalary
    };
}

// Run and display results
console.log(calculateNetSalary());
