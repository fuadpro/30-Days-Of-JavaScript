//                                            Exercise: Level 1
// const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']
// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node' ]

// 1. Declare an empty array;
const arr = [] ;
const arr1 = Array();
const arr2 = new Array();

// 2. Declare an array with more than 5 number of elements
const arr4 = [1, 2 , 3, 4, 5, 6]

// 3. Find the length of your array
console.log(arr4.lenght);

// 4. Get the first item, the middle item and the last item of the array
console.log(arr[0], arr[parseInt((arr.length - 1) / 2)], arr[arr.length -1])

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
 let mixedDataTypes = ['Fuad', 28, true, null, {}, [], undefined]

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
 let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Germany', 'Amazon']
 
// 7. Print the array using console.log()
 console.log(itCompanies);

// 8. Print the number of companies in the array
 console.log(itCompanies.length);

// 9. Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[parseInt(arr.length / 2)], itCompanies[itCompanies.length -1])

// 10. Print out each company
//                      1. FOR
//   for (let i = 0; i < itCompanies.length; i++) {
//     console.log(itCompanies[i]);
//   }
//                      2. FOREACH
//     itCompanies.forEach(function(company) {console.log(company)});
//                     3.  FOR OF
//       for (const company of itCompanies) {
//         console.log(company);
//       }
//                    4.  MAP
//    itCompanies.map(company => console.log(company));
//                    5. Reduce
//    itCompanies.reduce((_, company) => (console.log(company), null), null);

// 11. Change each company name to uppercase one by one and print them out
//     itCompanies.forEach(company => console.log(company.toUpperCase()));

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
//     console.log(itCompanies.slice() + ' are big IT companies.')   simple

//     let sentence = itCompanies.slice(0, -1).join(', ') + ', and ' + itCompanies.slice(-1);
//     console.log(`${sentence} are big IT companies.`);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
//       let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Germany', 'Amazon']
//       let companyToFind = 'Microsoft';

//       if (itCompanies.includes(companyToFind)) {
//         console.log(`${companyToFind} exists in the array.`);
//       } else {
//         console.log(`The company ${companyToFind} is not found.`);
//       }

// 14. Filter out companies which have more than one 'o' without the filter method
//       let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
//       let companiesWithOneO = [];
//       let companiesWithTwoO = [];

//       for (let i = 0; i < itCompanies.length; i++) {
//         let company = itCompanies[i];
//         let count = 0;
//           for (let j = 0; j < company.length; j++) {
//             if (company[j] === 'o' || company[j] === 'O') {
//               count++;
//             }
//           }
//         if (count === 1) {
//           companiesWithOneO.push(company);
//         }else if (count === 2){
//             companiesWithTwoO.push(company);
//         }
//       }
//       console.log(companiesWithOneO);
//       console.log(companiesWithTwoO);

//                         forEach
//         let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
//         let companiesWithOneO = [];
//         itCompanies.forEach(company => {
//           let count = 0;
//           for (let i = 0; i < company.length; i++) {
//             if (company[i] === 'o' || company[i] === 'O') {
//               count++;
//             }
//           }
//           if (count === 1) {
//             companiesWithOneO = [...companiesWithOneO, company];
//           }
//         });
//         console.log(companiesWithOneO);

// 15. Sort the array using sort() method
//           itCompanies.sort();

// 16. Reverse the array using reverse() method
//           itCompanies.reverse();

//           let reversedCompanies = [...itCompanies].reverse();
//           console.log(reversedCompanies);

// 17. Slice out the first 3 companies from the array
//        console.log(itCompanies.slice(0,3))

// 18. Slice out the last 3 companies from the array
//       let lastC= itCompanies.length;
//       console.log(itCompanies.slice(lastC-3,lastC))

// 19. Slice out the middle IT company or companies from the array
//         let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
//         let middleIndex = Math.floor(itCompanies.length / 2);   //tek cut ten orta
//           if (itCompanies.length % 2 === 0) {
//               let removedCompanies = itCompanies.splice(middleIndex - 1, 2);
//               console.log('Removed companies:', removedCompanies);
//           } else {
//               let removedCompany = itCompanies.splice(middleIndex, 1);
//               console.log('Removed company:', removedCompany);
//           }
//         console.log('Remaining companies:', itCompanies);

// 20. Remove the first IT company from the array
//         let removedCompany = itCompanies.shift();
//         console.log('Removed company:', removedCompany);
//         console.log('Remaining companies:', itCompanies);

// 21. Remove the middle IT company or companies from the array
//                  Some as 19.

// 22. Remove the last IT company from the array
//         let removedCompany = itCompanies.pop();
//         console.log('Removed company:', removedCompany);
//         console.log('Remaining companies:', itCompanies);

// 23. Remove all IT companies
//         itCompanies.length = 0;
//         console.log('Remaining companies:', itCompanies);



