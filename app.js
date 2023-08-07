// Javascript Assignment 1
// Alerts

// Q1: Write a script to greet your website visitor using JS alert box.
// alert("Hello, Mohsin! Welcome to our website!")

// Q2: Write a script to display following message on your webpage:
// alert("Error! Please Enter a valid password")

// Q3: Write a script to display following message on your web
// page: (Hint : Use line break)
// alert("Welcome to JS Land...\n Happy Coding")

// Q4: Write a script to display following messages in sequence:
// alert("Welcome to JS Land")
// alert("Happy Coding")

// Q5: Generate the following message through browser’s
// developer console:
// alert("Hello... I can run javascript through my web browser console")

// VARIABLES FOR STRINGS
// Q1:Declare a variable called username.
// var username="MohsinAlvi";
// console.log(username);

// Q2:Declare a variable called myName & assign to it a string
// that represents your Full Name.
// var myName="Mohsin Alvi";
// console.log(myName);

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

// var title="Top 5 Beautifull Cities in Pakistan";
// var message="Hello World";
// alert(title);
// alert(message);

// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.
// var myName="Mohsin Alvi";
// var age="20 years old"
// var education="Doing Computer Science From Iqra University and\nalso doing Web and MobApp development from Saylani "
// alert(myName);
// alert(age);
// alert(education);

// 5. Write a script to display the following alert using one JS
// variable:
// var dis="Pizza\nPizz\nPiz\nPi\nP";
// alert(dis);

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)
// var email = "example@example.com";
// var message = "Your email address is: " + email;
// alert(message);

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:
// var book = "A smarter way to learn JavaScript";
// alert(book)

// 8. Write a script to display this in browser through JS
// function displayContent() {
//     var content = "I can write Html content in js.";
//     document.getElementById("output").innerHTML = content;
// }


// 9. Store following string in a variable and show in alert and
// browser through JS
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”
// var str="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
// alert(str);

// VARIABLES FOR NUMBERS
// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.
// var age="I am 20years old";
// alert(age);

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.
// var visitCount = 0;

// Function to display the visit count
// function displayVisitCount() {
//     visitCount++;
//     var message = "You have visited this site " + visitCount + " times.";
//     alert(message);
// }

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:
// var birthYear = 1990;
// var currentYear = new Date().getFullYear();
// var age = currentYear - birthYear;

// var message = "My birth year is: " + birthYear + "<br>" +
//     "I am " + age + " years old.";

// document.getElementById("output").innerHTML = message;


// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.


// var visitorName = "John Doe";
// var productTitle = "T-shirt";
// var quantity = 5;

// var message = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.";

// document.getElementById("output").innerHTML = message;

// VARIABLE NAMES: LEGAL & ILLEGAL
// 1. Declare 3 variables in one statement.
// var variable1 = "Tom", variable2 = 42, variable3 = true;
// console.log(variable1,variable2,variable3);

// 2. Declare 5 legal & 5 illegal variable names.
// Legal Variable Names:
// firstName
// age
// totalSales
// _discount
// $price

// Illegal Variable Names:
// 2ndPlace (Variable names cannot start with a number)
// my-name (Variable names cannot contain hyphens)
// @username (Variable names cannot start with special characters except _ and $)
// function (Variable names cannot be JavaScript keywords)
// my variable (Variable names cannot contain spaces)

// MATH EXPRESSIONS
// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
// var num1=5;
// var num2=6
// var sum=num1 + num2;
// console.log(sum)

// Repeat task1 for subtraction, multiplication, division &
// modulus.
// var num1=10;
// var num2=6
// var subt=num1 - num2;
// console.log(subt)

// var num1=2;
// var num2=4;
// var mul=num1 * num2;
// console.log(mul)

// var num1=8;
// var num2=4;
// var divide=num1 / num2;
// console.log(divide)

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.
// a. Declare a variable.
// var myVariable;

// // b. Show the value of variable in your console like “Value after variable declaration is: ??”.
// console.log("Value after variable declaration is: " + myVariable);

// // c. Initialize the variable with some number.
// myVariable = 5;

// // d. Show the value of variable in your console like “Initial value: 5”.
// console.log("Initial value: " + myVariable);

// // e. Increment the variable.
// myVariable++;

// // f. Show the value of variable in your console like “Value after increment is: 6”.
// console.log("Value after increment is: " + myVariable);

// // g. Add 7 to the variable.
// myVariable += 7;

// // h. Show the value of variable in your console like “Value after addition is: 13”.
// console.log("Value after addition is: " + myVariable);

// // i. Decrement the variable.
// myVariable--;

// // j. Show the value of variable in your console like “Value after decrement is: 12”.
// console.log("Value after decrement is: " + myVariable);

