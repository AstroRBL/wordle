document.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector(".loader");
  const loaderOverlay = document.querySelector(".loader-overlay");
  loader.style.display = "none";
  loaderOverlay.style.display = "none";
  function startPop() {
    let startWin = document.querySelector(".startMessage");
    let startBtn = document.getElementById("startBtn");
    startWin.style.display = "block";
    startBtn.addEventListener("click", function () {
      startWin.style.display = "none";
    });
  }

  let msg = document.getElementById("message");
  var height = 6;
  var width = 5;
  var row = 0;
  var col = 0;
  const wordsList = [
    "About",
    "Alert",
    "Argue",
    "Beach",
    "Above",
    "Alike",
    "Arise",
    "Began",
    "Abuse",
    "Alive",
    "Array",
    "Begin",
    "Actor",
    "Allow",
    "Aside",
    "Begun",
    "Acute",
    "Alone",
    "Asset",
    "Being",
    "Admit",
    "Along",
    "Audio",
    "Below",
    "Adopt",
    "Alter",
    "Audit",
    "Bench",
    "Adult",
    "Among",
    "Avoid",
    "Billy",
    "After",
    "Anger",
    "Award",
    "Birth",
    "Again",
    "Angle",
    "Aware",
    "Black",
    "Agent",
    "Angry",
    "Badly",
    "Blame",
    "Agree",
    "Apart",
    "Baker",
    "Blind",
    "Ahead",
    "Apple",
    "Bases",
    "Block",
    "Alarm",
    "Apply",
    "Basic",
    "Blood",
    "Album",
    "Arena",
    "Basis",
    "Board",
    "Boost",
    "Buyer",
    "China",
    "Cover",
    "Booth",
    "Cable",
    "Chose",
    "Craft",
    "Bound",
    "Calif",
    "Civil",
    "Crash",
    "Brain",
    "Carry",
    "Claim",
    "Cream",
    "Brand",
    "Catch",
    "Class",
    "Crime",
    "Bread",
    "Cause",
    "Clean",
    "Cross",
    "Break",
    "Chain",
    "Clear",
    "Crowd",
    "Breed",
    "Chair",
    "Click",
    "Crown",
    "Brief",
    "Chart",
    "Clock",
    "Curve",
    "Bring",
    "Chase",
    "Close",
    "Cycle",
    "Broad",
    "Cheap",
    "Coach",
    "Daily",
    "Broke",
    "Check",
    "Coast",
    "Dance",
    "Brown",
    "Chest",
    "Could",
    "Dated",
    "Build",
    "Chief",
    "Count",
    "Dealt",
    "Built",
    "Child",
    "Court",
    "Death",
    "Debut",
    "Entry",
    "Forth",
    "Group",
    "Delay",
    "Equal",
    "Forty",
    "Grown",
    "Depth",
    "Error",
    "Forum",
    "Guard",
    "Doing",
    "Event",
    "Found",
    "Guess",
    "Doubt",
    "Every",
    "Frame",
    "Guest",
    "Dozen",
    "Exact",
    "Frank",
    "Guide",
    "Draft",
    "Exist",
    "Fraud",
    "Happy",
    "Drama",
    "Extra",
    "Fresh",
    "Harry",
    "Drawn",
    "Faith",
    "Front",
    "Heart",
    "Dream",
    "False",
    "Fruit",
    "Heavy",
    "Dress",
    "Fault",
    "Fully",
    "Hence",
    "Drill",
    "Fibre",
    "Funny",
    "Night",
    "Drink",
    "Field",
    "Giant",
    "Horse",
    "Drive",
    "Fifth",
    "Given",
    "Hotel",
    "Drove",
    "Fifty",
    "Glass",
    "House",
    "Dying",
    "Fight",
    "Globe",
    "Human",
    "Eager",
    "Final",
    "Going",
    "Ideal",
    "Early",
    "First",
    "Grace",
    "Image",
    "Earth",
    "Fixed",
    "Grade",
    "Index",
    "Eight",
    "Flash",
    "Grand",
    "Inner",
    "Elite",
    "Fleet",
    "Grant",
    "Input",
    "Empty",
    "Floor",
    "Grass",
    "Issue",
    "Enemy",
    "Fluid",
    "Great",
    "Irony",
    "Enjoy",
    "Focus",
    "Green",
    "Juice",
    "Enter",
    "Force",
    "Gross",
    "Joint",
    "Judge",
    "Metal",
    "Media",
    "Newly",
    "Known",
    "Local",
    "Might",
    "Noise",
    "Label",
    "Logic",
    "Minor",
    "North",
    "Large",
    "Loose",
    "Minus",
    "Noted",
    "Laser",
    "Lower",
    "Mixed",
    "Novel",
    "Later",
    "Lucky",
    "Model",
    "Nurse",
    "Laugh",
    "Lunch",
    "Money",
    "Occur",
    "Layer",
    "Lying",
    "Month",
    "Ocean",
    "Learn",
    "Magic",
    "Moral",
    "Offer",
    "Lease",
    "Major",
    "Motor",
    "Often",
    "Least",
    "Maker",
    "Mount",
    "Order",
    "Leave",
    "March",
    "Mouse",
    "Other",
    "Legal",
    "Music",
    "Mouth",
    "Ought",
    "Level",
    "Match",
    "Movie",
    "Paint",
    "Light",
    "Mayor",
    "Needs",
    "Paper",
    "Limit",
    "Meant",
    "Never",
    "Party",
    "Peace",
    "Power",
    "Radio",
    "Round",
    "Panel",
    "Press",
    "Raise",
    "Route",
    "Phase",
    "Price",
    "Range",
    "Royal",
    "Phone",
    "Pride",
    "Rapid",
    "Rural",
    "Photo",
    "Prime",
    "Ratio",
    "Scale",
    "Piece",
    "Print",
    "Reach",
    "Scene",
    "Pilot",
    "Prior",
    "Ready",
    "Scope",
    "Pitch",
    "Prize",
    "Refer",
    "Score",
    "Place",
    "Proof",
    "Right",
    "Sense",
    "Plain",
    "Proud",
    "Rival",
    "Serve",
    "Plane",
    "Prove",
    "River",
    "Seven",
    "Plant",
    "Queen",
    "Quick",
    "Shall",
    "Plate",
    "Sixth",
    "Stand",
    "Shape",
    "Point",
    "Quiet",
    "Roman",
    "Share",
    "Pound",
    "Quite",
    "Rough",
    "Sharp",
    "Sheet",
    "Spare",
    "Style",
    "Times",
    "Shelf",
    "Speak",
    "Sugar",
    "Tired",
    "Shell",
    "Speed",
    "Suite",
    "Title",
    "Shift",
    "Spend",
    "Super",
    "Today",
    "Shirt",
    "Spent",
    "Sweet",
    "Topic",
    "Shock",
    "Split",
    "Table",
    "Total",
    "Shoot",
    "Spoke",
    "Taken",
    "Touch",
    "Short",
    "Sport",
    "Taste",
    "Tough",
    "Shown",
    "Staff",
    "Taxes",
    "Tower",
    "Sight",
    "Stage",
    "Teach",
    "Track",
    "Since",
    "Stake",
    "Teeth",
    "Trade",
    "Sixty",
    "Start",
    "Texas",
    "Treat",
    "Sized",
    "State",
    "Thank",
    "Trend",
    "Skill",
    "Steam",
    "Theft",
    "Trial",
    "Sleep",
    "Steel",
    "Their",
    "Tried",
    "Slide",
    "Stick",
    "Theme",
    "Tries",
    "Small",
    "Still",
    "There",
    "Truck",
    "Smart",
    "Stock",
    "These",
    "Truly",
    "Smile",
    "Stone",
    "Thick",
    "Trust",
    "Smith",
    "Stood",
    "Thing",
    "Truth",
    "Smoke",
    "Store",
    "Think",
    "Twice",
    "Solid",
    "Storm",
    "Third",
    "Under",
    "Solve",
    "Story",
    "Those",
    "Undue",
    "Sorry",
    "Strip",
    "Three",
    "Union",
    "Sound",
    "Stuck",
    "Threw",
    "Unity",
    "South",
    "Study",
    "Throw",
    "Until",
    "Space",
    "Stuff",
    "Tight",
    "Upper",
    "Upset",
    "Whole",
    "Waste",
    "Wound",
    "Urban",
    "Whose",
    "Watch",
    "Write",
    "Usage",
    "Woman",
    "Water",
    "Wrong",
    "Usual",
    "Train",
    "Wheel",
    "Wrote",
    "Valid",
    "World",
    "Where",
    "Yield",
    "Value",
    "Worry",
    "Which",
    "Young",
    "Video",
    "Worse",
    "While",
    "Youth",
    "Virus",
    "Worst",
    "White",
    "Worth",
    "Visit",
    "Would",
    "Vital",
    "Voice",
  ];
  var word = "";
  var isGameOver = false;
  window.onload = function () {
    startPop();
    initialize();
    getRandomWord();
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
      let currTile = document.getElementById(
        row.toString() + "-" + c.toString()
      );
      let letter = currTile.innerText;
      if (word[c] == letter) {
        currTile.classList.add("right");
        correct += 1;
      } else if (word.includes(letter)) {
        currTile.classList.add("there");
      } else {
        currTile.classList.add("wrong");
      }
    }
    if (correct == width) {
      isGameOver = true;
      gameOver();
      let msg = document.getElementById("message");
      msg.innerText = "You got it right! The word was " + word;
    }
  }
  document.addEventListener("click", function (event) {
    document.getElementById("restartBtn");
    if (event.target.id === "restartBtn") {
      window.location.reload();
    }
  });
  document.addEventListener("click", function (event) {
    document.getElementById("error-button");
    if (event.target.id === "error-button") {
      let inv = document.getElementById("error");
      inv.style.display = "none";
      let over = document.getElementById("overlay");
      over.style.display = "none";
    }
  });

  function getRandomWord() {
    let randomIndex = Math.floor(Math.random() * wordsList.length);
    word = wordsList[randomIndex].toUpperCase();
  }

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
      } else if (e.code == "Enter" && col == 5) {
        update();
        row += 1;
        col = 0;
      } else if (e.code == "Enter" && col != 5) {
        let inv = document.getElementById("error");
        inv.style.display = "block";
        let over = document.getElementById("overlay");
        over.style.display = "block";
        let errorMsg = document.getElementById("error-message");
        let errorBtn = document.getElementById("error-button");
        errorMsg.innerText = "Please enter a Five-letter word.";
      }
    }

    if (row == height) {
      isGameOver = true;
      gameOver();
      let msg = document.getElementById("message");
      msg.innerText = "You got it wrong! The word was " + word;
    }
  });
  let gearBtn = document.getElementById("gear");
  let close = document.getElementById("closeBtn");
  let setWin = document.getElementById("settings");
  gearBtn.addEventListener("click", function () {
    setWin.style.display = "block";
    let over = document.getElementById("overlay");
    over.style.display = "block";
  });
  close.addEventListener("click", function () {
    setWin.style.display = "none";
    let over = document.getElementById("overlay");
    over.style.display = "none";
  });
});
