

document.getElementById("form").addEventListener("submit",checkout);

function checkout(e){
    event.preventDefault();

    setTimeout(function(){
        alert("Your order is accepted ")
    },0)

    setTimeout(function(){
        alert("Your order is being Prepared ")
    },3)

    setTimeout(function(){
        alert("  Your order is being packed  ")
    },8)

    setTimeout(function(){
        alert(" Your order is out for delivery   ")
    },10)

    setTimeout(function(){
        alert("Order delivered")
    },12)

}

