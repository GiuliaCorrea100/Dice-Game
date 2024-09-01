
var randoNumber = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randoNumber + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//to separate both 
var randoNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/" + "dice" + randoNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randoNumber > randoNumber2) {
    document.querySelector("h1").innerHTML = "🎉Player 1 wins!";
}
else if (randoNumber2 > randoNumber) {
    document.querySelector("h1").innerHTML = "🎊Player 2 wins!";
}
else {
    document.querySelector("h1").innerHTML = "draw!";
}