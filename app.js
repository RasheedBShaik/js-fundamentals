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

let Str = 'I am a "double quoted" string inside the "double qoutes"'; //using of double quotes inside the String
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
let Strlength = 0;
Strlength = Str.length;
console.log(Strlength);
