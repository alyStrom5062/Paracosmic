// Character Objects

function Guardian (name, battleClass, rank, level, tier, milestone, shards) {
    this.name = name
    this.battleClass = battleClass
    this.rank = rank
    this.level = level
    this.tier = tier
    this.milestone = milestone
    this.shards = shards
}

const daniil = new Guardian("Daniil", "Ranged", "⭐", 1, 1, 1, 0)
const artemy = new Guardian("Artemy", "Tank", "⭐", 1, 1, 1, 0)
const aang = new Guardian("Aang", "Ranged", "⭐", 1, 1, 1, 0)
const zuko = new Guardian("Zuko", "Melee", "⭐", 1, 1, 1, 0)
const etihw = new Guardian("Etihw", "Support", "⭐", 1, 1, 1, 0)
const kcalb = new Guardian("Kcalb", "Tank", "⭐", 1, 1, 1, 0)
const taako = new Guardian("Taako", "Support", "⭐", 1, 1, 1, 0)
const kravitz = new Guardian("Kravitz", "Melee", "⭐", 1, 1, 1, 0)
const anduin = new Guardian("Anduin", "Support", "⭐", 1, 1, 1, 0)
const wrathion = new Guardian("Wrathion", "Ranged", "⭐", 1, 1, 1, 0)

const playerGuardians = [daniil, artemy]

let dataDisplay = ""

for (let i = 0; i < playerGuardians.length; i++) {
    dataDisplay += 
    "<h3>" + playerGuardians[i].name + "</h3>" + 
    playerGuardians[i].rank + 
    " - " + 
    playerGuardians[i].battleClass +
    " - " +
    playerGuardians[i].level
}

document.getElementById("displayGuardians").innerHTML = dataDisplay;


