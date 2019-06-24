let r1 = parseInt(readline());
let r2 = parseInt(readline());
let isEqual = false;
let answer = "";

while (!isEqual) {
  // If r1 < r2 --> increase r1
  if (r1 < r2) {
    let r1ToString = r1.toString();
    let r1Sum = 0;

    for (let i = 0; i < r1ToString.length; i += 1) {
      r1Sum += parseInt(r1ToString[i], 10);
    }
    r1 += r1Sum;
  }
  // If r1 > r2 --> Increase r2
  else if (r1 > r2) {
    let r2ToString = r2.toString();
    let r2Sum = 0;

    for (let i = 0; i < r2ToString.length; i += 1) {
      r2Sum += parseInt(r2ToString[i], 10);
    }

    r2 += r2Sum;
  }

  // The rivers have met each other
  else {
    isEqual = true;
    answer = r1;
  }
}

console.log(answer);
