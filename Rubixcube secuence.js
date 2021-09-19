var prev = null;

function makeScramble() {
    var options = [["R", "R'", "R2", ], ["L", "L'", "L2", ], ["U", "U'", "U2", ], ["D", "D'", "D2", ], ["F", "F'", "F2", ], ["B", "B'", "B2", ], ];
    var scramble = [];

    for (var i = 0; i < 21; i++) {
        succses = false;
        while (succses == false) {
            if (i == 0) {
                var prev = getRandomInt(6);
                succses = true;
            } else {
                var int = getRandomInt(6);
            
                if (int != prev) {
                    var prev = int;
                    succses = true;
                }
            }
            succses = true;
        }
        scramble.push(options[prev][getRandomInt(3)]);
    }

    document.getElementById('scramble').innerHTML = scramble;
}

function getRandomInt(max, last=0, section=false) {
    return Math.floor(Math.random() * Math.floor(max));
}

function newRandom() {
    
}