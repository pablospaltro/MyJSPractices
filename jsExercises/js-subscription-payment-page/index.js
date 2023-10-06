//Subscription and payment method web page
//using checked property:
//by following a checkbox or a radio button with .checked (true or false)

document.getElementById("myButton").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox"); 
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");
    
    if(myCheckBox.checked){
        console.log("You are now subscribed!")
    }
    else {
        console.log("You are NOT suscribed")
    }

    if(visaBtn.checked){
        console.log("You are paying with VISA")
    }
    else if (mastercardBtn.checked){
        console.log("You are paying with MASTERCARD")
    }
    else if(paypalBtn.checked){
        console.log("You are paying with PayPal")
    }
    else {
        console.log("You must select a payment type!")
    }
}