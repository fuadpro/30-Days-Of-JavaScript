//                                  Exercises: Level 1
// const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']
// const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
// const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
//                 for (let i = 0; i <= 10; i++) {
//                   console.log(i);
//                 }

//                 let i = 0;
//                 while (i <= 10) {
//                   console.log(i);
//                   i++;
//                 }

//                 let i = 0;
//                 do {
//                   console.log(i);
//                   i++;
//                 } while (i <= 10);

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
//                   for (let i = 10; i >= 0; i--) {
//                     console.log(i);
//                   }

//                   let i = 10;
//                   while (i >= 0) {
//                     console.log(i);
//                     i--;
//                   }

//                   let i = 10;
//                   do {
//                     console.log(i);
//                     i--;
//                   } while (i >= 0);

// 3. Iterate 0 to n using for loop
//         let n = 15;
//         for (let i = 0; i <= n; i++) {
//           console.log(i);
//         }

// 4. Write a loop that makes the following pattern using console.log():
//           let code = '';
//           for (let i = 0; i <= 8; i++) {
//              console.log(code += '#')    
//           }

// 5. Use loop to print the following pattern:
//           let code = '';
//           for (let i = 0; i <= 10; i++) {
//              console.log(code = `${i} x ${i} = ${i * i} \n`)    
//           }

// 6.Using loop print the following pattern
//  i    i^2   i^3
//           let code = '';
//           for (let i = 0; i <= 10; i++) {
//              console.log(code = `${i}  ${i**2}  ${i**3} \n`)    
//           }

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
            // for (let i = 0; i <= 100; i++) {
            //         if (i % 2 === 0) {
            //             console.log(i);
            //         }
            //     }

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
            // for (let i = 0; i <= 100; i++) {
            //     if (i % 2 !== 0) {
            //     console.log(i);
            //     }
            // }

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
            // let inputValue= 7;
            // let isprime= inputValue == 1 ? false:true;
            // for(let i=2;i<inputValue;i++){
            // inputValue%i==0? isprime*=false :isprime*=true;
            // };
            // console.log( `${inputValue} is ${isprime? 'prime':'not prime'} number`);
                        // 1. Method 
                // function isPrime(num) {
                //     if(num <= 2) return false;
                //     for (let i = 2; i < num; i++) {
                //         if( num % i == 0) 
                //             return false;
                //      }
                //     return true;
                // }
                // for(let i = 0; i < 100; i++){
                //     if(isPrime(i)) console.log(i);
                // }
                        // 2. Method 
                // for (let i = 0; i <= 100; i++) {
                //     let isPrime = (i > 2) ? true : false;
                //     for (let j = 2; j < i; j++) {
                //       if (i % j === 0) {
                //         isPrime = false;
                //         break;
                //       }
                //     }
                //     if (isPrime) {
                //       console.log(i);
                //     }
                //   }


// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
                    // let sum = 0;
                    // for (let i = 0; i <= 100; i++) {
                    // sum += i;
                    // }
                    // console.log("The sum of all numbers from 0 to 100 is: " + sum);
// The sum of all numbers from 0 to 100 is 5050.

// 11.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
                    // let sum = 0;
                    // let sum2 = 0;
                    // for (let i = 0; i <= 100; i++) {
                    //     if (i % 2 === 0) {
                    //     sum2 += i;
                    // }
                    // else if (i % 2 !== 0) {
                    //     sum += i;
    }
                    // }
                    // console.log(`The sum of all evens from 0 to 100 is ${sum}. And the sum of all odds from 0 to 100 is ${sum2}.`);

// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

// 12.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
                    // let sum = 0;
                    // let sum2 = 0;
                    // let arr = [];
                    // for (let i = 0; i <= 100; i++) {
                    //     if (i % 2 === 0) {
                    //         sum2 += i;
                    //     }
                    //     else if (i % 2 !== 0) {
                    //         sum += i;
                    //     }
                    // }
                    // arr.push(sum,sum2)
                    // console.log(arr)
//   [2550, 2500]

// 13. Develop a small script which generate array of 5 random numbers

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

// 15. Develop a small script which generate a six characters random id:
// 5j2khz

//                                Exercises: Level 2
// 1. Develop a small script which generate any number of characters random id:
//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba

// 2. Write a script which generates a random hexadecimal number.
// '#ee33df'

// 3. Write a script which generates a random rgb color number.
// rgb(240,180,80)

// 4. Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// 5. Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

// 6. Use the countries array to create the following array of arrays:

//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]

// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// ['Finland','Ireland', 'Iceland']

// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// ['Albania', 'Bolivia','Ethiopia']

// 9.Using the above countries array, find the country containing the biggest number of characters.
// Ethiopia

// 10. Using the above countries array, find the country containing only 5 characters.
// ['Japan', 'Kenya']

// 11. Find the longest word in the webTechs array

// 12. Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

// 16. Print all the elements of array as shown below.

//   const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB

//                                  Exercises: Level 3
// 1. Copy countries array(Avoid mutation)


// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries


// 3. Sort the webTechs array and mernStack array


// 4. Extract all the countries contain the word 'land' from the countries array and print it as array


// 5. Find the country containing the hightest number of characters in the countries array


// 6. Extract all the countries contain the word 'land' from the countries array and print it as array


// 7. Extract all the countries containing only four characters from the countries array and print it as array


// 8. Extract all the countries containing two or more words from the countries array and print it as array


// 9. Reverse the countries array and capitalize each country and stored it as an array
