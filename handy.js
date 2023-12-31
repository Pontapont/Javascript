
// For loop. For loops consists of three expressions.
// The first one declares a variable that can be used within the scope of the for loop
// The second one defines the condition
// The third one executes itself after every iteration of the loop.
for (let i = 0, name = "Omar", age = 28 ; i < 5; i++) {
    console.log(i, "Name: " + name, "Age: " + age)
}

function varScoping() {
    var x = 1;
  
    if (true) {
      var x = 2;
      console.log(x); // will print 2
    }
  
    console.log(x); // will print 2
  }
  
  function letScoping() {
    let x = 1;
  
    if (true) {
      let x = 2;
      console.log(x); // will print 2
    }
  
    console.log(x); // will print 1
}


// Loops through index value of element in array
for (ele in myList) {
    console.log(myList[ele])
}

// Object in javascript
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  console.log(x)
} 

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

"hello".substr(1);
"hello".charAt(0);

// Loop through array
let tags = ["template literals", "javascript", "es6"];

for (const x of tags) {
  console.log(x);
}

// Working with JSON Objects
let text = '{ "employees" : [{ "firstName":"John" , "lastName":"Doe"}, { "firstName":"Anna" , "lastName":"Smith" }, { "firstName":"Peter" , "lastName":"Jones" } ]}';
text = JSON.parse(text);
console.log(text["employees"][1]["firstName"]);

// Make a javascript object
const anObject = {
    "tails": 3,
    "clouth": "airry",
    "aList": ["Jappie", 983],
}
// Delete object key
delete anObject["tails"]
// Check if object has key
anObject.hasOwnProperty("key")

// The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.
//The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. 
// When the condition is false at the start of the iteration, the loop will stop executing. 
// This means if the condition starts as false, your loop will never execute.
for (let i = 0; i < 5; i++) {}

// Check if value is Integer
Number.isInteger("dada")
