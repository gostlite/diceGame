let num1 = Math.floor(Math.random()*6)+1;
let num2 = Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[0].setAttribute("src", "images/dice"+num1+".png")
document.querySelector(".img2").setAttribute("src", "images/dice"+num2+".png")
if (num1 > num2) {
    document.querySelector(".container h1").textContent = "Player1 wins"
}else if(num2 > num1){
    document.querySelector(".container h1").textContent = "Player2 wins"
}else{
    document.querySelector(".container h1").textContent = "Draw"
}