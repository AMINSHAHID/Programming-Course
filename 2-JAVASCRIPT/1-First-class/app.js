// alert("working");

// console.log("this is a console."); //text
// console.log(12345); //number
// console.log(null);
// console.log(true); // boolean
// console.log(false); // boolean
// console.log([1, 2, 3, 4, 5]); // array
// console.log({ a: 1, b: 2 });
// console.table({ a: 1, b: 2 });
// console.warn("this is a error");
// console.time();
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.timeEnd();
// console.error("this is a error");

// DATAYPES

//PRIMITVE TYPE
//store directly in the location the variable accesses stored on the stack.
var store = "javascript second class"; //String
var store = 12345; // Number
var store = true; // Boolean // 0 false 1 true
var store = false; // boolean
var store = null; // null
var store = undefined; // undefined
var store = Symbol("values of symbol");
// console.log(store, "store one");

//REFERENCE TYPE
//Accessed by reference Objects that are stored on the heap a pointer to a location in memory
var store = ["one", "two", "three", "four"]; // array
var store = { a: 1, b: 2, c: 3 }; //object literals
// var store = [1, 2, 3, 4, 5];
// console.log(store, "store second");
// console.table(store);

//reference type detail in example
const array = ["muzammil"];
const array2 = array; //create reference or pointer in a memory
array2.push("musaddiq");
// console.log(array2) ['muzammil','musaddiq'];
// console.log(array) ['muzammil','musaddiq'];

//case sensitive // word capitcal / small
var secondvalue = "mudassir";
var secondValue = "muzammil";
// console.log(secondValue, "secondValue");
// console.log(secondvalue, "secondvalue");

//naming of variables
//letters,underscore,camelcase,pascal case

var naming = "working"; //letters
var naming_variable = "working"; //Underscore
var namingVariable = "working"; //Camel Case
var NamingVariable = "working"; //pascal Case

//variables 3 types

// var //global scope
// let  //block scope variable
// const // variable cannot be changed

// {} scope
{
  var a = "a";
  let b = "b";
}

// console.log(a); // we can access a variable out side the scope because its var variable
// console.log(b); // we cannot access a variable out side the scope because its let variable

const muzammil = "muzammil is working";
// muzammil = "musaddiq is working"; //we cannot change constant variable
// console.log(muzammil);
// in javascript every thing is object

// Type conversion
var val;
// val = "this is a string";
val = new String("this is a string");
val = new String(5655); //number
val = new String(true); //boolean
// console.log(val[0]);
// console.log(val.length);

// val = new Date(); // define later
val = new String(new Date());
val = new String([1, 2, 3, 4, 5]);
val = (5).toString();
val = true.toString();

//NUMBERS

val = new Number("2");
// val = new Number(true); // 1
// val = new Number(false); // 0
// val = new Number(null); // 0
// val = new Number("hello"); // Nan not a number
// val = new Number([1, 2, 3, 4]); // Nan not a number

val = parseInt("5");
val = parseFloat("5.010");
// console.log(val.toFixed());

// you can use arthmetic operators in javascript
// val = 5 + 5;
// val = 5 - 5;
// val = 5 / 5;
// val = 5 % 5;
// val = 5 * 5;

//Math Object

val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.floor(2.4);
val = Math.pow(8, 4); // 8 * 8 * 8 * 8
val = Math.min(2, 33, 4, 1, 0);
val = Math.max(2, 33, 100, 4, 1, 0);
val = Math.random() * 20 + 1;

// console.log(val);
// console.log(typeof val);

//concatenation

const firstName = "muzammil";
const lastName = "mustaqeem";

val = firstName + " " + lastName;

val += " Full Stack Developer";

val = "Hello, World my name is 'Muzammil Mustaqeem and my age 'is 24";
//escape quote from string
// val = 'Hello, World my name is \'Muzammil Mustaqeem and my age \'is 24';
val = firstName.concat(" ", lastName);

// console.log(val.toUpperCase());
// console.log(val.toLowerCase());
// console.log(val[1]);
// console.log(val[1]);

// console.log(val.replace("muzammil", "musaddiq"));
// console.log(val.includes("muzammil")); // is muzammil text is here

// template literals

// val = "Hello, World my name is "+firstName + ' ' +lastName +" and my age 'is 24";
val = `Hello, World my name is ${firstName} ${lastName} and my age 'is 24`;

// console.log(val);


//ARRAY 
//An array is a special variable, which can hold more than one value at a time.


