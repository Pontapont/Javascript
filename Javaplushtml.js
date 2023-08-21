// Event listener that waits for click on button. After which it executes onclick parameter
<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
<button onclick="this.innerHTML = Date()">The time is?</button>
document.querySelector("#header").innerHTML = "Hallo";

Common HTML Events

Here is a list of some common HTML events:
Event 	Description
-  onchange 	An HTML element has been changed
-  onclick 	The user clicks an HTML element
-  onmouseover 	The user moves the mouse over an HTML element
-  onmouseout 	The user moves the mouse away from an HTML element
-  onkeydown 	The user pushes a keyboard key
-  onload 	The browser has finished loading the page

// The HTML DOM document object is the owner of all other objects in your web page.
The HTML DOM Document Object
The document object represents your web page.
If you want to access any element in an HTML page, you always start with accessing the document object.
Below are some examples of how you can use the document object to access and manipulate HTML.

// Select all <p> tags within <header> and log second <p> tag
const myT = document.getElementById("header");
const myB = myT.getElementsByTagName("p");
console.log(myB[2].innerHTML)

// Select all <p> that have a "intro" class
let a = document.querySelectorAll("p.intro");
