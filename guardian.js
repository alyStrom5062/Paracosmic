// Character Objects

function Guardian (name, battleClass, rank, level, tier, milestone, shards, attack) {
    this.name = name
    this.battleClass = battleClass
    this.rank = rank
    this.level = level
    this.tier = tier
    this.milestone = milestone
    this.shards = shards
    this.attack = attack
}

const daniil = new Guardian("Daniil",     "Ranged",   2, 1, 1, 1, 0, 100)
const artemy = new Guardian("Artemy",     "Tank",     2, 1, 1, 1, 0, 100)
const aang = new Guardian("Aang",         "Ranged",   1, 1, 1, 1, 0, 100)
const zuko = new Guardian("Zuko",         "Melee",    1, 1, 1, 1, 0, 100)
const etihw = new Guardian("Etihw",       "Support",  1, 1, 1, 1, 0, 100)
const kcalb = new Guardian("Kcalb",       "Tank",     1, 1, 1, 1, 0, 100)
const taako = new Guardian("Taako",       "Support",  1, 1, 1, 1, 0, 100)
const kravitz = new Guardian("Kravitz",   "Melee",    1, 1, 1, 1, 0, 100)
const anduin = new Guardian("Anduin",     "Support",  1, 1, 1, 1, 0, 100)
const wrathion = new Guardian("Wrathion", "Ranged",   1, 1, 1, 1, 0, 100)

const playerGuardians = []

// for (let i = 0; i < playerGuardians.length; i++) {
//     calculateAttack()
// }

let dataDisplay = ""

for (let i = 0; i < playerGuardians.length; i++) {
    dataDisplay += 
    "<h3>" + playerGuardians[i].name + "</h3>" + 
    playerGuardians[i].rank + 
    " - " + 
    playerGuardians[i].battleClass +
    " - " +
    playerGuardians[i].level + 
    " - " + 
    playerGuardians[i].attack * playerGuardians[i].rank;
}

document.getElementById("dataDisplay").innerHTML = dataDisplay;


