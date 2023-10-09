// while loop:

/*
let userName = "";

while(userName == "" || userName == null){
    userName = window.prompt("Enter your name");
}

console.log("Hello", userName);
*/



// do while loop:
//execute the code at least once

/*
let userName;

do{
    userName = window.prompt("Welcome, enter your name:")
} while(userName == "")

console.log("Hello", userName)
*/

// for loop:
//repeat the code a certain amount of times

/*
for(let i = 10; i > 0; i--){
    console.log(i);
}   

console.log("Happy New Year!");
*/

/*
for(let i = 1; i <= 20; i++){
    if(i == 13){
        continue;
    }
    console.log(i);
}
*/


// nested loop:

for(let i = 1; i <= 2; i++){
    for(let j = 1; j <= 3; j++){
        console.log(j);
    }
}