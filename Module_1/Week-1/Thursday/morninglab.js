// Display the larger of two integers
const num1 = 23;
const num2 = 5;

if (num1 > num2) {
    console.log(num1);
} else if (num2 > num1) {
    console.log(num2);
}

// Student grades
const studentGrade = 85;

if (studentGrade >= 90 ) {
    console.log("Grade: A");
} else if (studentGrade >= 80 && studentGrade < 90) {
  console.log("Grade: B"); 
} else if (studentGrade >= 70 && studentGrade < 80) {
  console.log("Grade: C");
} else if (studentGrade >= 55 && studentGrade < 70) {
    console.log("Grade: D")
} else if (studentGrade < 55) {
    console.log("Grade: F")
}

// Greeting based on time of day
const time = 1230;

if (time >= 0500 && time <= 1159) {
    console.log("Good morning, starshine.")
} else if (time >= 1200 && time <= 1600) {
    console.log("Good afternoon!")
} else {
    console.log("Hey there!");
}