//-----------------------------------------------------------------------------------------//
                                     //Assignment # 06 
//-----------------------------------------------------------------------------------------//                                 
                                     //Chapter No:21-25
                                     //STRING METHODS 
//-----------------------------------------------------------------------------------------//

// Question No:1
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = (firstName + lastName);
console.log("Good Morning" + " " + fullName);


// Question No:2
var str = prompt("Enter your favorite mobile phone:");
var stringLength = str.length;
console.log("My favorite phone is:" + " " + str + "\n" + "Length of string:" + " " + stringLength);


// Question No:3
var str = "PakisTani";
var findLetter = str.indexOf("T");
console.log("The String is:" + " " + str + "\n" + "Index of string:" + " " + findLetter);


// Question No:4
var str = "PakisTani Zindabad";
var findLetter = str.lastIndexOf("d");
console.log("The String is:" + " " + str + "\n" + "Index of string:" + " " + findLetter);


// Question No:5
var str = "PakisTani";
var findLetter = str.charAt(3);
console.log("The String is:" + " " + str + "\n" + "Index of letter:" + " " + findLetter);


// Question No:6
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" " + lastName);
console.log("Good Morning" + " " + fullName);


// Question No:7
var str = "Karachi Airport";
var rep = str.replace("Karachi", "Islamabad");
console.log(rep); 


// Question No:8
var msg = "Ali and Sami are best friends. They play cricket and football together.";
var rep = msg.replace(/and/g, "&");
console.log(rep); 


// Question No:9
var word = "472";
console.log("Value is:", word, "Type is:", typeof(word));
console.log("Value is:", word = +word, "Type is:", typeof(word));


// Question No:10
var str = prompt("Enter your name or something:");
var capLetter = str.toUpperCase();
console.log(capLetter);


// Question No:11
var str = prompt("Enter title case:");
console.log("User Input:" + " " + str);
var firstCapLetter = str.slice(0,1);
firstCapLetter = firstCapLetter.toUpperCase();
var remainLetter = str.slice(1);
remainLetter = remainLetter.toLowerCase();
var str = firstCapLetter + remainLetter;
console.log("Title Case:" + " " + str);


// Question No:12
var num = prompt("Enter a dotted number:");
var numJoined = num.split('.').join("");
console.log("Number:", num, "\n", "Result:", numJoined);


// Question No:13
var userName = prompt("Enter username:")
if(!(/^[a-z, A-Z, 0-9]+$/i.test(userName)))
{
   alert("Enter a valid username...");
}
else
{
    alert("Login Successfully...");
}


// Question No:14
alert("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?");
var BakeryItem = ["cake", "apple pie", "cookie", "chips", "patties"];
var userCart = prompt("Welcom! What you want to take from bakery?");
var isFound = false;

for(i = 0; i < BakeryItem.length; i++)
{
    if(userCart === BakeryItem[i])
    {
        alert(BakeryItem[i] + " " + "is available at index" + " " + i + " " + "in our bakery");
        isFound = true;
        break
    }  
}
if (isFound === false) {
    alert("We are sorry. " + userCart + " is not availabale.")
}


// Question No:15
var userPass = prompt("Enter your password:");
console.log("Entered password:" + " " + userPass)
var letters = /^[0-9a-zA-Z]+$/;
if(userPass.match(letters))
{ 
    var checkNumber = userPass.charAt(0);
    if(checkNumber.match(/\d+/g))
    {
        //console.log("Password can not begin with a number");
        console.log('Please enter a valid password')
    }
    else if (userPass.length > 6) 
    { 
        //console.log("Your password length is valid");
        console.log("Login Succesfully");  
    }   
    else 
    {
        console.log('Please enter a valid password')
    } 
}


//var userPass = prompt("Enter your password:");
//console.log("Entered password:" + " " + userPass)
//var letters = /^[0-9a-zA-Z]+$/;
//if(userPass.match(letters))
//{ 
//    var checkNumber = userPass.charAt(0);
//    if(checkNumber.match(/\d+/g))
//    {
//   console.log("Password can not begin with a number");
//    }
//    else
//    {
//       if(userPass.length >= 6)
//       {
//           console.log("Your password length is valid");
       //}
//       else
//       {
//           console.log("Must contain atleast 6 characters");
//       }
   // }
//    alert("Please enter a valid password");
//} 
//else
//{ 
   // alert("Please enter a valid password");
//}

