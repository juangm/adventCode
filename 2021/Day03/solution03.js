function binaryDiagnostic() {
  const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./2021/Day03/measures.txt'),
  });

  let binary = {
    num_1: '',
    num_2: '',
    num_3: '',
    num_4: '',
    num_5: '',
    num_6: '',
    num_7: '',
    num_8: '',
    num_9: '',
    num_10: '',
    num_11: '',
    num_12: '',
  };

  lineReader.on('line', function (number) {
    let index = 0;
    // Group the bits
    for (let elem in binary) {
      binary[elem] += number[index];
      index += 1;
    }
  });

  lineReader.on('close', () => {
    // Calculate the most common bit
    let commonBits = '';
    let lessBits = '';
    for (let elem in binary) {
      // Number of 0
      const count0 = binary[elem].split('0').length - 1;
      const totalLength = binary[elem].length / 2;
      if (count0 > totalLength) {
        commonBits += '0';
        lessBits += '1';
      } else {
        commonBits += '1';
        lessBits += '0';
      }
    }
    console.log(`Most common bits -> ${commonBits}`);
    console.log(`Less common bits -> ${lessBits}`);
    console.log(`Gamma rate -> ${parseInt(commonBits, 2)}`);
    console.log(`Epsilon rate -> ${parseInt(lessBits, 2)}`);
    console.log(`Power consumption of the submarine -> ${parseInt(lessBits, 2) * parseInt(commonBits, 2)}`);
  });
}

binaryDiagnostic();
