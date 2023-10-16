function imageNameGenerator() {

  var randomNumber1 = Math.random();
  randomNumber1 = randomNumber1 *6;
  randomNumber1 = Math.floor(randomNumber1) + 1;
  var randomDiceImage = "images/dice" + randomNumber1 + ".png";
  return randomDiceImage;
}
// console.log(imageNameGenerator())

var image1 = document.querySelector("img");
image1.setAttribute("src", imageNameGenerator());


var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageNameGenerator());


// var container = documet.querySelector("h1");
// container.innerHTML("new", "draw");

// document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";








