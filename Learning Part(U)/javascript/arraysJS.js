/*
 * Arrays in js
 * Collections of similar datatypes 
 */

// var componentList = ["variables","functions","conditional statements","operators"];
// console.log(componentList.length);
// console.log(componentList[0]); 
// console.log(componentList.includes("variables"));

/**
 * To make a guesList for the person invited 
 * Take a prompt of a guestName
 * Check whether it is present in the array or not
 */

// var guestList = ["Angela","Jack","Pam","James","Jason","Lara"];

// var guestName = prompt("What is your name?");

// if (guestList.includes(guestName)) {
//     alert("Your welcome!");
// } else {
//     alert("Better luck next time!");    
// }


// Adding elements in the array

// Code:

// var output = [];
// output.push(1);
// output.push(2);
// output.push(3);
// console.log(output);


// Lets try creating a function who does this task of pushing the numbers into the arrays

// Code:

// var output = [];
// var count = 1;
 
// function fizzBuzz() {
//     if (count % 3 === 0 && count % 5 === 0) {
//         output.push("fizzBuzz");
//     } else if (count % 5 === 0) {
//         output.push("buzz");
//     } else if (count % 3 === 0 ) {
//         output.push("fizz");
//     } else {
//         output.push(count);
//     }
//     count += 1;
//     console.log(output);
// }

// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();


// Who's Buying Lunch? Code Challenge

// You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

// Code:

// function whosPaying(names) {
    
// /******Don't change the code above*******/
    
//     //Write your code here.
//     return names[Math.floor(Math.random() * names.length)] + " is going to buy lunch today!";
// /******Don't change the code below*******/    
// }

// var arr = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
// console.log(whosPaying(arr));



// Iterations

// While Loops

// Lets try creating a function who does this task of pushing the numbers into the arrays, but instead of typing invoking the function fizzBuzz() again and again we simply add a while loop

// Code:

// var output = [];
// var count = 1;
 
// function fizzBuzz() {
//     while (count <= 100) {
//         if (count % 3 === 0 && count % 5 === 0) {
//             output.push("fizzBuzz");
//         } else if (count % 5 === 0) {
//             output.push("buzz");
//         } else if (count % 3 === 0 ) {
//             output.push("fizz");
//         } else {
//             output.push(count);
//         }
//         count += 1;
//     } 
//     console.log(output);
// }

// fizzBuzz();



// Solution to 99 bottle of beers

// Code:

// function printPattern() {
//     var count = 99;
//     while (count > 0) {
//         if (count != 1) {
//             console.log(count + " bottles of beer on the wall, " + count + " bottles of beer.");
//             console.log("Take one down and pass it around, " + (count - 1) + " bottles of beer on the wall\n");
//         } else {
//             console.log(count + " bottle of beer on the wall, " + count + " bottle of beer.");
//             console.log("Take one down and pass it around, no more bottles of beer on the wall\n");
//         }
//         count--;
//     }
//     console.log("No more bottles of beer on the wall, no more bottles of beer.");
//     console.log("Go to the store and buy some more, 99 bottles of beer on the wall.\n");
// }

// printPattern();


//     var numberOfBottles = 99
//     while (numberOfBottles >= 0) {
//         var bottleWord = "bottle";
//         if (numberOfBottles === 1) {
//             bottleWord = "bottles";
//         } 
//         console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//         console.log(numberOfBottles + " " + bottleWord + " of beer,");
//         console.log("Take one down, pass it around,");
//     	numberOfBottles--;
//         console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
//     }


// The Fibonacci Exercise

// Fibonacci was an Italian mathematician who came up with the Fibonacci sequence:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

// Where every number is the sum of the two previous ones.

// e.g. 0, 1, 1, 2, 3, 5 comes from

// 0 + 1 = 1

// 1 + 1 = 2

// 1 + 2 = 3

// 2 + 3 = 5

// etc.

// Create a function where you can call it by writing the code:

// fibonacciGenerator (n)

// Where n is the number of items in the sequence.

// So I should be able to call:

// fibonacciGenerator(3) and get

// [0,1,1]

// as the output.

// function fibonacciGenerator (n) {
// //Do NOT change any of the code above 👆
    
//     //Write your code here:
//     var output = [];
//     if (n == 1) {
//         output = [0];
//     } else if (n == 2) {
//         output = [0,1];
//     } else {
//         output = [0,1];
//         for(var i = 2; i < n; i++) {
//             output.push(output[i - 1] + output[i - 2]);
//         }  
//     }
//     return output; 
//     //Return an array of fibonacci numbers starting from 0.
    
// //Do NOT change any of the code below 👇
// }


// console.log(fibonacciGenerator(100));
// console.log(fibonacciGenerator(1));
// console.log(fibonacciGenerator(2));
// console.log(fibonacciGenerator(20));