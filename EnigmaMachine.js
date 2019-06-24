const operation = readline();
let pseudoRandomNumber = parseInt(readline());
let rotorArr = [];
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i = 0; i < 3; i++) {
  const rotor = readline();
  rotorArr[i] = rotor;
  console.error(rotor);
}

const message = readline();
let messageAlphabet = "";
let messageRotor;

console.error(pseudoRandomNumber);
console.error(message);
console.error(alphabet);

if (operation === "ENCODE") {
  for (let i = 0; i < message.length; i += 1) {
    let index = alphabet.indexOf(message[i]);
    let secondIndex = index + pseudoRandomNumber;
    if (secondIndex >= 26) {
      secondIndex -= 26;
    }

    messageAlphabet += alphabet[secondIndex];
    pseudoRandomNumber += 1;

    if (pseudoRandomNumber >= 26) {
      pseudoRandomNumber = 0;
    }
  }

  messageRotor = messageAlphabet;

  for (let i = 0; i < rotorArr.length; i += 1) {
    let messageConverted = "";

    for (let j = 0; j < messageRotor.length; j += 1) {
      let index = alphabet.indexOf(messageRotor[j]);

      messageConverted += rotorArr[i][index];
    }

    messageRotor = messageConverted;
  }
} else {
  // Ta bokstaven från det du vill decodea
  // Gå igenom rotar arrayen baklänges
  // Ta indexet från rotararrayen där bokstaven är
  // Hämta ut samma bokstav ifrån alfabetet
  // Loopa 3 gånger
  // Backa X antal gånger beroende på pseudonumret
  messageRotor = message;

  for (let i = rotorArr.length - 1; i >= 0; i -= 1) {
    let messageConverted = "";

    for (let j = message.length - 1; j >= 0; j -= 1) {
      let index = rotorArr[i].indexOf(messageRotor[j]);
      messageConverted += alphabet[index];
    }
    console.error("Converted: ", messageConverted);
    messageRotor = messageConverted;
  }

  pseudoRandomNumber += messageRotor.length - 1;

  for (let i = 0; i < messageRotor.length; i += 1) {
    let index = alphabet.indexOf(messageRotor[i]);
    let secondIndex = index - pseudoRandomNumber;

    if (secondIndex < 0) {
      secondIndex += 26;
    }

    messageAlphabet += alphabet[secondIndex];
    pseudoRandomNumber += 1;

    if (pseudoRandomNumber < 0) {
      pseudoRandomNumber = 26;
    }
  }

  console.error(messageAlphabet);
}

console.log(messageRotor);
