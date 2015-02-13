var triangle = function(sideA, sideB, sideC) {

  if (sideA + sideB <= sideC) {
    return false;
  } if ((sideA + sideB + sideC)% 3 === 0) {
    return "eqilateral";
  } if ((sideA + sideB + sideC)% 3 === 0) {
    return "eqilateral";
  } if ((sideA === sideB) || (sideB === sideC) || (sideA === sideC)) {
    return "isosceles";
  } else {
    return "scalene";
  }
};
