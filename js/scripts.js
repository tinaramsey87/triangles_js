var triangle = function(sideA, sideB, sideC) {
  
  if (sideA + sideB <= sideC) {
    return false;
  }

  if ((sideA + sideB + sideC)% 3 === 0) {
    return "eqilateral";
  }

};
