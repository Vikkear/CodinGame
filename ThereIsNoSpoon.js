const width = parseInt(readline()); // the number of cells on the X axis
const height = parseInt(readline()); // the number of cells on the Y axis

let lineArr = [];
for (let i = 0; i < height; i++) {
  const line = readline(); // width characters, each either 0 or .
  lineArr[i] = line;
}

lineArr[height] = "";

let x1, x2, x3; // X coordinates used
let y1, y2, y3; // Y coordinates used
let amountOfNodes = 0;
let map = {};

// Get amount of nodes
lineArr
  .join("")
  .split("")
  .forEach(e => (map[e] = (map[e] || 0) + 1));

amountOfNodes = map[0];

for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    if (lineArr[i][j] == "0") {
      x1 = j;
      y1 = i;

      // Check for neighbor in the X axis
      let isFoundX = false;
      for (
        let checkForNeighbor = x1;
        checkForNeighbor < width && !isFoundX;
        checkForNeighbor++
      ) {
        if (lineArr[i][checkForNeighbor + 1] == "0") {
          y2 = i;
          x2 = checkForNeighbor + 1;
          isFoundX = true;
        }
      }

      if (!isFoundX) {
        x2 = -1;
        y2 = -1;
      }

      // Check for neighbor in the Y axis
      let isFoundY = false;
      for (
        let checkForNeighbor = y1;
        checkForNeighbor < height && !isFoundY;
        checkForNeighbor++
      ) {
        if (lineArr[checkForNeighbor + 1][j] == "0") {
          console.error("knas");
          y3 = checkForNeighbor + 1;
          x3 = j;
          isFoundY = true;
        }
      }

      if (!isFoundY) {
        x3 = -1;
        y3 = -1;
      }

      console.log(`${x1} ${y1} ${x2} ${y2} ${x3} ${y3}`);
    }
  }
}

// Three coordinates: a node, its right neighbor, its bottom neighbor
