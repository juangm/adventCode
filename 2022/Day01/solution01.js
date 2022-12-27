function calculateCalories() {
  const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./2022/Day01/calories.txt'),
  });
  let totalCalories = [];
  let tempCalories = 0;
  lineReader.on('line', function (cal) {
    if (cal === '') {
      totalCalories.push(tempCalories);
      tempCalories = 0;
    } else {
      tempCalories += parseFloat(cal);
    }
  });
  // Sort array
  lineReader.on('close', () => {
    const sortCalories = totalCalories.sort((a, b) => b - a);
    console.log(`First Elf with most calories -> ${sortCalories[0]}`);
    console.log(`Second Elf with most calories -> ${sortCalories[1]}`);
    console.log(`Thirds Elf with most calories -> ${sortCalories[2]}`);
    console.log(`Fourth Elf with most calories -> ${sortCalories[3]}`);
    console.log(`Total -> ${sortCalories[0] + sortCalories[1] + sortCalories[2]}`);
  });
}

calculateCalories();
