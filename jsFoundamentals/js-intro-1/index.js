window.alert("Welcome");

//declaration (var, let, const)
//assignment (= assignment operator)

let name = "Pablo" //string
let age = 32; //number
let isActive = true; //boolean

console.log("Hello", name);
console.log("Your age is", age);
console.log("Enrolled:", isActive);

document.getElementById("p1").innerHTML = "Hello " + name;
document.getElementById("p2").innerHTML = "Your age is " + age;
document.getElementById("p3").innerHTML = "Enrolled: " + isActive;