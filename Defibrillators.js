/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

function calcDistance(longtitudeA, latitudeA, longtitudeB, latitudeB) {
  longtitudeA = parseFloat(longtitudeA.replace(",", "."));
  longtitudeB = parseFloat(longtitudeB.replace(",", "."));
  latitudeA = parseFloat(latitudeA.replace(",", "."));
  latitudeB = parseFloat(latitudeB.replace(",", "."));

  let x = (longtitudeB - longtitudeA) * Math.cos((latitudeA + latitudeB) / 2);
  let y = latitudeB - latitudeA;

  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * 6371;
}

const LON = readline();
const LAT = readline();
const N = parseInt(readline());
let closest = 10000;
let descriptionOfClosest;

for (let i = 0; i < N; i++) {
  const DEFIB = readline();

  // Split DEFIB seperated by ";", [4] = Longitude, [5] = Latitude
  let defibSplit = DEFIB.split(";");
  let newDistance = calcDistance(LON, LAT, defibSplit[4], defibSplit[5]);

  if (N === 1) {
    descriptionOfClosest = defibSplit[1];
  } else if (newDistance < closest) {
    closest = newDistance;
    descriptionOfClosest = defibSplit[1];
  }
}

// Write an action using console.log()
// To debug: console.error('Debug messages...');

console.log(descriptionOfClosest);
