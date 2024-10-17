document.title = "Harry is Genius";
console.log(document.title);
console.log(document.body);
document.body.style.backgroundColor = "green";
/*
DOM --> Document Object Model

DOM represents the page content as HTML

document.body  -->  Page body as JS object

document.body.style.background = "green"

*/

/*
BOM --> Browser Object Model 

The Browser Object Model represents additional objects provided by the browser (host environment)
for working with everything except the document.

The functions alert/confirm /prompt are also a part of the BOM

location key : "https://codewithharry.com" --> redirect to another URL


Window object , BOM & DOM
we have the following when javascript runs in a browser

Window --> 1. DOM
       --> 2. BOM
       --> 3. JavaScript Core
Window object represents browser window and provides methods to control it. It is a global object.
*/

/*
==================== JavaScript in the browser =============================

JavaScript was initially created to make web pages alive. JS can be written right in a web page's HTML to make it interactive.

The browser has an embedded engine called the javaScript engine or the JavaScript runtime.

JavaScript's abitily in the browser is very limited to protect the users safety. for example a webpage on 
http://google.com cannot access http://codeswear.com and steal information from there.


*/
