function getMilk(currentBalance, costPerBottle){
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("leaveHouse");
    
    console.log("buy " + calcBottles(currentBalance, costPerBottle) +" bottles of milk");
    // console.log("balance left: " + currentBalance)
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return calcChange(currentBalance,costPerBottle);
}

function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    
    return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;    
    
    return change;
}

// 1 Bottle = $ 1.5

console.log("Hello master, here is your " + getMilk(5, 2.5) + " change.");




// Solution to Karel IDE 5x5 maze
// Problem : Move diagonal and putBeeper() at the diagonal elements

// Code:
 
//  function main(){ 
//   putBeeper();
//   oneIterate();    
//   oneIterate();    
//   oneIterate();    
//   oneIterate(); 
// }  

// function oneIterate(){    
//    move();    
//    turnLeft();    
//    move();  
//    putBeeper();
//    turnRight(); 
// }



// Soltuion to the 5x5 chessboard pattern problem 
// Problem: add putBeeper() like as the blacks and whites in ChessBoard

// Code:

// function main(){
//    //your code here
//    putBeeper();
//    stdMove();
//    stdMove();
   
//    turnleftmoveturnleft();
   
//    unstdMove();
//    unstdMove();
   
//    turnrightmoveturnright();
   
//    putBeeper();
//    stdMove();
//    stdMove();
   
//    turnleftmoveturnleft();
   
//    unstdMove();
//    unstdMove();
   
//    turnrightmoveturnright();
   
//    putBeeper();
//    stdMove();
//    stdMove();
   
// }

// function stdMove(){
//    move();
//    move();
//    putBeeper();
// }

// function unstdMove(){
//    move();
//    putBeeper();
//    move();
// }

// function turnleftmoveturnleft(){
//    turnLeft();
//    move();
//    turnLeft();
// }

// function turnrightmoveturnright(){
//    turnRight();
//    move();
//    turnRight();
// }


// function lifeInWeeks(age) {
    
// /************Don't change the code above************/    
    
//     //Write your code here.
//     var year = 90 - age;
//     var month = year * 12;
//     var weeks = year * 52;
//     var days = year * 365;
//     console.log("You have " + days + " days, " + weeks + " weeks, and " + month + " months left." )
    
    
    
// /*************Don't change the code below**********/
// }

// lifeInWeeks(56);



//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

// function bmiCalculator(weight,height) {
//     return Math.floor(weight/(height * height));
// }

// function bmiCalculator(weight,height) {
//     return Math.floor(weight/Math.pow(height,2));
// }

// function bmiCalculator(weight,height) {
//     return Math.round(weight/Math.pow(height,2));
// }

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 
console.log(bmi); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
