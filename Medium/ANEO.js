const speed = parseInt(readline());
const lightCount = parseInt(readline());
const distanceList = {};
const durationList = {};

for (let i = 0; i < lightCount; i++) {
  var inputs = readline().split(" ");
  const distance = parseInt(inputs[0]);
  const duration = parseInt(inputs[1]);

  distanceList[i] = distance;
  durationList[i] = duration;
}

console.error("Speed: ", speed);
console.error("Lightcount: ", lightCount);
console.error("DistanceList: ", distanceList);
console.error("DurationList: ", durationList);

// Converts km/h to m/s
function convertToDistancePerSeconds(speed) {
  return speed / 3.6;
}

// Sort list to find out maximum time
let sortedDurationList = [];
for (let i = 0; i < lightCount; i++) {
  sortedDurationList[i] = durationList[i];
}

sortedDurationList.sort(function(a, b) {
  return b - a;
});
let maximumTime = sortedDurationList[0];

// Check speed limit
if (convertToDistancePerSeconds(speed) * durationList[0] > distanceList[0]) {
  console.log(speed);
}
