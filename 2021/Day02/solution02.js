function calculateMeasurements() {
  const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./2021/Day02/submarine.txt'),
  });

  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  lineReader.on('line', function (movement) {
    const instructions = movement.split(' ');
    if (instructions[0] === 'forward') {
      horizontal = horizontal + parseInt(instructions[1]);
      depth = depth + aim * parseInt(instructions[1]);
    } else if (instructions[0] === 'down') {
      aim = aim + parseInt(instructions[1]);
    } else if (instructions[0] === 'up') {
      aim = aim - parseInt(instructions[1]);
    }
  });

  lineReader.on('close', () => {
    console.log(`Horizontal -> ${horizontal}`);
    console.log(`Depth -> ${depth}`);
    console.log(`Answer -> ${horizontal * depth}`);
  });
}

calculateMeasurements();