// // k. Show the remainder after dividing the variable’s value by 3.
// var remainder = myVariable % 3;

// // l. Output: “The remainder is : 0”.
// console.log("The remainder is: " + remainder);

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:
// Cost of one movie ticket
// var ticketPrice = 600;

// // Number of tickets
// var numberOfTickets = 5;

// // Calculate the total cost
// var totalCost = ticketPrice * numberOfTickets;

// // Display the output
// console.log("Cost of one movie ticket: " + ticketPrice + " PKR");
// console.log("Number of tickets: " + numberOfTickets);
// console.log("Total cost for buying " + numberOfTickets + " tickets: " + totalCost + " PKR");



// 5. Write a script to display multiplication table of any
// number in your browser.
// Prompt the user for a number
// var number = parseInt(prompt("Enter a number to display its multiplication table:"));

// // Display the multiplication table in the console
// console.log("Multiplication Table of " + number + ":");

// for (var i = 1; i <= 10; i++) {
//     var result = number * i;
//     console.log(number + " x " + i + " = " + result);
// }




// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// Conversion Formulae:
// Conversion Formulae: Celsius to Fahrenheit: (C * 9/5) + 32
//                      Fahrenheit to Celsius: (F - 32) * 5/9

// a. Store a Celsius temperature into a variable.
// var celsiusTemperature = 30;
// b. Convert it to Fahrenheit & output "NNoC is NNoF".
// var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
// console.log(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F");
// c. Store a Fahrenheit temperature into a variable.
// var fahrenheitTemp = 80;
// d. Convert it to Celsius & output "NNoF is NNoC".
// var celsiusTemp = (fahrenheitTemp - 32) * 5/9;
// console.log(fahrenheitTemp + "°F is " + celsiusTemp + "°C");









// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

// Store the values
// var priceItem1 = 200;
// var priceItem2 = 300;
// var quantityItem1 = 2;
// var quantityItem2 = 3;
// var shippingCharges = 50;

// // Calculate the total cost
// var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// // Display the receipt
// console.log("Shopping Cart Receipt:");
// console.log("---------------------");
// console.log("Price of Item 1: " + priceItem1 + " PKR");
// console.log("Quantity of Item 1: " + quantityItem1);
// console.log("Price of Item 2: " + priceItem2 + " PKR");
// console.log("Quantity of Item 2: " + quantityItem2);
// console.log("Shipping Charges: " + shippingCharges + " PKR");
// console.log("---------------------");
// console.log("Total Cost: " + totalCost + " PKR");





// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// Store total marks and marks obtained by the student
// var totalMarks = 500;
// var marksObtained = 390;

// // Calculate the percentage
// var percentage = (marksObtained / totalMarks) * 100;

// // Display the result
// console.log("Total Marks: " + totalMarks);
// console.log("Marks Obtained: " + marksObtained);
// console.log("Percentage: " + percentage.toFixed(2) + "%");






// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
// Given amounts
// var usDollars = 10;
// var saudiRiyals = 25;

// // Exchange rates
// var exchangeRateUSD = 104.80;
// var exchangeRateSAR = 28;

// // Convert to Pakistani Rupees in a single expression
// var totalRupees = (usDollars * exchangeRateUSD) + (saudiRiyals * exchangeRateSAR);

// // Display the result
// console.log("Total currency in Pakistani Rupees: " + totalRupees.toFixed(2) + " PKR");



// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
// Initialize the variable with a number

// var number = 10;

// // Perform arithmetic operations in a single expression
// var result = ((number + 5) * 10) / 2;

// // Display the result
// console.log("Result: " + result);



// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.
// Store the current year and birth year
// var currentYear = new Date().getFullYear();
// var birthYear = 1990; // Replace with the actual birth year

// // Calculate possible ages
// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;

// // Display the output
// console.log("They are either " + age1 + " or " + age2 + " years old.");




// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.

// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// Store the radius of the circle
// var radius = 5; // Replace with the actual radius value

// // Calculate the circumference and area
// var circumference = 2 * Math.PI * radius;
// var area = Math.PI * Math.pow(radius, 2);

// // Display the results
// console.log("The circumference is " + circumference.toFixed(2));
// console.log("The area is " + area.toFixed(2));



// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// Store your favorite snack, current age, maximum age, and estimated amount per day
// var favoriteSnack = "Chocolate Bars";
// var currentAge = 25;
// var maximumAge = 80;
// var amountPerDay = 2;

// // Calculate the total amount needed
// var yearsRemaining = maximumAge - currentAge;
// var totalAmountNeeded = yearsRemaining * 365 * amountPerDay;

// // Display the result
// console.log("You will need " + totalAmountNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");
