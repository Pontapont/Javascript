// Shows index position of first char in str
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");

// Shows how many times pattern occurs in string. If g modifier (global search) is not applied. Then only first occurence of match will be returned.
text.match(/ain/g);

// includes() function returns true if pattern is found in string. Second parameter is optional and tells function from which index position the search has to start.
let text = "Hello world, welcome to the universe.";
text.includes("world", 12);

endsWith()
startWith()

// string interpolation, dont forget ``
let name = "Omar";
let anotherText = `My Name Is ${name}`;

// removes first element in array
shift()

// adds element at start of array
unshift()

// get last value in string
"abc".slice(-1);

// ! means 'not in'
myObject["omr"] = 28;
if (!("omar" in myObject)) {
    console.log(false);
}

// Turn array into a string
const testArr = [1, 2, 3, 4, 5];
const myVar = JSON.stringify(testArr);
// myVar = "[1, 2, 3, 4, 5]"

// The equality operator '==' makes no difference between a Integer and string value. 
// that means "8" == 8.
const x = 8;
const z = "8";
if (x == z) {
  console.log(true);
} else {console.log(false)}

// &&
if (val >= 25 && val <= 50) {
    return "Yes";
}

// The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

// Switch statement
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break
    case "b":
      answer = "bird";
      break
    case "c":
      answer = "cat";
      break
    default:
      answer = "stuff";
      break
  }

  // Only change code above this line
  return answer;
}
