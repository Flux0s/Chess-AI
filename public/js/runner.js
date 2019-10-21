let start = require('./main.js');

let gameSets = [
  { white: 1, black: 1 },
  { white: 2, black: 1 },
  { white: 3, black: 1 }
];

let numTrials = 10;

for (let i = 0; i < numTrials; i++) {
  gameSets.forEach((game) => {
    start.playGame(4, 4, game.white, game.black);
  });
}