const fruits = ['mango','banana','apple']; //string = text
const fruits2 = new Array('mango','banana','apple'); //string = text
const mix = new Array(
  11,
  22,
  'stirng',
  true,
  false,
  null,
  undefined,
  ['working','working2'],
  {a:1,b:2,c:3}
  ); //string = text

let mix2 = new Array(
  {
    name:'muzammil',
    email:'muzammil.rafay@gmail.com',
    status:'Active'
  },
  {
    name:'muzammil',
    email:'muzammil.rafay@gmail.com',
    status:'Active'
  },
  {
    name:'muzammil',
    email:'muzammil.rafay@gmail.com',
    status:'Active'
  },
  ); //string = text


// console.log(mix2);
// console.log(mix2.length);
// console.log(Array.isArray(mix2));
// console.log(Array.isArray('string'));

mix2[1] = 2213123123;


// console.log(numbers);
// console.log(fruits);
// console.log(fruits.indexOf('apple')); //2
// console.log(fruits.indexOf('apple'));


const numbers = [22,60,10,88,99]; //numbers


// numbers.push(2000); //Add on the end of array
// numbers.unshift(9999); //Add on the start of array
// numbers.pop(); //remove array from end
// numbers.shift(); //remove array from start
// numbers.splice(1,1); //remove from array
// numbers.splice(2,5); //remove from array
// numbers.reverse();


let testingArray = ['mango','fruits','apple','banana'];

let val2 = testingArray.sort();

val2 = numbers.sort();
val2 = numbers.sort(function(x,y){
  return x - y;
  //ascending order
});

val2 = numbers.sort(function(x,y){
  return y - x;
  //descending order
});

val2 = numbers.find(function(num){
  return num == 88;
});

//single value return


// console.log(val2);




//check later
// numbers.concat(new Array(22, 33, 44, 55));

const person = {
  //string,numbers,boolean,null,undefined,array,objects
  firstName:'Muzammil',
  lastName:'Mustaqeem',
  age:24,
  email:'muzammil.rafay@gmail.com',
  hobbies:['computer-gaming','books','tutorials','coding'],
  address:{
    country:'pakistan',
    city:'Karachi',
    fullAddress:'House # L-48 Sec 5-A 4 North Karachi'
  },
  getBirthYear: function(){
    // return 1997;
    // when we use this keyword
    //this = current instance
    return 2021 - this.age;
  }
};

// console.log(person,"person");
// console.log(person.getBirthYear(),"getBirthYear"); //invoking of function
// console.log(person.firstName,person.lastName);
// console.log(person.email); 


// console.log(person['firstName']);
// console.log(person['lastName']);
// console.log(person['age']);
// console.table(person);


//array in objects
const people = [
  { name: 'Asad', age: 20 },
  { name: 'Fahad', age: 20 },
  { name: 'Shuja', age: 20 },
  { name: 'Shariq', age: 50 }
];

// loop repeat

//1st method 
// for (let index = 0; index < people.length; index++) {
//   console.log(people[index],"people",index);
// }


// people.map(function(singleObject,index){ //functions paramter 
//   console.log(singleObject,"singlePeople",index);
// })

// console.log(people,"people");

let valDate;


const today = new Date();
// let birthday = new Date('9-10-1981');
let birthday = new Date('11-27-1996'); // Month-Date-Year
// birthday = new Date('November 27 1996'); // Month Date Year
birthday = new Date('11/27/1996');// Month Date Year

valDate = today.getMonth() + 1; // -1
// valDate = today.getDay(); // check later
// valDate = today.getDate();// check later
valDate = today.getFullYear();
valDate = today.getMinutes();
valDate = today.getHours();
valDate = today.getSeconds();
valDate = today.getMilliseconds();
valDate = today.getTime();

today.setMonth(0); // -1
today.setDate(2); // -1
today.setFullYear(1985);
today.setHours(3);
today.setMinutes(22);
today.setSeconds(25);

// console.log(today,"today");
// console.log(birthday,"birthday");
// console.log(today);
// console.log(today);


// https://www.w3schools.com/js/js_comparisons.asp

// COMPARISON WORK MUZAMMIL

// Comparison operators are used in logical statements to 
// determine equality or difference between variables or values.

// var muzammil = 8;
// if(muzammil == 1){ // اگر
//   // do something
// } else { // مگر
//   // do something else
// }


const id = 100;
// == equal to
// if(id == 101){ 
//   console.log('Condition is Correct');
// }else{
//   console.log('Condition is In Correct');
// }

