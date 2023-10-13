//Find the hypotenuse of a right angled triangle
// c = sqrt(a2 + b2)

//Two variations for this program:
// 1 - accept some user input via some prompts
// 2 - accept some user input through some HTML textboxes

let a;
let b;
let c;

/*
1 - accept some user input via some prompts

a = window.prompt("Enter side A:");
a = Number(a);

b = window.prompt("Enter side B:");
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);
//or in just one line:
// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

console.log("Side C:", c);

*/

// 2 - accept some user input through some HTML textboxes

document.getElementById("submitButton").onclick = function(){

    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}