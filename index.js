// const httpInstance = require("http");
// const portNumber = 8080;

// const httpServer = httpInstance.createServer((req, res) => {
//   res.write("Response from server");
//   res.statusCode = 200;

//   res.end();
// });

// httpServer.listen(portNumber, () => {
//   console.log("Server is lisenting on port " + portNumber);
// });

function Guardian(
  name,
  battleClass,
  rank,
  level,
  tier,
  milestone,
  shards,
  attack,
  slot
) {
  this.name = name;
  this.battleClass = battleClass;
  this.rank = rank;
  this.level = level;
  this.tier = tier;
  this.milestone = milestone;
  this.shards = shards;
  this.attack = attack;
  this.slot = slot;
}

const daniil = new Guardian("Daniil", "Ranged", "⭐⭐", 1, 1, 1, 0, 100, 0);
const artemy = new Guardian("Artemy", "Tank", "⭐⭐", 1, 1, 1, 0, 100, 0);
const aang = new Guardian("Aang", "Ranged", "⭐⭐", 1, 1, 1, 0, 100);
const zuko = new Guardian("Zuko", "Melee", "⭐⭐", 1, 1, 1, 0, 100);
const etihw = new Guardian("Etihw", "Support", "⭐⭐", 1, 1, 1, 0, 100);
const kcalb = new Guardian("Kcalb", "Tank", "⭐⭐", 1, 1, 1, 0, 100);
const taako = new Guardian("Taako", "Support", "⭐⭐", 1, 1, 1, 0, 100);
const kravitz = new Guardian("Kravitz", "Melee", "⭐⭐", 1, 1, 1, 0, 100);
const anduin = new Guardian("Anduin", "Support", "⭐⭐", 1, 1, 1, 0, 100);
const wrathion = new Guardian("Wrathion", "Ranged", "⭐⭐", 1, 1, 1, 0, 100);

const allGuardians = [
  daniil,
  artemy,
  aang,
  zuko,
  etihw,
  kcalb,
  taako,
  kravitz,
  anduin,
  wrathion,
];
const playerGuardians = [];

let guardianDisplay = "";

function updateGuardians() {
  for (let i = 0; i < playerGuardians.length; i++) {
    console.log("I worked!");
    guardianDisplay +=
      "<div id={guardian-item}>" +
      "<h3>" +
      playerGuardians[i].name +
      "</h3>" +
      playerGuardians[i].rank +
      "<br>" +
      playerGuardians[i].battleClass +
      "<br>" +
      playerGuardians[i].level +
      "<br>" +
      (playerGuardians[i].attack * playerGuardians[i].rank.length +
        playerGuardians[i].level * 20) +
      "</div>";
    document.getElementById("guardianDisplay").innerHTML = guardianDisplay;
  }
}

// =============================================================================
// -
// -
// Crystals
// -
// -
// =============================================================================

function Crystal(
  name,
  range,
  daniil,
  artemy,
  anduin,
  wrathion,
  aang,
  zuko,
  etihw,
  kcalb,
  taako,
  kravitz,
  oneStar,
  twoStar,
  threeStar,
  fourStar,
  fiveStar
) {
  this.name = name;
  this.range = range;

  this.daniil = daniil;
  this.artemy = artemy;
  this.aang = aang;
  this.zuko = zuko;
  this.anduin = anduin;
  this.wrathion = wrathion;
  this.etihw = etihw;
  this.kcalb = kcalb;
  this.taako = taako;
  this.kravitz = kravitz;

  this.oneStar = oneStar;
  this.twoStar = twoStar;
  this.threeStar = threeStar;
  this.fourStar = fourStar;
  this.fiveStar = fiveStar;
}

// Glowing (Rank 1 - 3)
const glowingCrystal = new Crystal(
  "Glowing",
  "2 to 5 star",
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  60,
  30,
  10,
  0,
  0
);

// Stellar (Rank 2 - 5)
const stellarCrystal = new Crystal(
  "Stellar",
  "2 to 5 star",
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  0,
  60,
  30,
  5,
  1
);

// Radiant (3)
const radiantCrystal = new Crystal(
  "Radiant",
  "3 star",
  0,
  false,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  0,
  0,
  100,
  0,
  0
);

// Brilliant (4)
const brilliantCrystal = new Crystal(
  "Brilliant",
  "4 star",
  0,
  false,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  0,
  0,
  0,
  100,
  0
);

// Astral (3 - 5)
const astralCrystal = new Crystal(
  "Astral",
  "3 to 5 star",
  0,
  false,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  0,
  0,
  80,
  18,
  2
);

// =========================

// Famed (2 - 5)

const daniilFamed = new Crystal(
  "Daniil Famed",
  "2 to 5 star",
  0,
  false,
  28,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  0,
  60,
  30,
  5,
  1
);

const artemyFamed = new Crystal(
  "Artemy Famed",
  "2 to 5 star",
  0,
  false,
  8,
  28,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  0,
  60,
  30,
  5,
  1
);

const anduinFamed = new Crystal(
  "Anduin Famed",
  "2 to 5 star",
  0,
  false,
  8,
  8,
  28,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  0,
  60,
  30,
  5,
  1
);

