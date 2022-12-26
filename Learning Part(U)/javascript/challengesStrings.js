/*
 * for prompting a  message for a user, taking input and message from the window
*/

// Code:

// var message = prompt("Enter the message to be printed: ");
// var name = prompt("Enter the name of the person: ");
// alert("Good Morning, " + message + ", " + name);
// console.log("Good Morning, " + message + ", " + name);


/*
  * Checking whether the enterted string is less than, equal to , or greater than the defined         (theme Twitter)
  * Limit is 280;
*/

// Code:

// var limit = 280;
// var tweet = prompt("Compose your tweet: ");
// var tweetCount = tweet.length;
// alert("You have written " + tweetCount + " characters, you have " + (limit - tweetCount) + " characters left");

/*
 * Same tweet related question but now the content do now cross the specified limit
 * Limit : 280
*/

// Code:

// var limit = 280;
// var tweet = prompt("Compose your tweet: ");
// var tweetUnder280 = tweet.slice(0,limit);
// alert(tweetUnder280);

// Another effective way, of using just on line instead of 4 lines

// alert(prompt("Compose your tweet: ").slice(0,280));


/* 
 * Accept name from prompt but capitalize the first character and others to be lowercase    
*/

// Code:

var name = prompt("Enter your name: ");
// getting first character
var firstChar = name.slice(0,1);
// capitalizing first char
var upperCaseFirstChar = firstChar.toUpperCase();
// isolate the rest of the name
var restOfName = name.slice(1,name.length);
// lowercase the rest part
var lowerCaseRestOfName = restOfName.toLowerCase();
// concatinating the two parts 
var capitlizedName = upperCaseFirstChar + lowerCaseRestOfName;
// printing the browser
alert("Hello, " + capitlizedName + "!");

// Hello Deepanshu!
