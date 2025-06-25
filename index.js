// Code your solution in this file!// Scuber HQ is located on 42nd Street
const hqStreet = 42;

// 1. Returns the number of blocks from Scuber HQ to the pickup location
function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - hqStreet);
}

// 2. Returns the number of feet from Scuber HQ to the pickup location
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

// 3. Calculates feet travelled from start to destination (uptown/downtown)
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// 4. Calculates fare based on distance travelled
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}


