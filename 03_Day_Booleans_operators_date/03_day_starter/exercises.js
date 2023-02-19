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
// 1. 
//     let base = prompt ("Base daxil et : ", "0");
//     let hund = prompt ("H daxil et : ", "0");

//     let area = 0.5 * base * hund;
//     console.log(area);
// 2.
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