//                                                      Exercise: Level 2

// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and
//store the webTechs array in to this file. Access both file in main.js file
// countries.js file:
//                   const countries = [
//                     "Afghanistan",
//                     "Albania",
//                     "Algeria",
//                     // ... and so on
//                   ];
//                   module.exports = countries;

// web_techs.js file:
//                   const webTechs = [
//                     "HTML",
//                     "CSS",
//                     "JavaScript",
//                     // ... and so on
//                   ];
//                   module.exports = webTechs;
// main.js file:
// const countries = require("./countries");
// const webTechs = require("./web_techs");

// console.log(countries);
// console.log(webTechs);

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
//         const words = text.split(' ');
//         console.log(words);
//         console.log(words.length);

// 3. In the following shopping cart add, remove, edit items
//           const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
//           if (!shoppingCart.includes('Meat')) {
//             shoppingCart.unshift('Meat');
//           }
//           if (!shoppingCart.includes('Sugar')) {
//             shoppingCart.push('Sugar');
//           }
//           const allergicToHoney = true;  // false
//           if (allergicToHoney) {
//             const index = shoppingCart.indexOf('Honey');
//             if (index !== -1) {
//               shoppingCart.splice(index, 1);
//             }
//           }
//           const index = shoppingCart.indexOf('Tea');
//           if (index !== -1) {
//             shoppingCart[index] = 'Green Tea';
//           }
//           console.log(shoppingCart);

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
//       const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland'];
//       if (countries.includes('Ethiopia')) {
//         console.log('ETHIOPIA');
//       } else {
//         countries.push('Ethiopia');
//       }
//       console.log(countries);

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
// const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
// if (webTechs.includes('Sass')) {
//           console.log('Sass is a CSS preprocess');
//       } else {
//           webTechs.push('Sass');
//       }
//    console.log(webTechs);

// 6. Concatenate the following two variables and store it in a fullStack variable.
//       const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
//       const backEnd = ['Node','Express', 'MongoDB']
//       const fullStack = frontEnd.concat(backEnd);
//       console.log(fullStack)

//                                                               Exercise: Level 3
// 1. The following is an array of 10 students ages:
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort the array and find the min and max age
//               ages.sort(function(a, b){return a-b});
//               const minAge = ages[0];
//               const maxAge = ages[ages.length - 1];
//               console.log(`Minimum age: ${minAge}`);
//               console.log(`Maximum age: ${maxAge}`);

// Find the median age(one middle item or two middle items divided by two)
//       const middle = Math.floor(ages.length / 2);
//       const medianAge = ages.length % 2 !== 0 ? ages[middle] : (ages[middle - 1] + ages[middle]) / 2;
//       console.log(`Median age: ${medianAge}`);

// Find the average age(all items divided by number of items)
//       const sum = ages.reduce((total, age) => total + age);
//       const averageAge = sum / ages.length;    or   const averageAge = Math.round(sum / ages.length)
//       console.log(`Average age: ${averageAge}`);

// Find the range of the ages(max minus min)
//       const range = maxAge - minAge;
//       console.log(`Range of ages: ${range}`);

// Compare the value of (min - average) and (max - average), use abs() method
//         const diff1 = Math.abs(minAge - averageAge);      or Math.round(Math.abs(minAge - averageAge))
//         const diff2 = Math.abs(maxAge - averageAge);
//         console.log(`Difference between minimum age and average age: ${diff1}`);
//         console.log(`Difference between maximum age and average age: ${diff2}`);



// 1.Slice the first ten countries from the countries array
// const countries=["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombi","Comoros","Congo (Brazzaville)","Congo","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor (Timor Timur)","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia, The","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, North","Korea, South","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia and Montenegro","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];
//       const firstTenCountries = countries.slice(0, 10);
//       console.log(firstTenCountries);

// 2. Find the middle country(ies) in the countries array
//         const middleIndex = Math.floor(countries.length / 2);
//         if (countries.length % 2 === 0) {
//           const middleCountries = [countries[middleIndex - 1], countries[middleIndex]];
//           console.log(`Middle countries: ${middleCountries}`);
//         } else {
//           const middleCountry = countries[middleIndex];
//           console.log(`Middle country: ${middleCountry}`);
//         }

// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
//             if (countries.length % 2 === 0) {
//               const middleIndex = countries.length / 2;
//               const firstHalf = countries.slice(0, middleIndex);
//               const secondHalf = countries.slice(middleIndex);
//               console.log(`First half: ${firstHalf}`);
//               console.log(`Second half: ${secondHalf}`);
//             } else {
//               const middleIndex = Math.floor(countries.length / 2) + 1;
//               const firstHalf = countries.slice(0, middleIndex);
//               const secondHalf = countries.slice(middleIndex);
//               console.log(`First half: ${firstHalf}`);
//               console.log(`Second half: ${secondHalf}`);
//             }
