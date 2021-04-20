function makeScramble() {
    var options = ["F", "R", "U", "B", "L", "D", "F2", "R2", "U2", "B2", "L2", "D2", "F'", "R'", "U'", "B'", "L'", "D'"];
    var scramble = [];

    for (var i = 0; i < 21; i++) {
        scramble.push(options[getRandomInt(18)]);
    }

    document.getElementById('scramble').innerHTML = scramble;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
