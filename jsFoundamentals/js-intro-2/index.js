//how to accept user input

//1. Easy way: with a window prompt

//let username = window.prompt("What's your name?");
//console.log(username);



//2. Difficult way: HTML textbox

let username;

document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello, " + username;
}

