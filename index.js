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
