// Event listener that waits for click on button. After which it executes onclick parameter
<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
<button onclick="this.innerHTML = Date()">The time is?</button>

Common HTML Events

Here is a list of some common HTML events:
Event 	Description
-  onchange 	An HTML element has been changed
-  onclick 	The user clicks an HTML element
-  onmouseover 	The user moves the mouse over an HTML element
-  onmouseout 	The user moves the mouse away from an HTML element
-  onkeydown 	The user pushes a keyboard key
-  onload 	The browser has finished loading the page

// Convert data type
Number()
String()
parseFloat() parse string and return floating point number
parseInt() parse string and return integer
toFixed()

// Arrow functions
const multiply = (num1, num2) => {
  const result = num1 * num2
  return result
}

const saySomething = () => {
  console.log("Sayyyy somethinnggggg");
}


// const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. 
// They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned:

// In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";

// Escape Sequences:

\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
