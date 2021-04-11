// alert("working");


console.log("this is a console."); 
console.warn("this is a console."); 
console.error("this is a console."); 
console.info("this is a console."); 
console.table({key1:'value1',key2:'value2'}); 


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


//override 
let check1 = 'vscode';
let check2 = check1;
check2 = 'sublime';
console.log(check1,'check1');
console.log(check2,'check2');


//REFERENCE TYPE
//Accessed by reference Objects that are stored on the heap a pointer to a location in memory
var store = ["one", "two", "three", "four"]; // array
var store = { a: 1, b: 2, c: 3 }; //object literals
// var store = [1, 2, 3, 4, 5];
console.log(store, "object literals");
// console.table(store);

//reference type

let ref1 = ['laravel','wordpress'];
let ref2 = ref1; //reference type

ref2.push('react');

console.log(ref1,"ref1");
console.log(ref2,"ref2");

//javascript case sensitive

//how we can give naming of variable
var naming = "working"; //letters
var naming_variable = "working"; //Underscore
var namingVariable = "working"; //Camel Case
var NamingVariable = "working"; //pascal Case

// naming.toString() //camel case


//variables 3 types
//what is scope
// {
    //this is scope
// }

// var //global scope
// let  //block scope variable
// const // variable cannot be changed and also block scope variable

// {} scope

{
    var a = "a"; //global scope
    let b = "b";
    console.log(b,"b"); //we can only access let inside of block
    const con = 'muzammil';
}
// console.log(con,"con");

// console.log(b,"b"); //we cannot access let outside of block
console.log(a,"a");


const muzammilConst = "muzammil is working";

// muzammilConst = 'hammad is working'; // we cannot change constant variable

console.log(muzammilConst,"muzammilConst");


// converting the data type to another type

let val;

// console.log(val,"val"); //undefined

// val = 'text'; //string
val = new String('text'); //string
console.log(val.length,"val");


val = new String(5655); //number

// val / 100 * 1 //1 pecent  

val = new String(true); //boolean
val = new String(new Date());
val = new String([1, 2, 3, 4, 5]);
val = (24).toString();
val = true.toString();

// console.log(typeof val,"val");


val = new Number("2"); //string to number
val = new Number(true); // 1
val = new Number(false); // 0
val = new Number(null); // 0
val = new Number("hello"); // Nan = not a number
val = new Number([1, 2, 3, 4]); // Nan = not a number


val = parseInt("5.010");
val = parseFloat("5.010"); //support decimal values

console.log(val,"val");
console.log(typeof val,"val");

// you can use arthmetic operators in javascript
val = 5 + 5;
val = 5 - 5;
val = 5 / 5;
val = 5 % 5;
val = 5 * 5;

console.log(val,"airthmetic operator")


//Math Object

// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.floor(2.4); // not suppor decimal value
// val = Math.pow(8, 4); // 8 * 8 * 8 * 8
// val = Math.min(2, 33, 4, 1, 0);
// val = Math.max(2, 33, 100, 4, 1, 0);
// val = Math.random() * 20 + 1;

// console.log(val,"math object");

//concatenation

const firstName = "muzammil";
const lastName = "mustaqeem";

val = firstName + " " + lastName; //concatinate

val += " Full Stack Developer";

val = "Hello, World my name is 'Muzammil Mustaqeem and my age 'is 24";
val = "Hello, World my name is \"Muzammil Mustaqeem and my age 'is 24";
val = 'Hello, World my name is \'Muzammil Mustaqeem and my age \'is 24';


val = firstName.concat(" ", lastName);
// console.log(val,"val");

console.log(val.toUpperCase()); //captical letter
console.log(val.toLowerCase());  //lower letter

// console.log(val[1]);


// template literals
// val = ` ' " ${firstName}`
val = `Hello, World my name is ${firstName} ${lastName} and my age 'is 24`;
console.log(val,"val");