// ---------------------------- IF statement with numbers:

/*
let age = 70;

if(age >= 65){
    console.log("You are a senior citizen!");
} 
else if (age >= 18){
    console.log("You are an adult!");
}
else if (age < 0){
    console.log("You haven't been born yet!");
}
else {
    console.log("You are a child");
}
*/

// ---------------------------- IF statement with boolean:

/*
let online = true;

if(online){
    console.log("You are online!")
}
else {
    console.log("You are offline!");
}
*/




// -----------------SWITCH statement with letters:

/*
let grade = "A";

switch(grade){
    case "A":
        console.log("A | You did great!");
        break;
    case "B":
        console.log("B | You did good!");
        break;
    case "C":
        console.log("C | You did okay!");
        break;
    case "D":
        console.log("D | You passed... barely");
        break;
    case "F":
        console.log("F | You failed!");
        break;
    default:
        console.log(grade, "is not a letter grade!");
}
*/

// ---------------- SWITCH statement with numbers:

let grade = 100;

switch(true){
    case grade >= 90:
        console.log("A | You did great!");
        break;
    case grade >= 80:
        console.log("B | You did good!");
        break;
    case grade >= 70:
        console.log("C | You did okay!");
        break;
    case grade >= 60:
        console.log("D | You passed... barely");
        break;
    case grade < 60:
        console.log("F | You failed!");
        break;
    default:
        console.log(grade, "is not a number!");
}


