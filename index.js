// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if (distance < 42) {
    return 42 % distance;
} else {
    return distance  % 42;
}
}
// let answer;
// distance > 42 ? answer = distance  % 42 : answer = 42 % distance;