const wrathionFamed = new Crystal(
  "Wrathion Famed",
  "2 to 5 star",
  0,
  false,
  8,
  8,
  8,
  28,
  8,
  8,
  8,
  8,
  8,
  8,
  0,
  60,
  30,
  5,
  1
);

const aangFamed = new Crystal(
  "Aang Famed",
  "2 to 5 star",
  0,
  false,
  8,
  8,
  8,
  8,
  28,
  8,
  8,
  8,
  8,
  8,
  0,
  60,
  30,
  5,
  1
);

const zukoFamed = new Crystal(
  "Zuko Famed",
  "2 to 5 star",
  0,
  false,
  8,
  8,
  8,
  8,
  8,
  28,
  8,
  8,
  8,
  8,
  0,
  60,
  30,
  5,
  1
);

const etihwFamed = new Crystal(
  "Etihw Famed",
  "2 to 5 star",
  0,
  false,
  8,
  8,
  8,
  8,
  8,
  8,
  28,
  8,
  8,
  8,
  0,
  60,
  30,
  5,
  1
);

const kcalbFamed = new Crystal(
  "Daniil Famed",
  "2 to 5 star",
  0,
  false,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  28,
  8,
  8,
  0,
  60,
  30,
  5,
  1
);

const taakoFamed = new Crystal(
  "Taako Famed",
  "2 to 5 star",
  0,
  false,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  28,
  8,
  0,
  60,
  30,
  5,
  1
);

const kravitzFamed = new Crystal(
  "Kravitz Famed",
  "2 to 5 star",
  0,
  false,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  28,
  0,
  60,
  30,
  5,
  1
);

//   const allCrystals= [
//     glowingCrystal,
//     stellarCrystal,
//     brilliantCrystal,
//     radiantCrystal,
//     astralCrystal,
//     daniilFamed,
//     artemyFamed,
//     anduinFamed,
//     wrathionFamed,
//     aangFamed,
//     zukoFamed,
//     etihwFamed,
//     kcalbFamed,
//     taakoFamed,
//     kravitzFamed]

const famedCrystals = [
  daniilFamed,
  artemyFamed,
  anduinFamed,
  wrathionFamed,
  aangFamed,
  zukoFamed,
  etihwFamed,
  kcalbFamed,
  taakoFamed,
  kravitzFamed,
];

const crystalDisplay = document.getElementById("crystalDisplay");

for (let i = 0; i < famedCrystals.length; i++) {
  const crystalContainer = document.createElement("div");
  crystalContainer.innerHTML = `<p>${famedCrystals[i].name} Crystal</p><br>`;
  const button = document.createElement("button");
  button.textContent = "Buy";
  button.id = `btn-${i + 1}`;
  button.addEventListener("click", () => {
    openCrystal(crystalNumber1, crystalNumber2);
  });
  crystalContainer.appendChild(button);
  crystalDisplay.appendChild(crystalContainer);
}

function getCharacterByRNG(crystalNumber1) {
  switch (true) {
    case crystalNumber1 >= 1 && crystalNumber1 <= 10:
      playerGuardians.push(daniil);
      return "Daniil";
    case crystalNumber1 >= 11 && crystalNumber1 <= 20:
      playerGuardians.push(artemy);
      return "Artemy";
    case crystalNumber1 >= 21 && crystalNumber1 <= 30:
      playerGuardians.push(anduin);
      return "Anduin";
    case crystalNumber1 >= 31 && crystalNumber1 <= 40:
      playerGuardians.push(wrathion);
      return "Wrathion";
    case crystalNumber1 >= 41 && crystalNumber1 <= 50:
      playerGuardians.push(aang);
      return "Aang";
    case crystalNumber1 >= 51 && crystalNumber1 <= 60:
      playerGuardians.push(zuko);
      return "Zuko";
    case crystalNumber1 >= 61 && crystalNumber1 <= 70:
      playerGuardians.push(etihw);
      return "Etihw";
    case crystalNumber1 >= 71 && crystalNumber1 <= 80:
      playerGuardians.push(kcalb);
      return "Kcalb";
    case crystalNumber1 >= 81 && crystalNumber1 <= 90:
      playerGuardians.push(taako);
      return "Taako";
    case crystalNumber1 >= 91 && crystalNumber1 <= 100:
      playerGuardians.push(kravitz);
      return "Kravitz";
    default:
      return "Unknown";
  }
}

function getRankByRNG(crystalNumber2) {
  switch (true) {
    case crystalNumber2 >= 1 && crystalNumber2 <= 60:
      return "One";
    case crystalNumber2 >= 61 && crystalNumber2 <= 80:
      return "Two";
    case crystalNumber2 >= 81 && crystalNumber2 <= 95:
      return "Three";
    case crystalNumber2 >= 96 && crystalNumber2 <= 99:
      return "Four";
    case (crystalNumber2 = 100):
      return "Five";
    default:
      return "Unknown";
  }
}

let crystalNumber1 = 0;
let crystalNumber2 = 0;

function openCrystal(crystalNumber1, crystalNumber2) {
  crystalNumber1 = Math.floor(Math.random() * 100) + 1;
  crystalNumber2 = Math.floor(Math.random() * 100) + 1;
  console.log(playerGuardians);
  let character = getCharacterByRNG(crystalNumber1);
  let rank = getRankByRNG(crystalNumber2);
  updateGuardians();
  alert(`${rank} Star ${character}`);
}
