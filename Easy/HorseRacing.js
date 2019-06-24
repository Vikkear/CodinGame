/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
let horseArr = [];
let smallestDiff = 10000000;

for (let i = 0; i < N; i++) {
  const pi = parseInt(readline());
  horseArr[i] = pi;
}

horseArr.sort(function(a, b) {
  return a - b;
});

for (let i = 0; i < N; i++) {
  if (horseArr[i + 1] - horseArr[i] < smallestDiff) {
    smallestDiff = horseArr[i + 1] - horseArr[i];
  }
}

console.log(smallestDiff);
