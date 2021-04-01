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
// console.log(fruits.indexOf('apple'));
// console.log(fruits.indexOf('apple'));


const numbers = [22,60,10,88,99]; //numbers


// numbers.push(2000); //Add on the end of array
// numbers.unshift(9999); //Add on the start of array
// numbers.pop(); //remove array from end
// numbers.pop(); //remove array from end
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


console.log(val2);




//check later
// numbers.concat(new Array(22, 33, 44, 55));
