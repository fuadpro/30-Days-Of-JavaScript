//                                            Exercises: Level 1
//
//    1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
// let firstName = 'Fuad';
// console.log(typeof firstName); // String
// let lastName = 'Mammadov';
// console.log(typeof lastName); // String   country, city  also string
// let age = 28;
// console.log(typeof age) // Number
// let isMarried = false
// console.log(typeof age) // Boolean

//   2. Check if type of '10' is equal to 10
// let a = '10';
// let b = 10;
// console.log (typeof a == typeof b)  //false  because typeof a string, typeof b number

//     3. Check if parseInt('9.8') is equal to 10
// let a = parseInt('9.8'); // 9     if use parseFloat('9.8') -> 9.8
// let b = 10 ;
// console.log(a == b) // false
//
//    4. Boolean value is either true or false.
//
//       4.1 Write three JavaScript statement which provide truthy value.
//         let x = true; // This statement assigns the boolean value true to the variable x, which is a truthy value.

//         let y = "hello"; // This statement assigns the string value "hello" to the variable y, which is also a truthy value.

//         let z = 10; // This statement assigns the number value 10 to the variable z, which is also a truthy value.
//         In JavaScript, any non-boolean value can be evaluated as a boolean in a truthy or falsy context. 
//         Truthy values are values that are considered true in such a context, while falsy values are values that are considered false.

//       4.2 Write three JavaScript statement which provide falsy value.
//         let x = false; // This statement assigns the boolean value false to the variable x, which is a falsy value.

//         let y = 0;  // This statement assigns the number value 0 to the variable y, which is also a falsy value.

//         let z = "";  // This statement assigns an empty string to the variable z, which is also a falsy value.

//         In JavaScript, there are six falsy values that will evaluate to false in a boolean context: 
//         false, 0, -0, 0n, "" (empty string), null, undefined, and NaN (Not a Number).

//      5.Figure out the result of the following comparison expression first without using console.log(). 
//      After you decide the result confirm it using console.log()

// 1.   4 > 3    //true
// 2.   4 >= 3   //true  
// 3.   4 < 3    //false
// 4.   4 <= 3   //false
// 5.   4 == 4   //true
// 6.   4 === 4  //true
// 7.   4 != 4   //false
// 8.   4 !== 4  //false
// 9.   4 != '4' //false
// 10.  4 == '4' //true
// 11.  4 === '4' //false
// 12.  Find the length of python and jargon and make a falsy comparison statement.
//     let a = 'python';
//     let b = 'jargon';
//     console.log(a.length == b.length)    // true


//                                          Exercises: Level 2 
//
// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
//     let base = prompt ("Base daxil et : ", "0");
//     let hund = prompt ("H daxil et : ", "0");

//     let area = 0.5 * base * hund;
//     console.log(area);
// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
//   let a = prompt ("a daxil et : ", "0");
//   let b = prompt ("b daxil et : ", "0");
//   let c = prompt ("c daxil et : ", "0");


//   let perimeter = +a + +b + +c; 
//   console.log(perimeter)
//                   OR    
// let a = parseFloat(prompt("a daxil et: ", "0"));
// let b = parseFloat(prompt("b daxil et: ", "0"));
// let c = parseFloat(prompt("c daxil et: ", "0"));

// let perimeter = a + b + c;
// console.log(perimeter);
//                   OR
// let a = Number(prompt("a daxil et: ", "0"));
// let b = Number(prompt("b daxil et: ", "0"));
// let c = Number(prompt("c daxil et: ", "0"));

// let perimeter = a + b + c;
// console.log(perimeter);

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// let a = prompt ("a daxil et : ");
// let b = prompt ("b daxil et : ");

// let rectangle  = 2 * a +  2 * b;
//          or and  Number()  and parseFloat()
// let rectangle  = 2 * (+a + +b);
// console.log(rectangle)

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let r = prompt ("Radius daxil et : ");
// const pi= 3.14;
// let areaCircle  = pi * r * r;
// let circumference = 2 * pi * r ;
// console.log(areaCircle, circumference );

//   5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
// Define the equation
// let equation = "y = 2x - 2";

// // Extract the coefficients
// let m = 2; // slope
// let b = -2; // y-intercept

// // Calculate the x-intercept
// let x_intercept = -b/m;

// // Output the results
// console.log("Equation: " + equation);        // Equation: y = 2x - 2
// console.log("Slope: " + m);                  //Slope: 2
// console.log("Y-Intercept: " + b);            //Y-Intercept: -2
// console.log("X-Intercept: " + x_intercept);  //X-Intercept: 1

// 6.Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)




// 7.Compare the slope of above two questions.



// 8.Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.  






// 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// let a = prompt ("Hour daxil et : ");
// let b = prompt ("Rate daxil et : ");
// let earning = a * b;

// console.log(earning);

// 10.If the length of your name is greater than 7 say, your name is long else say your name is short.
// let name = 'Fuad';
// if(name.lenght > 7){
//   console.log("Grater")
// }else{
//   console.log("Short")
// }

// 11. Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh';
// let lastName = 'Yetayeh';

// Your first name, Asabeneh is longer than your family name, Yetayeh


// 12.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250;
// let yourAge = 25;


// I am 225 years older than you.

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.


// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years



// Enter number of years you live: 100
// You lived 3153600000 seconds.


// 15. Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm


//                                          Exercises: Level 3

// 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two 
// digits(7 hours should be 07 and 5 minutes should be 05 )

const now = new Date();
const year = now.getFullYear();
const month = (now.getMonth() + 1).toString().padStart(2, '0');
const day = now.getDate().toString().padStart(2, '0');
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');
const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;

console.log(formattedDateTime);

// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
