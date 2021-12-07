function calculateMeasurements() {
  const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./Day01/measurements.txt'),
  });
  let total = -1;
  let limit = 0;
  lineReader.on('line', function (measure) {
    if (parseInt(measure) > limit) {
      total = total + 1;
    }
    limit = parseInt(measure);
  });
  lineReader.on('close', () => {
    console.log(`How many measurements are larger than the previous measurement? -> ${total}`);
  });
}

calculateMeasurements();