/* != not equal to */

// if(id !== 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// Test if undefined
// if(typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }


// GREATER OR LESS THAN
// > greater than
// < less than
// example of crocodile mouth

// if(id < 400){ //400 greater than id
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }




// LOGICAL OPERATORS
// && AND = both condition should be true
// || OR = one condition should be true

const name = 'Muzammil';
const age = 11;


// AND && اور
// if (age > 0 && age < 12) {
//   console.log(`${name} is a child`);
// } else if (age >= 13 && age <= 19) {
//   console.log(`${name} is a teenager`);
// } else {
//   console.log(`${name} is an adult`);
// }

const orderTotal = 420; // bill bangaya 
const minimumOrder = 400;

const productId = 3;

let deliveryCharges = 49; //default charges
if(orderTotal > minimumOrder && productId == 12){
  deliveryCharges = 100;
}


// console.log(deliveryCharges,'delivery charges');


// OR || یا
// if (age < 16 || age > 65) {
//   console.log(`${name} can not run in race`);
// } else {
//   console.log(`${name} is registered for the race`);
// }


// TERNARY OPERATOR
//single if or else 
// console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// if(id){
//   console.log('CORRECT');
// }else{
//   console.log('INCORRECT');
// }

//you can define conditions without braces
// if(id) //its mean id have something in variable
//   console.log('CORRECT');
// else
//   console.log('INCORRECT');

// let musaddiq;
// if(!musaddiq) //oposite check karna variable
//   console.log('CORRECT');
// else
//   console.log('INCORRECT');


//


// const color = 'yellow'; //string
// if(color === 'red'){
//   console.log('Color is red');
// } else if(color === 'blue'){
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }
  
//switch statement

// const color = 'blue';

// switch (color) {
//     case 'red':
//         console.log('Color is red');
//         break;
//     case 'blue':
//         console.log('Color is blue');
//         break;
//     default:
//         console.log('Color is not red or blue');
//         break;
// }


let day;

switch (new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

// console.log(`Today is ${day}`);

//functions 

// FUNCTION DECLARATIONS


function greet(){
  let name = 'muzammil';
  // return; //stop executing of function
  name += ' mustaqeem';
  // console.log(name);
  
  return name;
}

// console.log(greet());

//                firstparameter , secondparameter
function greetTwo(firstName,lastName){ //parameter
  return firstName +' ' + lastName;
}

// console.log(greetTwo('Muzammil','Mustaqeem'));
// console.log(greetTwo('Muhammad','Shuja'));

//1st method of declaration
// function square(x=2,y=2){ //default parameter
//   return x * y;
// }

//2nd method of declaration
const square = function(x=2,y=2){ //default parameter
  return x * y;
}


// console.log(typeof square,'typeof square')
// console.log(square());
// console.log(square(200,9));


// (function(){
  // console.log('this function is working');
// })();

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

var add = (function(){
  // console.log('IIFE Ran..');
})();

// add();

// template literals

var add = (function(name,lastName){
  // console.log(`My Name is ${name} ${lastName}`);
})('Muzammil','Mustaqeem');



const todo = { //object literals
  add: function () {
      console.log('Add todo..');
  },
  edit: function (id) { //parameter
      console.log(`Edit todo ${id}`);
  },
}

/*
todo.add();
todo.edit(29);

*/

// const numbersUnique = 2;
// const numbersUnique = new Number(2);

var myFunction = new Function("a", "b", "return a * b"); 
// console.log(myFunction(1,2));
// console.log(typeof myFunction)

// const muzammil = 2;

//why use closures

// var laptopHpPrice = 4;
// function myFunctionTwo() {
//   return laptopHpPrice * laptopHpPrice;
// }
// console.log(myFunctionTwo(),"myFunctionTwo()");

//Wrong 
// // Initiate counter
// var counter = 0;

// // Function to increment counter
// function addTwoThree() {
//   // var counter = 0;
//   return counter += 1;
// }

// console.log(addTwoThree(),"addTwoThree();");





// var add = (function () {
//   var counter = 0;
//   return function () {counter += 1; return counter;}
// })();

// console.log(addTwoFour,"addTwoFour()");
// console.log(addTwoFour(),"addTwoFour()");


//closures 
// define function inside of function
var addTwoFour = (function () {
  var counter = 0;
  return function () {
    return counter += 1; //return is most important in closures
  }
})();

console.log(addTwoFour());




