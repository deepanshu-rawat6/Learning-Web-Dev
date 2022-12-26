/* 
 * Accept dogAge from the user and convert it into humanAge using the formula
 *   humanAge = (dogAge - 2) * 4 + 21
*/

// Code:

var dogAge = prompt("Enter your dog's age: ");
var humanAge = ((dogAge - 2) * 4) + 21;
alert("Converted dog age to human age: " + humanAge);