/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(" ");
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(" ");
let X0 = parseInt(inputs[0]);
let Y0 = parseInt(inputs[1]);

let WMAX = W; // Maximum Width that batman can jump to
let WMIN = 0; // Minimum Width that batman can jump to
let HMAX = H; // Maximum Height that batman can jump to
let HMIN = 0; // Minimum Height that batman can jump to

// game loop
while (true) {
  const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

  if (bombDir === "U") {
    HMAX = Y0;
    Y0 -= parseInt((Y0 - HMIN) / 2, 10);
  }

  if (bombDir === "UR") {
    WMIN = X0;
    HMAX = Y0;

    X0 += parseInt((WMAX - X0) / 2, 10);
    Y0 -= parseInt((Y0 - HMIN) / 2, 10);
  }

  if (bombDir === "R") {
    WMIN = X0;

    X0 += parseInt((WMAX - X0) / 2, 10);
  }

  if (bombDir === "DR") {
    WMIN = X0;
    HMIN = Y0;

    X0 += parseInt((WMAX - X0) / 2, 10);
    Y0 += parseInt((HMAX - Y0) / 2, 10);
  }

  if (bombDir === "D") {
    HMIN = Y0;
    Y0 += parseInt((HMAX - Y0) / 2, 10);
  }

  if (bombDir === "DL") {
    HMIN = Y0;
    WMAX = X0;
    X0 -= parseInt((X0 - WMIN) / 2, 10);
    Y0 += parseInt((HMAX - Y0) / 2, 10);
  }

  if (bombDir === "L") {
    WMAX = X0;
    X0 -= parseInt((X0 - WMAX) / 2, 10);
  }

  if (bombDir === "UL") {
    HMAX = Y0;
    WMAX = X0;

    console.error("WMAX: ", WMAX);
    console.error("X0: ", X0);

    if (HMAX === Y0 || WMAX === X0) {
      if (HMAX === Y0 && WMAX === X0) {
        X0 = 0;
        Y0 = 0;
      } else if (HMAX === Y0) {
        X0 -= parseInt((WMAX - X0) / 2, 10);
        Y0 = 0;
      } else {
        X0 = 0;
        Y0 -= parseInt((Y0 - HMAX) / 2, 10);
      }
    } else {
      X0 -= parseInt((WMAX - X0) / 2, 10);
      Y0 -= parseInt((Y0 - HMAX) / 2, 10);
    }
  }

  // the location of the next window Batman should jump to.
  console.log(X0 + " " + Y0);
}
