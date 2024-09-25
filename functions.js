// Rank 1 = 50 shards
// Rank 2 = 100 shards    (2 rank 1)
// Rank 3 = 500 shards    (5 rank 2, 10 rank 1)
// Rank 4 = 1500 shards   (3 rank 3, 15 rank 2, 30 rank 1)
// Rank 5 = 3000 shards   (2 rank 4, 6 rank 3, 30 rank 2, 60 rank 1)
// Any shards gathered for Rank 5 character become shard count gold x 10 (50shards = 500gold...)

// Diamonds  (All)   :  Small  :  Regular :  Large  :  Giant
// Ruby      (Cla)   :  Small  :  Regular :  Large  :  Giant
// Sapphire  (Cla)   :  Small  :  Regular :  Large  :  Giant
// Emerald   (Cla)   :  Small  :  Regular :  Large  :  Giant
// Topaz     (Cla)   :  Small  :  Regular :  Large  :  Giant

// Tier 1   :  1   - 10   :  N/A
// Tier 2   :  10  - 20   :  Small(All x 1) 
// Tier 3   :  20  - 30   :  Small(All x 3)   +  Small(Cla x 1)
// Tier 4   :  30  - 40   :  Regular(All x 1) +  Small(Cla x 3)
// Tier 5   :  40  - 50   :  Regular(All x 3) +  Regular(Cla x 1)  + Small(Cla x 3)
// Tier 6   :  50  - 60   :  Large(All x 1)   +  Regular(Cla x 3)  + Small(Cla x 5)
// Tier 7   :  60  - 70   :  Large(All x 3)   +  Large(Cla x 1)    + Regular(Cla x 3)
// Tier 8   :  70  - 80   :  Giant(All x 1)   +  Large(Cla x 3)    + Regular(Cla x 5)
// Tier 9   :  80  - 90   :  Giant(All x 3)   +  Giant(Cla x 1)    + Large(Cla x 3)
// Tier 10  :  90  - 100  :  Giant(All x 5)   +  Giant(Cla x 3)    + Large(Cla x 5)

// Attack Formulas:
//     Rank 1 = 100
//     Rank 2 = 200
//     Rank 3 = 300
//     Rank 4 = 400
//     Rank 5 = 500
//     Level increases it 20 * per level: Ex: Level 40 is 40*20 = 800
//     Rank 5 at 100 should be 5000. 
//     500 + 100*20 = 2500
//     Talents boost characters up to 2x...meaning they're 5000 if Talents/Rank/Level maxxed.


function calculateAttack() {
    attack = Guardian.rank * attack + Guardian.level * 20
}
