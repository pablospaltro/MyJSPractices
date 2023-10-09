//Drawing a rectangle with user input

let symbol = window.prompt('Enter a symbol to use');
let rows= window.prompt('Enter # of rows');
let columns = window.prompt('Enter # of columns');

let mainElement = document.querySelector('.large');
mainElement.style.fontSize = 'xx-large';

for(let i = 1; i <= rows ; i++){
    for(let j = 1; j <= columns; j++){
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}