//  Conditional Statments:

/*
 * if else
 */

// Comparator: 

/*
 *  === : is equal to
 *  !== : is not equal to
 *   >  : is greater than 
 *   <  : is lesser than
 *   >= : is greater than or equal to
 *   <= : is less than or equal to 
 *   && : AND
 *   || : OR
 *   !  : NOT
 */

// difference between "=="  and "==="

// Code:

// var a = 1;
// var b = "1";

// console.log(typeof(a));
// console.log(typeof(b));

// if (a == b) {
//     console.log("yes");
// } else {
//     console.log("no");
// }
// This results in "yes" as it doesn't care about the datatypes 

// if (a === b) {
//     console.log("yes");
// } else {
//     console.log("no");
// }
// This results in "no" as the datatypes are different

// Love Calculator but with conditional statements:

// Code: 

// var nameOne = prompt("What is your name: ");
// var nameTwo = prompt("What is their name: ");

// var loveScore = Math.floor(Math.random() * 100) + 1;
// if (loveScore > 70) {
//     alert("Your love score " + loveScore + "% : Almost a perfect match!");
// } else if (loveScore > 30 && loveScore <= 70) {
//     alert("Your love score " + loveScore + "%");
// } else {
//     alert("Your love score " + loveScore + "% : You go together like oil and water");
// }


// BMI Calculator Advanced (IF/ELSE)

// Previously, we've created a function that is able to calculate the BMI. But once we get a result, we will want to tell the user what the number means.

// Write a function that outputs (returns) a different message depending on the BMI.


// BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."

// BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

// BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."

// Code: 

// function bmiCalculator (weight, height) {
//     var bmi = weight / Math.pow(height,2);
//     var interpretation;
//     if (bmi < 18.5) {
//         interpretation = "Your BMI is " + bmi + ", so you are underweight.";
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//         interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
//     } else {
//         interpretation = "Your BMI is " + bmi + ", so you are overweight.";
//     }
//     return interpretation;
// }


// Write a program that works out whether if a given year is a leap year. A normal year has 365 days, leap years have 366, with an extra day in February. The reason why we have leap years is really fascinating, this video goes into more detail.

// This is how to work out whether if a particular year is a leap year:

// A year is a leap year if it is evenly divisible by 4 ;

// except if that year is also evenly divisible by 100;

// unless that year is also evenly divisible by 400.


// Code:


// function isLeap(year) {
    
// /**************Don't change the code above****************/    
    
//     //Write your code here.    
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 console.log("Leap year.");
//             } else {
//                 console.log("Not leap year.");
//             }
//         } else {
//             console.log("Leap year.");
//         }
//     } else {
//         console.log("Not leap year.");
//     }

    

// /**************Don't change the code below****************/    

// }




