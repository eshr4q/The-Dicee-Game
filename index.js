// 
//  function imageNameGenerator() {

//   var randomNumber1 = Math.random();
//   randomNumber1 = randomNumber1 *6;
//   randomNumber1 = Math.floor(randomNumber1) + 1;
//   var randomDiceImage = "images/dice" + randomNumber1 + ".png";
//   return randomDiceImage;
// }
// // console.log(imageNameGenerator())

// var image1 = document.querySelector("img");
// image1.setAttribute("src", imageNameGenerator());


// var image2 = document.querySelectorAll("img")[1];
// image2.setAttribute("src", imageNameGenerator());

var randomNumber1 = Math.floor(Math.random() * 6) + 1; 

var randomDiceImage = "dice" + randomNumber1 + ".png"; 

var randomImageSource = "images/" + randomDiceImage; 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// var h1 = documet.querySelector("h1");
// h1.innerHTML("new", "draw");


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}