//try again
//var userPass = prompt("Enter your password:");
//console.log("Entered password:" + " " + userPass)
//var letters = /^[0-9a-zA-Z]+$/;
//if(userPass.match(letters))
//{ 
//    var checkNumber = userPass.charAt(0);
//    if(checkNumber.match(/\d+/g))
//    {
//    console.log("Password can not begin with a number");
//    }
//    else
//    {
//       if(userPass.length <= 6)
//      {
//        console.log("Must contain atleast 6 characters");
//       }
//    }
//    alert("Please enter a valid password");
//} 
//else {
//    alert("login successfully");
//}


// Question No:16
var str = "University of Karachi";
var splitLetter = str.split();
for (splitLetter = 0; splitLetter < str.length; splitLetter++) {
    console.log(str.charAt(splitLetter));
}

//var str = "University of Karachi";
//var splitLetter = str.split("");
//console.log(splitLetter);

//var str = "University of Karachi";
//var splitLetter = str.split(/\r\n|\r|\n/g);
//console.log(splitLetter);

// Question No:17
var str = prompt("Enter any sentence or any word:");
console.log("User Input:" + " " + str);
var lastChar = str.slice(-1);
console.log("Last Character of Input:" + " " + lastChar);


// Question No:18
// given string value method 1
var str = "malik faizan, malik farhan, malik safdar"; 
var countWord = (str.match(/malik/g)).length; 
console.log(countWord);

// from user input method 2
var str = prompt("Enter any sentence:"); 
var countWord = (str.match(/malik/g)).length; 
console.log(countWord);


//-----------------------------------------------------------------------------------------//
                                      //Chapter No:26-30
                                      //MATH METHODS 
//-----------------------------------------------------------------------------------------//

// Question No:1
//a
var num = +prompt("Enter any positive integer:");
console.log("Number is:" + " " + num);
//b
var round = Math.round(num);
console.log("Round of value:" + " " + round);
//c
var floor = Math.floor(num);
console.log("Floor value:" + " " + floor);
//d
var ceil = Math.ceil(num);
console.log("Ceil value:" + " " + ceil);


// Question No:2
//a
var negativeNum = -prompt("Enter any negative integer:");
console.log("Number is:" + " " + negativeNum);
//b
var negativeRound = Math.round(num);
console.log("Round of value:" + " " + negativeRound);
//c
var negativeFloor = Math.floor(num);
console.log("Floor value:" + " " + negativeFloor);
//d
var negativCeil = Math.ceil(num);
console.log("Ceil value:" + " " + negativCeil);


// Question No:3
var absolute = +prompt("Enter negative value:");
var absValue = Math.abs(absolute);
console.log(absValue);


// Question No:4
var diceRoll = Math.floor(Math.random() * 6 ) +1;
console.log("Random dice value:" + " " + diceRoll);


// Question No:5
var userToss = prompt("Do you choose HEADS or TAILS?").toUpperCase();
var coinToss = Math.random();
if (userToss === "HEADS") {
    if (coinToss < 0.5) {
        alert("The coin landed on heads. You Win!");
    }
    else {
        alert("The coin landed on tails. You Lose!");
    }   
}
else if(userToss === "TAILS") {
    if (coinToss < 0.5) {
        alert("The coin landed on heads. You Lose!");
    }
    else {
        alert("The coin landed on tails. You Win!");
    }
}
else
{
    alert("Ooops! Sorry did'nt match with head or tails so, please try again...");
}


// Question No:6
var randomNumber = Math.floor(Math.random() * 100 ) +1;
console.log("Random number between 1 and 100:" + " " + randomNumber);


// Question No:7
var weight = parseFloat(prompt("Please enter your weight"));
console.log("The weight of user is:" + " " + weight + " " + "kilograms");


// Question No:8
var userNumber = +prompt("Enter a number between 1 and 10:");
var secretNumber = Math.floor(Math.random() * 10 ) + 1;
if(userNumber === secretNumber)
{
    alert("Wa0oow! Congratulation you are master mind...");
}
else
{
    alert("Ooopss! Sorry your secret number did'nt match so, please try again...")
}


//-----------------------------------------------------------------------------------------//
                                      //Chapter No:31-34
                                      //DATE METHODS
//-----------------------------------------------------------------------------------------//

// Question No:1
var currentDateTime = new Date();
console.log(currentDateTime);


// Question No:2
var monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
var currentMonth = new Date();
alert("Current month: " + monthNames[currentMonth.getMonth()]);


// Question No:3
// Question No:2
var weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentWeek = new Date();
alert("Today is: " + " " + weekNames[currentWeek.getDay()]);


