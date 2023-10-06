//Counter program, with Decrease, Reset and Increase options

let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count-=1;
    document.getElementById("countLabel").innerHTML = count;    
}

document.getElementById("resetBtn").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count; 
}

document.getElementById("increaseBtn").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count; 
}