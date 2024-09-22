console.log("Hello JS!");
// variables

// Rules for variable name
//    Cannot be reserve KeyWords(int if let....)
//    Should be meaningful
//    Cannot start with numbber(1name...)
//    Cannot contain space or hypen
//    Are case-sensitive

let myName = "Rasheed";

console.log("My name is " + myName);

// primitive type values for variables{string,number,boolean,undefined,null}
let name = "rasheedBasha"; //string
let age = 19; //number
let isApproved = true; //boolean
let firstName = undefined; //undefined
let lastName = null; //null

//reference type values for variables {object,array,function}

//    Object

let person = {
  name: "Rasheed",
  age: 19,
  collegeName: "Geethanjali",
};
console.log(person.name);
person.name = "Rasheed Basha"; //re-assign value of object
console.log(person.name);
console.log(person);

//    Arrays

let colors = ["red", "blue"];
colors[2] = "green"; //to add value for existed array
console.log(colors);
console.log(colors[1]); //to get specified value of array with index
console.log(colors.length); //using of array property(Ex:length)

//    Function

function greet(personName, PersonLastName) {
  console.log("hello, " + personName + " " + " and" + " " + PersonLastName);
}
greet("Rasheed", "Ahmad");
let x = 12;
x *= 2; //another way for multiplication
console.log(x);
x = 12;
x /= 6; //another way for division
console.log(x);

let Str = 'I am a "double quoted" string inside the double qoutes'; //using of double quotes inside the String
console.log(Str);
/*
    escape sequences in strings
 \' single quote
 \" double quote
 \\ backslash
 \n newline
 \r carriage return
 \t tab
 \b backspace
 \f form feed 
*/

//    Minor Functions

let Strlength = 0;
Strlength = Str.length;
console.log(Strlength);

let firstLetterInStr = Str[0];
console.log(firstLetterInStr);

let lastLetterInStr = Str[Str.length - 1];
console.log(lastLetterInStr);

//    Array concepts
// giving multiple arrays indide one array
let BigArray = [
  ["array", 1, 0.5],
  ["array", 2],
];
console.log(BigArray);

// adding array value with their indeces
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

console.log(array1[0]);
console.log(array1[0] + array2[2]);

// change array value with their index
array1[2] = 10;
console.log(array1);

// accessing multidimensional array with indeces

let multidimensionalArray = [[1, 2, 3], 4, 5, [6, 7], 8, [9, 10]];

console.log(multidimensionalArray[0][1]);
console.log(multidimensionalArray[1]);
console.log(multidimensionalArray[2]);
console.log(multidimensionalArray[3]);
console.log(multidimensionalArray[3][1]);
console.log(multidimensionalArray[4]);
console.log(multidimensionalArray[5]);
console.log(multidimensionalArray[5][1]);

//manipulate array with push and pop

//push
let Array = ["joy", "boy", "toy", [1, 2, 3], 11];
console.log(Array);
Array.push("hi", "roi"); //add elements at end
console.log(Array);

//pop
Array.pop();
console.log(Array); //remove element at end

//manipulate array with shift and unshift
//shift
Array.shift();
console.log(Array); //remove element at brgin

//unshift
Array.unshift("hello"); //add elements at begin
console.log(Array);

//shopping list

let myShoppingList = [
  ["idly,4"],
  ["dosi,3"]["bonda,2"],
  ["chapati,2"],
  ["vada,4"],
]; //example tiffin list

//write a code in reusable functions

function reusableFunction() {
  console.log("reusable Function Content");
}

reusableFunction(); //functioncall of reusableFunction

//passing values to function with arguments

function sum(a, b) {
  //function with arguments
  addedValue = a + b;
  console.log(addedValue);
}
sum(1, 2);
sum(5, 5);

//    global and local scope

// global scope and functions

//we can use one function's variable value in another function with functioncall
console.log("......global scope");
let globalVariable = "value of global variable";
function fun1() {
  globalvar = 0;
}
function fun2() {
  if (globalvar < 3) {
    console.log("hii");
    globalvar++;
    console.log(globalvar);
  }
  if (globalvar < 3) {
    console.log("hii");
    globalvar++;
    console.log(globalvar);
  }
  if (globalvar < 3) {
    console.log("hii");
    globalvar++;
    console.log(globalvar);
    console.log(globalVariable);
  }
}
fun1();
fun2();

console.log("......local scope");

//local scope and functions
function fun3() {
  localvaraible = "old value";
  console.log(localvaraible);
}
fun3();
localvaraible = "new value";
console.log(localvaraible);
fun3();

// globalscope VS localscope
let OuterWear = "T-shirt";
function myOutfit() {
  OuterWear = "sweater";
  return OuterWear;
}
console.log(OuterWear);
console.log(myOutfit());

// return  a value from a function with return
//example 1
function minusSeven(msvalue) {
  return msvalue - 7;
}
console.log(minusSeven(10));
//example 2
function timesFive(tfvalue) {
  return tfvalue * 5;
}
console.log(timesFive(5));

//understanding undefined value returned from a function
let snum = 0;
function addfive() {
  snum += 5;
}
console.log(addfive());