// Question No:4
var day = prompt("Enter a week name:");
day = day.toLocaleLowerCase();
if(day === "sunday" || day === "saturday")
{
    console.log("It's fun day");
}
else
{
    console.log("It's working day");
}


// Question No:5
var monthDate = new date();
var date = monthDate.getDate();
if(date > 16)
{
    console.log("First fifteen of the month...");
}
else
{
    console.log("Last fifteen of the month...");
}



// Question No:6
var date = new Date("July 20, 2016 15:00:00");
var nextDate = date.getDate() + 20;
date.setDate(nextDate);
var newDate = date.toLocaleString();


// Question No:7
var currentDateTime = new Date("Jan 1, 1970");
console.log("Current Date:" + " " , currentDateTime);

var miliSecond = currentDateTime.getTime();
console.log("Elapsed miliseconds since january 1, 1970:" + " " , miliSecond);

var minutes = currentDateTime.getMinutes();
console.log("Elapsed minutes since january 1, 1970:" + " " , minutes);


// Question No:8


// Question No:9


// Question No:10


// Question No:11


// Question No:12


// Question No:13


// Question No:14
//Username input from user
console.log("K-Electric Bill");
var customerName = prompt("Please enter customer name:");
console.log("Customer Name:" + " " + customerName);

//Current month
var monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
var currentMonth = new Date();
console.log("Current month: " + monthNames[currentMonth.getMonth()]);

//Number of unit input from user
var numberOfUnit = +prompt("Please enter number of units:");
console.log("Number of units:" + " " + numberOfUnit);

var bill = 0;
if(numberOfUnit <= 100)
{
    bill = numberOfUnit * 10;

}
else if(numberOfUnit > 100 && numberOfUnit <= 200)
{
    bill = (100 * 10) + (numberOfUnit - 100) * 15;
}
else if(numberOfUnit > 200 && numberOfUnit <= 300)
{
    bill = (100 * 10) + (100 * 15) + (numberOfUnit - 200) * 20;
}
else if(numberOfUnit > 300 && numberOfUnit <= 400)
{
    bill = (100 * 10) + (100 * 15) + (100 * 20) + (numberOfUnit - 300) * 25;
}
else if(numberOfUnit > 400 && numberOfUnit <= 500)
{
    bill = (100 * 10) + (100 * 15) + (100 * 20) + (100 * 25) +(numberOfUnit - 400) * 30;
}
else
{
    console.log("You number of units is too much....!!!")
}

//Charges per unit message
console.log("Charge per unit is different as per unit...");

//Net Amount Payable (Within Due Date)
console.log("Net Amount Payable (Within Due Date):" + " " + bill);

// Late payment surcharge
var latePay = 350;
console.log("Late Payment Surcharges:" + " " + latePay);

//Gross Amount Payable (Aftre Due Date)
var grossAmount = latePay + bill;
console.log("Gross Amount Payable (After Due Date):" + " " + grossAmount);





//-----------------------------------------------------------------------------------------//
                                      //Chapter No:35-38
                                      //FUNCTION METHODS
//-----------------------------------------------------------------------------------------//

// Question No:1
function currentDateTime()
{
    var currDateTime = new Date();
    console.log(currDateTime);
}
currentDateTime();


// Question No:2
function fullName(firstName, lastName)
{
    console.log("Assalam-0-alaikum good evening" + " " + firstName + " " + lastName);
}
fullName("Sir", "Muhammad Ali Mughal...");

// Question No:3
function sumOfTwoNumber(a,b)
{
    var a = +prompt("Enter first number:");
    //var op = prompt("Enter + operator:");
    var b = +prompt("Enter second number:");
    return a + b;
}
var sum = sumOfTwoNumber();
console.log(sum);


// Question No:4
function myCalculator(firstNumber,secondNumber)
{
    var firstNumber = +prompt("Enter first number:");
    var operator = prompt("Enter + operator:");
    var secondNumber = +prompt("Enter second number:");

    if(operator == "+")
    {
        return firstNumber + secondNumber;
    }
    
    else if(operator == "-")
    {
        return firstNumber - secondNumber;
    }
    else if(operator == "*")
    {
        return firstNumber * secondNumber;
    }
    else if(operator == "/")
    {
        return firstNumber / secondNumber;
    }
}
var totalResult = myCalculator();
console.log("Your desire answer is:" + " " + totalResult);


