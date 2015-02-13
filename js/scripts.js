var triangle = function(sideA, sideB, sideC) {

  if ((sideA + sideB <= sideC) || (sideB + sideC <= sideA) || sideC + sideA <= sideB) {
    return false;
  } if ((sideA === sideB) && (sideB === sideC)) {
    return "eqilateral";
  } if ((sideA === sideB) || (sideB === sideC) || (sideA === sideC)) {
    return "isosceles";
  } else {
    return "scalene";
  }
};

$(document.ready(function(){

});
