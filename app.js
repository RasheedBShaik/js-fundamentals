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

//stand in line
function nextinline(arr, item) {
  arr.push(item);
  return arr.shift();
}
let inlinelist = [1, 2, 3, 4, 5];
console.log("before: " + JSON.stringify(inlinelist));
console.log(nextinline(inlinelist, 6));
console.log("after: " + JSON.stringify(inlinelist));

// if else conditional statements
function trueOrFalse(itistrue) {
  if (itistrue) {
    return "yes,it is true";
  }
  return "no,it is false";
}
console.log(trueOrFalse(true));
// else if statements
function elseif(val) {
  if (val < 5 && val > 0) {
    return "between 0-5";
  } else if (val < 10 && val > 20) {
    return "between 10-20";
  } else if (val < 0) {
    return "negative value";
  } else return "more than 20";
}
console.log(elseif(-4));
// comparision with the equality operator

function testequal(val) {
  if (val == 5) {
    return "equal";
  }
  return "not equal";
}
console.log(testequal(5));

console.log("strict equal");
// comparision with strict equal operator
function testStrictEqual(val) {
  if (val === 10) {
    return "equal";
  }
  return "not equal";
}
console.log(testStrictEqual("10"));

console.log(testStrictEqual(10));
// comparision with the inequality operator

function testequal(val) {
  if (val != 5) {
    //(!=)=>inequallity operator
    return "not equal";
  }
  return "equal";
}
console.log(testequal(2));
// like this we can use strict inequality operation also

// Comparision with Greater than or equal operator

function GreaterThanOrEqualto(val) {
  if (val >= 20) {
    return "20 or over";
  }
  if (val >= 10) {
    return "10 or over";
  }
  return "less than 0";
}
console.log(GreaterThanOrEqualto(10));

// Comparision with Less than or equal operator

function LessThanOrEqualto(val) {
  if (val <= 10) {
    return "10 or less";
  }
  if (val <= 20) {
    return "20 or less";
  }
  return "more than 20";
}
console.log(LessThanOrEqualto(20));

//comparision with Logical and operator

function LogicalAnd(val) {
  if (val <= 10 && val >= 0) {
    return "between 0-10";
  }
  if (val <= 20 && val >= 10) {
    return "between 11-20";
  }
  if (val <= 30 && val >= 20) {
    return "between 21-30";
  }
  return "more than 30";
}
console.log(LogicalAnd(21));

//comparision with Logical or operator
// given range is the value between 10 to 20 only
function LogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside the given range";
  }
  return "inside the given range";
}
console.log(LogicalOr(10));
// chaining if else statements
function testsize(num) {
  if (num < 5) {
    return "tiny";
  }
  if (num < 10) {
    return "small";
  }
  if (num < 15) {
    return "medium";
  }
  if (num < 20) {
    return "large";
  }
  if (num >= 20) {
    return "huge";
  }
}
console.log(testsize(18));

//golf code
let names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
}
console.log(golfScore(5, 4));

//switch statements
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 3:
      answer = "delta";
      break;
    default:
      answer = "enter 1-4";
      break;
  }

  return answer;
} /*
 1 - alpha
 2 - beta
 3 - gamma
 4 - delta
*/
console.log(caseInSwitch(4));

// multiple identical options in switch statements

function sequentialSizes(val) {
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "low";
      break;

    case 4:
    case 5:
    case 6:
      answer = "medium";
      break;
    case 7:
    case 8:
    case 9:
      answer = "high";
      break;
    default:
      answer = "enter  value from 1 to 9 only";
  }
  return answer;
}
console.log(sequentialSizes(6));

//replacing if else chains with switch
//// before replacing
function ifelseWeek(val) {
  if (val === 1) {
    day = "Sunday";
  } else if (val === 2) {
    day = "Monday";
  } else if (val === 3) {
    day = "Tuesday";
  } else if (val === 4) {
    day = "Wednesday";
  } else if (val === 5) {
    day = "Thursday";
  } else if (val === 6) {
    day = "Friday";
  } else if (val === 7) {
    day = "Saturday";
  } else day = "enter 1-7 to find day";
  return day;
  // console.log(day);
}
console.log(ifelseWeek(6));

