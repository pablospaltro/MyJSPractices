/*
using the string method slice()

extracts a section of a string
and returns it as a new string,
without modifying the original string
*/ 

let fullName1 = "PabloSpaltro";
let firstName1;
let lastName1;

let fullName2 = "Roberto Perez"
let firstName2;
let lastName2;

firstName1 = fullName1.slice(0, 5);
lastName1 = fullName1.slice(5);

console.log(lastName1);
console.log(firstName1);

//from beginning to the first space:
firstName2 = fullName2.slice(0, fullName2.indexOf(" "));

//everything after the first space, slice it and create a new string:
lastName2 = fullName2.slice(fullName2.indexOf(" ") + 1);

console.log(lastName2);
console.log(firstName2);


/*
method chaining:

Calling one method after another, 
in one continuous line of code
*/

let userName3 = "julia";

let firstLetter = userName3.charAt(0).toUpperCase();

console.log(firstLetter);
