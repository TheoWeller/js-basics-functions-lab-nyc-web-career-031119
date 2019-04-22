// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if (distance < 42) {
    return 42 % distance;
} else {
    return distance  % 42;
  }
};

function distanceFromHqInFeet(distance) {
return distanceFromHqInBlocks(distance) * 264;
};

function distanceTravelledInFeet(arg1, arg2) {
  if (arg1 < arg2) {
    return arg2 % arg1 * 264;
} else {
    return arg1 % arg2 * 264;
  }
};

function calculatesFarePrice(start, destination) {
  const distance_travelled = distanceFromHqInFeet(start, destination)

  switch (distance_travelled) {
    case: distance_travelled < 400;
      return 0;
      break;
    case: distance_travelled > 400 && distance_travelled < 2000;
      return (distance_travelled - 400) * 0.2;
      break;
    case: distance_travelled > 2000 && distance_travelled < 2500;
      return 25;
      break;
    case: distance_travelled > 2500;
      return 'cannot travel that far';
      break;

  }
};
