let start = require("./main.js");
const verboseLogging = false;
const MINIMAX = 4;
const numTrials = 20;
const evaluationFunctions = [1, 2];
const gameSets = [
  {
    name: "White Depth 1 versus Black Depth 1",
    settings: {
      whiteAlgo: MINIMAX,
      blackAlgo: MINIMAX,
      whiteDepth: 1,
      blackDepth: 1
    }
  },
  {
    name: "White Depth 2 versus Black Depth 1",
    settings: {
      whiteAlgo: MINIMAX,
      blackAlgo: MINIMAX,
      whiteDepth: 2,
      blackDepth: 1
    }
  },
  {
    name: "White Depth 3 versus Black Depth 1",
    settings: {
      whiteAlgo: MINIMAX,
      blackAlgo: MINIMAX,
      whiteDepth: 3,
      blackDepth: 1
    }
  },
  {
    name: "White Depth 2 versus Black Depth 2",
    settings: {
      whiteAlgo: MINIMAX,
      blackAlgo: MINIMAX,
      whiteDepth: 2,
      blackDepth: 2
    }
  },
  {
    name: "White Depth 3 versus Black Depth 2",
    settings: {
      whiteAlgo: MINIMAX,
      blackAlgo: MINIMAX,
      whiteDepth: 3,
      blackDepth: 2
    }
  }
];

gameSets.forEach((gameSet) => {
  console.log(
    "Running " +
      numTrials +
      " trials for the following game set:\n'" +
      gameSet.name +
      "'\n"
  );
  evaluationFunctions.forEach((evaluationFunction) => {
    console.log(
      "   Running tests with black evaluation function = " +
        evaluationFunction
    );
    let whiteWins = 0;
    let totalGameLengths = 0;
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
      if (verboseLogging) {
        console.log("\tGame Over " + winner + " wins!");
        console.log("\t  Game took " + gameTime + " seconds.");
      }
      if (winner === "White") whiteWins++;
      totalGameLengths += gameTime;
    }
    console.log(
      "\n     White won " + whiteWins + " out of " + numTrials + " times."
    );
    console.log(
      "     Games took an average of " +
        totalGameLengths / numTrials +
        " seconds.\n"
    );
  });
});