///// after replacing
function switchWeek(val) {
  switch (val) {
    case 1:
      day = "Sunday";
      break;
    case 2:
      day = "Monday";
      break;
    case 3:
      day = "Tuesday";
      break;
    case 4:
      day = "Wednesday";
      break;
    case 5:
      day = "Thursday";
      break;
    case 6:
      day = "Friday";
      break;
    case 7:
      day = "Saturday";
      break;
    default:
      day = "enter 1-7 to find day";
      break;
  }
  return day;
}
console.log(switchWeek(2));

// returning boolean values from functions
// getting true or false by using if else complete code
function islessex1(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}
console.log(islessex1(10, 15));
// getting true or false without using if else statements
function islessex2(a, b) {
  return a < b;
}
console.log(islessex2(20, 15));

////returning early patterns from functions
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2, 2));

// counting cards

let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  var holdbet = "Hold";
  if (count > 0) {
    holdbet = "bet";
  }

  return count + " " + holdbet;
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
console.log(cc(4));

//Build Javascript Objects

let myDetails = {
  "my name": "Rasheed Basha",
  school: "Vasista",
  inter: "Sri Chaithanya",
  Btech: "Geethanjali",
  presentYear: 2024,
  age: 20,
  7: "India",
};
//use dot(.) to access object properties
console.log(myDetails.age);
//use bracket([]) to access object properies
// we use bracket notation for the property name have spaces
console.log(myDetails["my name"]);
// accessing Object properties with variables
let country = myDetails[7];
let myCountry = country;
console.log(myCountry);
// updating object properties
myDetails["my name"] = "Shaik Rasheed Basha";
console.log(myDetails["my name"]);
// add new properties to object
myDetails["laptop"] = "HP";
console.log(myDetails.laptop);
//delete properties from object
console.log(myDetails.presentYear);
delete myDetails.presentYear;
console.log(myDetails.presentYear);
// using objects for lookups

function Lookup(val) {
  var result = "";
  let lookup = {
    me: "rasheed",
    bro: "ahmad",
    school: "vasista",
  };
  result = lookup[val];
  return result;
}
console.log(Lookup("me"));

// testing objects for properties
let myObj = {
  me: "rasheed",
  bro: "ahmad",
  school: "vasista",
};
function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "not found";
  }
}
console.log(checkObj("hi"));
console.log(checkObj("bro"));

// accessing nested objects
let outfit = {
  shirt: {
    inside: {
      color: "blue",
      size: "large",
      type: "full hands",
    },
    outside: {
      color: "black",
      size: "medium",
      type: "jeans",
    },
  },
};
let shirtType = outfit.shirt.inside["color"];
console.log(shirtType);

//accessing nested arrays
let myPlants = [
  {
    type: "flowers",
    list: ["rose", "jasmine", "tulip"],
  },

  {
    type: "trees",
    list: ["guava", "banana", "neem"],
  },
];
let bananaplant = myPlants[1].list[1];
console.log(bananaplant);

// record collection

let moviesCollection = {
  123: {
    name: "devara",
    hero: "jr.ntr",
    actors: ["jahnvi kapoor", "srikanth", "saif ali khan"],
  },
  456: {
    name: "salaar",
    hero: "prabhas",
  },
  789: {
    name: "KGF",
    hero: "yash",
    actors: ["srinidhi shetty", "sunjay dutt"],
  },
  101112: {
    name: "pushpa",
    hero: "allu arjun",
    actors: ["rashmika", "sunil"],
  },
  131415: {
    name: "iron man",
  },
};
let collectionCopy = JSON.parse(JSON.stringify(moviesCollection));

function updateRecords(id, prop, val) {
  if (val === "") {
    delete moviesCollection[id][prop];
  } else if (prop === "") {
    moviesCollection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(val);
  } else {
    moviesCollection[id][prop] = val;
  }

  return moviesCollection;
}
console.log(collectionCopy); //before update
updateRecords(131415, "hero", "robert downey jr");
console.log(updateRecords(789, "heroine", "kaa")); //after update

