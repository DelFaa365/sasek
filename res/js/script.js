const cookie = document.getElementById("cookie");
const pointsCounter = document.getElementById("pointsCounter");
const buyAuto = document.getElementById("buyAuto");
const priceBox = document.getElementById("priceBox");
let points = 0;
let price = 50;
cookie.onclick = () =>{
    points++;
    pointsCounter.innerText = points;    
}

buyAuto.onclick = () =>{
    if(points >= price){
        points-= price;
        price = price*2;
        priceBox.innerHTML = price;
        setInterval(() => {
            points++; 
            pointsCounter.innerText = points;   
         }, 250);
    } else {
        alert("Nemáš dostatek pointů")
    }
}
