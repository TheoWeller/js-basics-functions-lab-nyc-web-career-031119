// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  let answer;
  distance > 42 ? answer = distance  % 42 : answer = 42 % distance;
};
