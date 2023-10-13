//type conversion
//(changing the datatype of a value to another)
//(Strings, numbers, booleans)


/*
let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;

console.log("Happy Birthday! Now you are", age, "years old");
*/


let x;
let y;
let z;

//converting a String into a Number:
x = Number("3.14");
//Converting a Number into a String:
y = String(3.14);
//Converting an empty String into boolean (false):
z = Boolean("");
//Converting a String into boolean (true):
a = Boolean("Dog");

//if we introduce a String when a Number is expected:
b = Number("pizza");
//NaN result


console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
console.log(a, typeof a);
console.log(b, typeof b);

