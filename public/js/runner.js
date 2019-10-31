let start = require("./main.js");
const MINIMAX = 4;
const numTrials = 2;
const evaluationFunctions = [2, 1];
const gameSets = [
  {
    name: "White Depth 1 versus 1",
    settings: {
      whiteAlgo: MINIMAX,
      blackAlgo: MINIMAX,
      whiteDepth: 1,
      blackDepth: 1
    }
  },
  {
    name: "White Depth 2 versus 1",
    settings: {
      whiteAlgo: MINIMAX,
      blackAlgo: MINIMAX,
      whiteDepth: 2,
      blackDepth: 1
    }
  },
  {
    name: "White Depth 3 versus 1",
    settings: {
      whiteAlgo: MINIMAX,
      blackAlgo: MINIMAX,
      whiteDepth: 3,
      blackDepth: 1
    }
  },
  {
    name: "White Depth 2 versus 2",
    settings: {
      whiteAlgo: MINIMAX,
      blackAlgo: MINIMAX,
      whiteDepth: 2,
      blackDepth: 2
    }
  },
  {
    name: "White Depth 3 versus 2",
    settings: {
      whiteAlgo: MINIMAX,
      blackAlgo: MINIMAX,
      whiteDepth: 3,
      blackDepth: 2
    }
  }
];

evaluationFunctions.forEach((evaluationFunction) => {
  console.log(
    "Running tests with black evaluation function = " + evaluationFunction
  );
  gameSets.forEach((gameSet) => {
    console.log(
      "     Starting trials for the following game set:\n\t'" +
        gameSet.name +
        "'"
    );
    let whiteWins = 0;
    for (i = 0; i < numTrials; i++) {
      let startTime = new Date().getTime();
      let winner = start.playGame(
        gameSet.settings.whiteAlgo,
        gameSet.settings.blackAlgo,
        gameSet.settings.whiteDepth,
        gameSet.settings.blackDepth,
        1,
        evaluationFunction
      );
      let gameTime = (new Date().getTime() - startTime) / 1000;
      console.log("\tGame took " + gameTime + " seconds.");
      if (winner === "White") whiteWins++;
    }
    console.log(
      "     White won " + whiteWins + " out of " + numTrials + " times.\n"
    );
  });
});
