const fs = require("fs");

function sumCalibrationValues(document) {
  const lines = document.split("\n");
  let sum = 0;

  lines.forEach((line) => {
    const firstDigit = line.match(/\d/);
    const lastDigit = line.match(/\d(?=[^\d]*$)/);

    if (firstDigit && lastDigit) {
      sum += parseInt(firstDigit[0] + lastDigit[0], 10);
    }
  });

  return sum;
}

// Replace 'calibration.txt' with the path to your file
const filePath = "calibration.txt";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  console.log(sumCalibrationValues(data));
});
