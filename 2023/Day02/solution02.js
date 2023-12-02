const fs = require("fs");

function sumOfMinimumCubeSetPowers(input) {
  const games = input.split("\n");

  let totalPower = 0;
  games.forEach((game) => {
    const rounds = game.split(": ")[1].split("; ");
    let minCubes = { red: 0, green: 0, blue: 0 };

    rounds.forEach((round) => {
      const counts = round.split(", ").reduce((acc, cubeInfo) => {
        const [count, color] = cubeInfo.split(" ");
        acc[color] = Math.max(acc[color] || 0, parseInt(count));
        return acc;
      }, {});

      minCubes.red = Math.max(minCubes.red, counts.red || 0);
      minCubes.green = Math.max(minCubes.green, counts.green || 0);
      minCubes.blue = Math.max(minCubes.blue, counts.blue || 0);
    });

    const power = minCubes.red * minCubes.green * minCubes.blue;
    totalPower += power;
  });

  return totalPower;
}

// Read and process the input file
fs.readFile("cube.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  console.log(
    "Sum of the power of minimum cube sets:",
    sumOfMinimumCubeSetPowers(data)
  );
});
