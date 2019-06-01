/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const MESSAGE = readline();

// Write an action using console.log()
// To debug: console.error('Debug messages...');

let encoded = "";

for (let i = 0; i < MESSAGE.length; i += 1) {
  encoded += MESSAGE[i].charCodeAt(0).toString(2);
}

encoded = "0" + encoded;

console.error(encoded);

let encodedMessage = "";

for (let i = 0; i < encoded.length - 1; i += 1) {
  console.error(encodedMessage);
  let doneLooking = false;
  if (encoded[i] == "0") {
    encodedMessage += "00 ";
    if (encoded[i + 1] == "0") {
      i += 1;
      let amountOfDuplicates = 1;
      for (let j = i + 1; j < encoded.length && !doneLooking; j += 1) {
        if (encoded[j] == "0") {
          amountOfDuplicates += 1;
          i += 1;
        } else {
          doneLooking = true;
        }
      }

      let stringToAdd = "0";

      for (let j = 0; j < amountOfDuplicates; j += 1) {
        stringToAdd += "0";
      }

      encodedMessage += stringToAdd + " ";
    }
  } else {
    encodedMessage += "0 ";

    if (encoded[i + 1] == "1") {
      i += 1;
      let amountOfDuplicates = 1;
      for (let j = i + 1; j < encoded.length && !doneLooking; j += 1) {
        if (encoded[j] == "1") {
          amountOfDuplicates += 1;
          i += 1;
        } else {
          doneLooking = true;
        }
      }

      let stringToAdd = "0";

      for (let j = 0; j < amountOfDuplicates; j += 1) {
        stringToAdd += "0";
      }

      encodedMessage += stringToAdd + " ";
    } else {
      encodedMessage += "0 ";
    }
  }
}

console.log(encodedMessage.trimRight());
