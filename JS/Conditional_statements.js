//if statement
let age=18;
if (age>=18){
    console.log("You can drive");
}
    console.log("You can't drive");

//if else statement
let age1=10;
if (age1>=18){
    console.log("You can drive");
}
else {
    console.log("You can't drive");
}

//else if statements
let studentMarks = 85;  // Change this value to test
    if (marks >= 90) {
        console.log("Grade: A+");
    } else if (marks >= 80) {
        console.log("Grade: A");
    } else if (marks >= 70) {
        console.log("Grade: B");
    } else if (marks >= 60) {
        console.log("Grade: C");
    } else if (marks >= 50) {
        console.log("Grade: D");
    } else {
        console.log("Grade: F (Fail)");
    }

//nested if else statements
let studentMarks1 = 87;  // Change this value to test different cases
    if (marks >= 90) {
        if (marks >= 95) {
            console.log("Grade: A+ (Outstanding)");
        } else {
            console.log("Grade: A (Excellent)");
        }
    } else if (marks >= 80) {
        if (marks >= 85) {
            console.log("Grade: B+ (Very Good)");
        } else {
            console.log("Grade: B (Good)");
        }
    } else if (marks >= 70) {
        if (marks >= 75) {
            console.log("Grade: C+ (Above Average)");
        } else {
            console.log("Grade: C (Average)");
        }
    } else {
        if (marks >= 50) {
            console.log("Grade: D (Pass)");
        } else {
            console.log("Grade: F (Fail)");
        }
    }