// Question No:5
function squareOfNumber(number)
{
    var number = +prompt("Enter first number:");
    console.log("Your desire value is:" + " " + number);
    return number * number;
}
var square = squareOfNumber();
console.log("Square of desire value:" + " " + square);


// Question No:6
function calculateFactorial(number)
{
    //console.log("Your desire factorial value is:" + " " + number);

    if(number < 0)
    {
        return -1;
    }
    
    else if(number == 0)
    {
        return 1;
    }
    else
    {
        return (number * calculateFactorial(number - 1));
    }
}
var factorialResult = calculateFactorial(6);
console.log("Your factorial answer is:" + " " + factorialResult);


// Question No:7
function startToEnd(startNumber, endNumber)
{
   for (var i=startNumber ; i <= endNumber ; i++)  
   {
     console.log(i);
   }
}
startToEnd(5,17);

// from user input
function startToEnd(startNumber, endNumber)
{
   var startNumber = +prompt("Enter your start number:");
   console.log("Your start number is:" + " " + startNumber);
   var endNumber = +prompt("Enter your end number:");
   console.log("Your end number is:" + " " + endNumber);

   for (var i=startNumber ; i <= endNumber ; i++)  
   {
     console.log(i);
   }
}
startToEnd();


// Question No:8
// given value in parameter
//var number;
function pythagorasTheorem(base , perpendicular )
{
    function squareOfNumber(number)
    {
        return number * number;
    }
    var SquareOfNum = squareOfNumber(7);
    console.log("Square of the number is:" + " " + SquareOfNum);
    return Math.sqrt(squareOfNumber(base) + (squareOfNumber(perpendicular)));
}
var pythagorasResult = pythagorasTheorem(6,9);
console.log("Pythagoras theorem is:" + " " + pythagorasResult);


// from user input program for pythagoras theorem
function pythagorasTheorem(base , perpendicular )
{
    var base = +prompt("Enter first number:");
    var perpendicular = +prompt("Enter second number:");
    return(Math.sqrt(Math.pow(base,2) + (Math.pow(perpendicular,2))));
}
var pythagorasResult = pythagorasTheorem();
console.log("Pythagoras theorem is:" + " " + pythagorasResult);



// Question No:9
var length = 6;
var width = 7;
//var area = length * width;
function areaOfRectangle(length, width)
{
    var area = length * width;
    return area;
}
var calculateAreaOfRectangle = areaOfRectangle(5,5);
console.log(calculateAreaOfRectangle);
areaOfRectangle(length, width);


// Question No:10
function palindrome(str) {
    var regx = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(regx, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  palindrome("A man, a plan, a canal. Panama");



// Question No:11
function firstLetterCapital(str)
{
    var firstWordCap = str.split(' ');
    var upperCase = [];

    for(var i = 0; i < firstWordCap.length; i++)
    {
        upperCase.push(firstWordCap[i].charAt(0).toUpperCase()+firstWordCap[i].slice(1));
    }
    return upperCase.join(' ');
}
var capFirstWord = firstLetterCapital("my name is malik faizan hassan");
console.log(capFirstWord);


// Question No:12
function longestWord(str)
{
    var string1 = str.match(/\w[a-z]{0,}/gi);
    var string2 = string1[0];

    for(var i = 1; i < string1.length; i++)
    {
        if(string2.length < string1[i].length)
        {
            string2 = string1[i];
        }
    }
    return string2;
}
var printLongWord = longestWord("Saylani Web And Mobile Hybird Application 2020.");
console.log("The longest word in sentence is:" + " " + printLongWord);


// Question No:13
function letterRepeatInString(str, letter)
{
    var countingLetter = 0;
    for(var checkLetter = 0; checkLetter < str.length; checkLetter++)
    {
        if(str.charAt(checkLetter) == letter)
        {
            countingLetter += 1;
        }
    }
    return countingLetter;
}
var printLetterInWord = letterRepeatInString("www.google.com", "o");
console.log("Letter repeat in word is:" + " " + printLetterInWord  + " " + "times.");


// Question No:13
//Calculate circumference of circle
function circumferenceOfCircle(radius)
{
    var A = Math.PI * (2 * radius); 
    console.log(A);
    console.log("The circumference of cicle is:" + " " + Math.round(A * 100) / 100);
}
circumferenceOfCircle(7);

//Calculate area of circle
function areaOfCircle(radius)
{
    var A = Math.PI * (radius * radius); 
    console.log(A);
    console.log("The area of cicle is:" + " " + Math.round(A * 100) / 100);
}
areaOfCircle(8);












