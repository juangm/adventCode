const fs = require("fs");

function sumPossibleGameIds(input) {
  const maxCubes = { red: 12, green: 13, blue: 14 };
  const games = input.split("\n");

  let sumOfIds = 0;
  games.forEach((game) => {
    const parts = game.split(": ");
    const gameId = parseInt(parts[0].split(" ")[1]);
    const rounds = parts[1].split("; ");

    let isPossible = true;
    rounds.forEach((round) => {
      const counts = round.split(", ").map((cubeInfo) => {
        const [count, color] = cubeInfo.split(" ");
        return { color, count: parseInt(count) };
      });

      counts.forEach(({ color, count }) => {
        if (count > maxCubes[color]) {
          isPossible = false;
        }
      });
    });

    if (isPossible) {
      sumOfIds += gameId;
    }
  });

  return sumOfIds;
}

// Read and process the input file
fs.readFile("cube.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  console.log("Sum of possible game IDs:", sumPossibleGameIds(data));
});
