let msg = document.getElementById("message");
var height = 6;
var width = 5;
var row = 0;
var col = 0;
var word = "SQUID";
var isGameOver = false;
window.onload = function () {
  initialize();
};

function initialize() {
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      let tile = document.createElement("span");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");
      tile.innerText = "";
      document.getElementById("board").appendChild(tile);
    }
  }
}
function gameOver() {
  let showPop = document.getElementById("answer");
  let over = document.getElementById("overlay");
  showPop.style.display = "block";
  over.style.display = "block";
}
function update() {
  let correct = 0;
  for (let c = 0; c < width; c++) {
    let currTile = document.getElementById(row.toString() + "-" + c.toString());
    let letter = currTile.innerText;
    if (word[c] == letter) {
      currTile.classList.add("right");
      correct += 1;
    } else if (word.includes(letter)) {
      currTile.classList.add("there");
    }
    else {
      currTile.classList.add("wrong");
    }
  }
  if(correct == width) {
    isGameOver = true;
    gameOver();
    let msg = document.getElementById("message");
    msg.innerText = "You got it right! The word was " + word;
  } 
}
document.addEventListener("click", function(){
  btn = document.getElementById("restartBtn");
  window.location.reload();
})
document.addEventListener("keyup", (e) => {
  if (!isGameOver) {
    if (e.code.startsWith("Key") && col < width) {
      let currTile = document.getElementById(
        row.toString() + "-" + col.toString()
      );
      if (currTile.innerText == "") {
        currTile.innerText = e.code[3];
        col += 1;
      }
    } else if (e.code == "Backspace") {
      if (col > 0) {
        col -= 1;
        let currTile = document.getElementById(
          row.toString() + "-" + col.toString()
        );
        currTile.innerText = "";
      }
    } else if (e.code == "Enter" && col == 5){
      update();
      row += 1;
      col = 0;
    }
    else if (e.code == "Enter" && col != 5){
      window.alert("Please type in a five letter word!")
    }
  }
  

  if (row == height) {
    isGameOver = true;
    gameOver();
  }
});


