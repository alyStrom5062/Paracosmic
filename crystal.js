function Crystal(
    name, range,
    daniil, artemy, 
    anduin, wrathion, 
    aang, zuko, 
    etihw, kcalb, 
    taako, kravitz, 
    oneStar, twoStar, threeStar, fourStar, fiveStar){
        this.name = name
        this.range = range

        this.daniil = daniil
        this.artemy = artemy
        this.aang = aang
        this.zuko = zuko
        this.anduin = anduin
        this.wrathion = wrathion
        this.etihw = etihw
        this.kcalb = kcalb
        this.taako = taako
        this.kravitz = kravitz

        this.oneStar = oneStar
        this.twoStar = twoStar
        this.threeStar = threeStar
        this.fourStar = fourStar
        this.fiveStar = fiveStar
}



// Glowing (Rank 1 - 3)
const glowingCrystal = new Crystal(
    "Glowing",
    "2 to 5 star",
    10, 10, 10, 10, 10, 
    10, 10, 10, 10, 10,
    60, 30, 10, 0, 0
)

// Stellar (Rank 2 - 5)
const stellarCrystal = new Crystal(
    "Stellar",
    "2 to 5 star",
    10, 10, 10, 10, 10, 
    10, 10, 10, 10, 10,
    0, 60, 30, 5, 1
)

// Radiant (3)
const radiantCrystal = new Crystal(
    "Radiant",
    "3 star",
    10, 10, 10, 10, 10, 
    10, 10, 10, 10, 10,
    0, 0, 100, 0, 0
)

// Brilliant (4)
const brilliantCrystal = new Crystal(
    "Brilliant",
    "4 star",
    10, 10, 10, 10, 10, 
    10, 10, 10, 10, 10,
    0, 0, 0, 100, 0
)

// Astral (3 - 5)
const astralCrystal = new Crystal(
    "Astral",
    "3 to 5 star",
    10, 10, 10, 10, 10, 
    10, 10, 10, 10, 10,
    0, 0, 80, 18, 2
)

// =========================

// Famed (2 - 5)

const daniilFamed = new Crystal(
    "Daniil Famed",
    "2 to 5 star",
    28, 8, 8, 8, 8, 
    8, 8, 8, 8, 8,
    0, 60, 30, 5, 1
)

const artemyFamed = new Crystal(
    "Artemy Famed",
    "2 to 5 star",
    8, 28, 8, 8, 8, 
    8, 8, 8, 8, 8,
    0, 60, 30, 5, 1
)

const anduinFamed = new Crystal(
    "Anduin Famed",
    "2 to 5 star",
    8, 8, 28, 8, 8, 
    8, 8, 8, 8, 8,
    0, 60, 30, 5, 1
)

const wrathionFamed = new Crystal(
    "Wrathion Famed",
    "2 to 5 star",
    8, 8, 8, 28, 8, 
    8, 8, 8, 8, 8,
    0, 60, 30, 5, 1
)

const aangFamed = new Crystal(
    "Aang Famed",
    "2 to 5 star",
    8, 8, 8, 8, 28, 
    8, 8, 8, 8, 8,
    0, 60, 30, 5, 1
)

const zukoFamed = new Crystal(
    "Zuko Famed",
    "2 to 5 star",
    8, 8, 8, 8, 8, 
    28, 8, 8, 8, 8,
    0, 60, 30, 5, 1
)

const etihwFamed = new Crystal(
    "Etihw Famed",
    "2 to 5 star",
    8, 8, 8, 8, 8, 
    8, 28, 8, 8, 8,
    0, 60, 30, 5, 1
)

const kcalbFamed = new Crystal(
    "Daniil Famed",
    "2 to 5 star",
    8, 8, 8, 8, 8, 
    8, 8, 28, 8, 8,
    0, 60, 30, 5, 1
)

const taakoFamed = new Crystal(
    "Taako Famed",
    "2 to 5 star",
    8, 8, 8, 8, 8, 
    8, 8, 8, 28, 8,
    0, 60, 30, 5, 1
)

const kravitzFamed = new Crystal(
    "Kravitz Famed",
    "2 to 5 star",
    8, 8, 8, 8, 8, 
    8, 8, 8, 8, 28,
    0, 60, 30, 5, 1
)

const famedCrystals= [
    daniilFamed,
    artemyFamed,
    anduinFamed,
    wrathionFamed,
    aangFamed,
    zukoFamed,
    etihwFamed,
    kcalbFamed,
    taakoFamed,
    kravitzFamed]

const crystalStoreDisplay = document.getElementById("crystalStoreDisplay");
let htmlContent = ""


for (let i = 0; i < famedCrystals.length; i++) {
    const crystalContiner = document.createElement('div');
    crystalContiner.innerHTML = `<p>${famedCrystals[i].name} Crystal</p><br>`;
    const button = document.createElement('button');
    button.textContent = "Buy"
    button.id = `btn-${i + 1}`;
    button.addEventListener('click', () => {
        openCrystal(crystalNumber1, crystalNumber2);
    });
    crystalContiner.appendChild(button);
    crystalStoreDisplay.appendChild(crystalContiner);
}

function getCharacterByRNG(crystalNumber1) {
    switch (true) {
        case (crystalNumber1 >= 1 && crystalNumber1 <= 10):
            return 'Daniil';
        case (crystalNumber1 >= 11 && crystalNumber1 <= 20):
            return 'Artemy';
        case (crystalNumber1 >= 21 && crystalNumber1 <= 30):
            return 'Anduin';
        case (crystalNumber1 >= 31 && crystalNumber1 <= 40):
            return 'Wrathion';
        case (crystalNumber1 >= 41 && crystalNumber1 <= 50):
            return 'Aang';
        case (crystalNumber1 >= 51 && crystalNumber1 <= 60):
            return 'Zuko';
        case (crystalNumber1 >= 61 && crystalNumber1 <= 70):
            return 'Etihw';
        case (crystalNumber1 >= 71 && crystalNumber1 <= 80):
            return 'Kcalb';
        case (crystalNumber1 >= 81 && crystalNumber1 <= 90):
            return 'Taako';
        case (crystalNumber1 >= 91 && crystalNumber1 <= 100):
            return 'Kravitz';
        default:
            return 'Unknown';
    }
}

function getRankByRNG(crystalNumber2) {
    switch (true) {
        case (crystalNumber2 >= 1  && crystalNumber2 <= 60):
            return 'One';
        case (crystalNumber2 >= 61 && crystalNumber2 <= 80):
            return 'Two';
        case (crystalNumber2 >= 81 && crystalNumber2 <= 95):
            return 'Three';
        case (crystalNumber2 >= 96 && crystalNumber2 <= 99):
            return 'Four';
        case (crystalNumber2 = 100):
            return 'Five';
        default:
            return 'Unknown';
    }
}

let crystalNumber1 = 0
let crystalNumber2 = 0

function openCrystal(crystalNumber1, crystalNumber2){
    crystalNumber1 = Math.floor(Math.random() * 100) + 1
    crystalNumber2 = Math.floor(Math.random() * 100) + 1
    console.log(crystalNumber1, crystalNumber2)
    let character = getCharacterByRNG(crystalNumber1);
    let rank = getRankByRNG(crystalNumber2);
    alert(`${rank} Star ${character}`)
}
    

