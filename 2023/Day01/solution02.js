const fs = require("fs");

function sumCalibrationValues(document) {
  const numbersSpelledOutWithLetters = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  return document
    .split("\n")
    .map((line) => {
      let charactersDigits = [];
      let temporary = "";

      for (let character of line) {
        temporary += character;

        let temporarySpelledNumberIndex = null;
        numbersSpelledOutWithLetters.forEach((spelledNumber, index) => {
          if (temporary.includes(spelledNumber)) {
            temporarySpelledNumberIndex = index;
          }
        });

        if (temporarySpelledNumberIndex !== null) {
          charactersDigits.push(
            (temporarySpelledNumberIndex + 1).toString()[0]
          );
          temporary = character;
        }

        if (!isNaN(character) && character.trim() !== "") {
          charactersDigits.push(character);
          temporary = "";
        }
      }

      const firstDigit =
        charactersDigits.length > 0 ? charactersDigits[0] : "0";
      const lastDigit =
        charactersDigits.length > 0
          ? charactersDigits[charactersDigits.length - 1]
          : "0";
      return parseInt(firstDigit + lastDigit);
    })
    .reduce((acc, val) => acc + val, 0);
}

// Read the file and process it
const filePath = "calibration.txt"; // Ensure this path is correct in your environment

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  console.log("The sum of calibration values is:", sumCalibrationValues(data));
});
