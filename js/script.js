function changeText(id) {
    id.innerHTML = "Ooops!";
}

function generatePin(){
    let pin=0;
    pin=Math.floor(100000 + Math.random() * 900000);
    console.log(Math.floor(100000 + Math.random() * 900000));
    document.getElementById("pin").innerHTML=pin;
}