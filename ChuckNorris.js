const MESSAGE = readline();

let encoded = "";

function getCharAsBinary(char) {
  let bin = char.charCodeAt(0).toString(2);

  if (bin.length < 7) {
    for (let i = bin.length; i < 7; i += 1) {
      bin = "0" + bin;
    }
  }
  return bin;
}

for (let i = 0; i < MESSAGE.length; i += 1) {
  encoded += getCharAsBinary(MESSAGE[i]);
}

let encodedMessage = "";

for (let i = 0; i < encoded.length; i += 1) {
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
    } else {
      encodedMessage += "0 ";
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
