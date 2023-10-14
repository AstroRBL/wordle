document.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector(".loader");
  const loaderOverlay = document.querySelector(".loader-overlay");
  loader.style.display = "none";
  loaderOverlay.style.display = "none";
  if (!localStorage.getItem("visitedBefore")) {
    let startWin = document.querySelector(".startMessage");
    startWin.style.display = "flex";
    let startBtn = document.getElementById("startBtn");
    startBtn.addEventListener("click", function () {
      startWin.style.display = "none";
    });
    localStorage.setItem("visitedBefore", true);
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
  const wordsListEs = [
    "llama",
    "manos",
    "grano",
    "fondo",
    "lucha",
    "grues",
    "puert",
    "pazos",
    "fuerz",
    "pista",
    "dolor",
    "norte",
    "aguas",
    "gente",
    "largo",
    "peque",
    "horno",
    "campo",
    "torre",
    "mesas",
    "crudo",
    "guion",
    "rayas",
    "torti",
    "fines",
    "senso",
    "techo",
    "oliva",
    "notas",
    "tejido",
    "forro",
    "curvo",
    "algun",
    "conse",
    "banda",
    "pista",
    "negro",
    "coche",
    "curva",
    "fiest",
    "piel",
    "dulce",
    "ancho",
    "cable",
    "tejido",
    "corpo",
    "famos",
    "bocas",
    "altas",
    "fuera",
    "maizo",
    "vista",
    "silla",
    "apoyo",
    "nubes",
    "cable",
    "manos",
    "barro",
    "mucho",
    "lleno",
    "pared",
    "marco",
    "fuera",
    "barro",
    "curva",
    "ducho",
    "somos",
    "nombres",
    "vente",
    "novio",
    "perro",
    "arena",
    "fondo",
    "seman",
    "cabel",
    "medio",
    "heroe",
    "silvo",
    "curvo",
    "vista",
    "mesas",
    "calas",
    "piern",
    "viejo",
    "cator",
    "sange",
    "carga",
    "recto",
    "vigor",
    "doble",
    "camin",
  ];
  const wordsListFr = [
    "abêti",
    "aboli",
    "actai",
    "Adimi",
    "aérai",
    "agami",
    "agoni",
    "ahuri",
    "aidai",
    "aigri",
    "ailai",
    "aimai",
    "ainsi",
    "aïoli",
    "airai",
    "aisai",
    "Alesi",
    "alibi",
    "allai",
    "aluni",
    "amari",
    "amati",
    "ambai",
    "amphi",
    "ampli",
    "annui",
    "anobi",
    "anomi",
    "apéri",
    "appui",
    "arabi",
    "arroi",
    "asile",
    "assis",
    "assis",
    "astre",
    "atomi",
    "attir",
    "aubin",
    "audit",
    "augur",
    "autel",
    "auxin",
    "avant",
    "avoir",
    "azyme",
    "babas",
    "babel",
    "babys",
    "bacch",
    "bachi",
    "bacon",
    "badai",
    "badat",
    "badée",
    "badés",
    "badge",
    "badin",
    "bafra",
    "bagad",
    "bagel",
    "bagne",
    "bagot",
    "bagua",
    "bagui",
    "bahut",
    "baies",
    "baign",
    "baika",
    "bails",
    "bains",
    "baiss",
    "balai",
    "balan",
    "balao",
    "balas",
    "balay",
    "balbo",
    "balda",
    "bales",
    "balez",
    "balis",
    "baliv",
    "balla",
    "balle",
    "ballu",
    "balné",
    "banal",
    "banat",
    "banca",
    "banco",
    "banda",
    "bande",
    "banjo",
    "banks",
    "banon",
    "baoul",
    "barat",
    "barbe",
    "barbu",
    "barda",
    "barde",
    "barge",
    "baril",
    "barjo",
    "baron",
    "barre",
  ];

  var word = "";
  var isGameOver = false;
  window.onload = function () {
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
    let matchedIndices = new Array(width).fill(false);

    for (let c = 0; c < width; c++) {
      let currTile = document.getElementById(
        row.toString() + "-" + c.toString()
      );
      let letter = currTile.innerText;

      if (word[c] == letter && !matchedIndices[c]) {
        currTile.classList.add("right");
        correct += 1;
        matchedIndices[c] = true;
      } else if (word.includes(letter) && !matchedIndices.includes(true)) {
        let firstUnmatchedIndex = matchedIndices.findIndex(
          (matched) => !matched
        );
        if (
          word[firstUnmatchedIndex] === letter &&
          !matchedIndices[firstUnmatchedIndex]
        ) {
          currTile.classList.add("right");
          correct += 1;
          matchedIndices[firstUnmatchedIndex] = true;
        } else if (word.includes(letter) && !matchedIndices.includes(true)) {
          currTile.classList.add("there");
        } else {
          currTile.classList.add("wrong");
        }
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
    console.log(word);
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
        const errorMsg = document.querySelector(".error");
        errorMsg.style.display = "flex";

        setTimeout(() => {
          errorMsg.style.transition = "opacity 0.3s ease-in-out";
          errorMsg.style.opacity = 0;
          setTimeout(() => {
            errorMsg.style.display = "none";
            errorMsg.style.opacity = 1;
          }, 300);
        }, 2000);
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
  let save = document.getElementById("saveBtn");
  let sel = document.getElementById("select");
  let savedLanguage = localStorage.getItem("preferredLanguage");
  if (savedLanguage) {
    sel.value = savedLanguage; // Set the selected language to the saved value
  }
  save.addEventListener("click", function () {
    if (sel.value === "es") {
      let randomIndex = Math.floor(Math.random() * wordsListEs.length);
      word = wordsListEs[randomIndex].toUpperCase();
      console.log(word);
    } else if (sel.value === "en") {
      let randomIndex = Math.floor(Math.random() * wordsList.length);
      word = wordsList[randomIndex].toUpperCase();
      console.log(word);
    } else if (sel.value === "fr") {
      let randomIndex = Math.floor(Math.random() * wordsListFr.length);
      word = wordsListFr[randomIndex].toUpperCase();
      console.log(word);
    }
    localStorage.setItem("preferredLanguage", sel.value);
    let setWin = document.getElementById("settings");
    setWin.style.display = "none";

    let over = document.getElementById("overlay");
    over.style.display = "none";
  });
  const keyboardButtons = document.querySelectorAll(
    ".keyboard-button:not(#enter):not(#del)"
  );
  keyboardButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      if (!isGameOver && col < width) {
        let currTile = document.getElementById(
          row.toString() + "-" + col.toString()
        );
        if (currTile.innerText === "") {
          currTile.innerText = event.target.innerText;
          col += 1;
        }
      }
    });
  });

  document.getElementById("del").addEventListener("click", function () {
    if (col > 0) {
      col -= 1;
      let currTile = document.getElementById(
        row.toString() + "-" + col.toString()
      );
      currTile.innerText = "";
    }
  });

  document.getElementById("enter").addEventListener("click", function () {
    if (!isGameOver && col === width) {
      update();
      row += 1;
      col = 0;
    } else if (!isGameOver && col !== width) {
      const errorMsg = document.querySelector(".error");
      errorMsg.style.display = "flex";

      setTimeout(() => {
        errorMsg.style.transition = "opacity 0.3s ease-in-out";
        errorMsg.style.opacity = 0;
        setTimeout(() => {
          errorMsg.style.display = "none";
          errorMsg.style.opacity = 1;
        }, 300);
      }, 2000);
    }
  });
});