// 2nd example for record collection

let a = {
  111: {
    rr: "aa",
    tt: "aaa",
    add: "ll",
  },
  222: {
    a1: 22,
    a2: "fff",
    a3: "adadad",
    a4: "",
  },
};
function updates(id, prop, val) {
  if (val === "") {
    delete a[id][prop];
  } else if (prop === "") {
    a[id][prop] = b[id][prop] || [];
    b[id][prop].push(val);
  } else {
    a[id][prop] = val;
  }
  return a;
}
console.log(a);
updates(222, "a2", "hiiiiiiiii");
console.log(updates(111, "add", "aaaaaaaaaaaaaa"));

// iterate with while loop

let myArray = [];
let i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
  console.log(myArray);
}

// iterate with for loop
let ourArray = [];
for (j = 0; j < 8; j++) {
  ourArray.push(j);
  console.log(ourArray);
}

// iterate even and odd numbers with for loop

let EvenNum = [];

for (k = 2; k < 10; k += 2) {
  EvenNum.push(k);
}
console.log("Even numbers are" + " " + EvenNum);
let OddNum = [];
for (k = 1; k < 10; k += 2) {
  OddNum.push(k);
}
console.log("odd numbers are" + " " + OddNum);

// count backwards with a for loop
let Array2 = [];
for (j = 10; j > 0; j--) {
  Array2.push(j);
}
console.log(Array2);

// iterate through an array with a for loop

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = 0;
for (i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);
// nesting for loops

function multiplyAll(num) {
  let product = 1;
  for (i = 0; i < num.length; i++) {
    for (j = 0; j < num[i].length; j++) {
      product *= num[i][j];
    }
  }
  return product;
}
let product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
console.log(product);

// iterate with do while loops

let arr = [];
let variable = 10;

do {
  arr.push(variable);
  variable++;
} while (variable < 15);
console.log(arr, variable);

// profile lookup

let Contacts = [
  {
    firstname: "Rasheed",
    lastname: "basha",
    number: "1111111111",
    likes: ["pubg", "money", "home", "games"],
  },
  {
    firstname: "aaaaaaaaa",
    lastname: "bbbbbbbb",
    number: "2342521",
    likes: ["ab", "bc", "cd", "de"],
  },
  {
    firstname: "cccccc",
    lastname: "dddddd",
    number: "1234123412",
    likes: ["eee", "fff", "ggg", "hhh"],
  },
  ,
  {
    firstname: "unkown",
    lastname: "none",
    number: "unknown",
    likes: ["idk"],
  },
];
function LookUpProfile(name, prop) {
  for (i = 0; i < Contacts.length; i++) {
    if (Contacts[i].firstname === name) {
      return Contacts[i][prop] || "no such property";
    }
    return "no such contact";
  }
}
let data = LookUpProfile("Rasheed", "lastname");
console.log(data);

// Generate random fractions
function randomfraction() {
  return Math.random();
}
console.log(randomfraction());

// Generate random whole numbers
function randomwholenum() {
  return Math.floor(Math.random() * 20);
}
console.log(randomwholenum()); // it generates a random number from 1 to 19

//generate whole numbers whithin a range
function randomrange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let random = randomrange(1, 10); //generates value from 1 to 10
console.log(random);

// use the parseInt function

function convertToInteger(str) {
  return parseInt(str);
}
let nnn = convertToInteger("50");
console.log(typeof nnn);

// use the parseInt function with Radix
function converttoInteger(str) {
  return parseInt(str, 2); //use 2 to get binary value we can change base value to get other their values
}
console.log(converttoInteger("1111"));

// use conditional (Ternary) operator
function checkEqual(a, b) {
  return a === b ? true : false;
}
console.log(checkEqual(2, 2));

// use multiple conditional (Ternary) operators

function CheckSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(CheckSign(0));

// mutate an array declared with const

const s = [10, 11, 12];
function editInPlace() {
  s[0] = 1;
  s[1] = 2;
  s[2] = 3;
}
editInPlace(s);
console.log(s);

