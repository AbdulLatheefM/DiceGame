var randomno1 = Math.floor(Math.random()*6)+1

var randomDiceImg = "Dice"+randomno1+".png"

var randomImgSrc = "/Web /Dice Game/images/"+randomDiceImg

var image1= document.querySelectorAll("img")[0]

image1.setAttribute("src", randomImgSrc)

var randomno2 = Math.floor(Math.random()*6)+1

var randomImgSrc2 = "/Web /Dice Game/images/Dice"+randomno2 +".png"

document.querySelectorAll("img")[1].setAttribute("src",randomImgSrc2)
 if(randomno1 > randomno2) {
    document.querySelector("h1").innerHTML=("Player 1 WINS!!")
 }else if(randomno2 > randomno1) {
    document.querySelector("h1").innerHTML=("Player 2 WINS!!")
 }else{
    document.querySelector("h1").innerHTML=("DRAW!!")
 }

