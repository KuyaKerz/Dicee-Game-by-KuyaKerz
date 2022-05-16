var randomNumber1 = 6;
var randomNumber2 = 6;
document.querySelector("button.dice3").addEventListener("click", click1);

function click1() {
  randomNumber1 = Math.floor(Math.random() * 6 + 1);
  var images1 = "/images/dice" + randomNumber1 + ".png";
  document.querySelector("img.img1").setAttribute("src", images1);
  tester();
}

document.querySelector("button.dice4").addEventListener("click", click2);

function click2() {
  randomNumber2 = Math.floor(Math.random() * 6 + 1);
  var imagese = "/images/dice" + randomNumber2 + ".png";
  document.querySelector("img.img2").setAttribute("src", imagese);
  tester();
}

function tester() {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 PLAYER 1 WINS";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩 PLAYER 2 WINS";
  } else {
    document.querySelector("h1").innerHTML = "DRAW";
  }
}