// prevent Object mutation
function freezeObj() {
  "use strict";
  const MATH_CONSTRAINTS = {
    PI: 3.14,
  };
  // Object.freeze(PI); //[used to show error in output (uncomment this whole line to work this)]
  try {
    MATH_CONSTRAINTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTRAINTS.PI;
}
const PI = freezeObj();
console.log(PI);

//use arrow functions to write concise anonymous functions

const magic = () => new Date();
console.log(magic());

//use arrow fuctions with parameters

const myconcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myconcat([1, 2], [3, 4, 5]));

//write higher order arrow fuctions

// first example

const realNumArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  const squaredIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x * x);
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumArray);
console.log(squaredIntegers);

// second example

const increment = (number, value = 1) => {
  return number + value;
};
console.log(increment(1, 4));
console.log(increment(3));

// use the rest operator with function parameters

//method 1
const Sum = (function () {
  return function Sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(Sum(1, 2, 3));

// method 2
function Sum2(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log(Sum2(1, 5, 1));

// use the spread operator to evaluate arrays In-place

const arr1 = [`JANUARY`, `FEBRUARY`, `MARCH`, `APRIL`, `MAY`];
let arr2;
(function () {
  arr2 = [...arr1];
  arr1[0] = `APPLE`;
})();
console.log(arr2);

// use destructuring assignment to assign variables from objects

var voxel = { m: 3.6, n: 7.4, o: 6.54 };
let m = voxel.m;
let n = voxel.n;
let o = voxel.o;

const { m: a1, n: a2, o: a3 } = voxel; //destructuring syntax
// example
const Avg_temp = {
  today: 77.5,
  tomorrow: 79,
};
function GetTempOfTomorrow(avgTemp) {
  "use strict";
  const { tomorrow: TempOfTomorrow } = avgTemp; //here we used destructuring suntax{}
  return TempOfTomorrow;
}
console.log(GetTempOfTomorrow(Avg_temp));

// destructuring assignment with nested objects

const LOCAL_FORECAST = {
  today: { min: 50, max: 80 },
  tomorrow: { min: 65, max: 100 },
};

function GetMaxOfTomorrow(forecast) {
  "use strict";

  const {
    tomorrow: { max: MaxOfTomorrow },
  } = forecast;
  return MaxOfTomorrow;
}

console.log(GetMaxOfTomorrow(LOCAL_FORECAST));

// use destructuring assignment to assign variables from arrays
{
  const [a, b, , d, e] = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(a, b, d, e);

  let x = 8,
    y = 6;
  (() => {
    "use strict";
    [x, y] = [y, x];
  })();
  console.log(x);
  console.log(y);
}
// use destructuring assignment with rest operator
{
  let source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function RemoveFirstTwoElements(list) {
    const [, , ...arr] = list;
    return arr;
  }
  const arr = RemoveFirstTwoElements(source);
  console.log(arr);
  console.log(source);
}

//use destructuring assignment to pass an object as a function parameters

function fun0001(one, two, three) {
  return {
    name: one,
    two_wheeler: two,
    four_wheeler: three,
  };
}
let res = fun0001("rasheed", "car", "bike");

console.log(res.name);

//create strings using template literals

function templateLiterals() {
  const person = {
    name: "rash",
    age: 66,
  };
  console.log(`i am ${person.name} and my age is ${person.age}`);
}
templateLiterals();

// write concise object literal declarations using simple fields

const createPerson = (name, age, gender) => ({ name, age, gender });
console.log(createPerson(`Rasheed`, 20, `male`));

// write concise declarative functions

const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  },
};

bicycle.setGear(10);
console.log(bicycle.gear);
// use class syntax to define a constructor function

function makeClass() {
  class vegitable {
    constructor(name) {
      this.name = name;
    }
  }
  return vegitable;
}
const vegitable = makeClass();
const carrot = new vegitable("carrot");
console.log(carrot.name);

// use getters and setters to control access to an object

function myClass() {
  class thermostat {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32);
    }
    get temperature() {
      return this._temp;
    }
    set temperature(updatedtemp) {
      this._temp = updatedtemp;
    }
  }
  return thermostat;
}

const thermostat = myClass();
const thermos = new thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);
