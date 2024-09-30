function Guardian(
  name,
  battleClass,
  rank,
  level,
  tier,
  milestone,
  shards,
  attack
) {
  this.name = name;
  this.battleClass = battleClass;
  this.rank = rank;
  this.level = level;
  this.tier = tier;
  this.milestone = milestone;
  this.shards = shards;
  this.attack = attack;
}

const daniil = new Guardian("Daniil", "Ranged", "⭐⭐", 45, 1, 1, 0, 100);
const artemy = new Guardian("Artemy", "Tank", "⭐⭐", 64, 1, 1, 0, 100);
const aang = new Guardian("Aang", "Ranged", "⭐⭐", 56, 1, 1, 0, 100);
const zuko = new Guardian("Zuko", "Melee", "⭐⭐", 39, 1, 1, 0, 100);
const etihw = new Guardian("Etihw", "Support", "⭐⭐", 14, 1, 1, 0, 100);
const kcalb = new Guardian("Kcalb", "Tank", "⭐⭐", 13, 1, 1, 0, 100);
const taako = new Guardian("Taako", "Support", "⭐⭐", 41, 1, 1, 0, 100);
const kravitz = new Guardian("Kravitz", "Melee", "⭐⭐", 13, 1, 1, 0, 100);
const anduin = new Guardian("Anduin", "Support", "⭐⭐", 17, 1, 1, 0, 100);
const wrathion = new Guardian("Wrathion", "Ranged", "⭐⭐", 91, 1, 1, 0, 100);

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

let dataDisplay = "";

console.log(daniil.rank);

for (let i = 0; i < allGuardians.length; i++) {
  dataDisplay +=
    "<h3>" +
    allGuardians[i].name +
    "</h3>" +
    allGuardians[i].rank +
    " - " +
    allGuardians[i].battleClass +
    " - " +
    allGuardians[i].level +
    " - " +
    (allGuardians[i].attack * allGuardians[i].rank.length +
      allGuardians[i].level * 20);
}

document.getElementById("dataDisplay").innerHTML = dataDisplay;
