// Use base 2 system to parse string. Second parameter inside parseInt decides base system
let min = "11111111";
console.log(parseInt(min, 2));

//The Math.min() static method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.
Math.min(4, 2, 10); // returns 2
let numbers = [2, 55, 9, 1];
Math.min(...numbers) // returns 1. The ... is not a joke
