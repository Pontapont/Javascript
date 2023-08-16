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

// string interpolation
let name = "Omar";
let anotherText = `My Name Is ${name}`;
