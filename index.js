var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 *6;
randomNumber1 = Math.floor(randomNumber1) + 1;
console.log(randomNumber1);

var randomDiceImage = "images/dice" + randomNumber1 + ".png";


var image1 = document.querySelector("img");
image1.setAttribute("src", randomDiceImage);


var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage);







