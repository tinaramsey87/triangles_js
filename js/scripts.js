var randomSide = function(min, max) {
  var number = Math.floor(Math.random() * (max - min) + min);
    return number;
};

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


$(document).ready(function() {
  $("form#triangle-tester").submit(function(event) {
    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());
    var result = triangle(sideA, sideB, sideC);

    $(".sideA").text(sideA);
    $(".sideB").text(sideB);
    $(".sideC").text(sideC);


    $("#result").show();

    if (result === "eqilateral") {
      $("#tri-yes").show();
      $("#tri-no").hide();
      $(".tri-type").text(result)
    }

    if (result === "isosceles") {
      $("#tri-yes").show();
      $("#tri-no").hide();
      $(".tri-type").text(result)
    }

    if (result === "scalene") {
      $("#tri-yes").show();
      $("#tri-no").hide();
      $(".tri-type").text(result)
    }

    if (!result) {
      $("#tri-no").show();
      $("#tri-yes").hide();
    }
    event.preventDefault();
  });


  $("form#random-triangulation").submit(function(event) {
    var sideA = (randomSide(1, 100));
    var sideB = (randomSide(1, 100));
    var sideC = (randomSide(1, 100));
    var result = triangle(sideA, sideB, sideC);

    $(".sideA").text(sideA);
    $(".sideB").text(sideB);
    $(".sideC").text(sideC);


    $("#result").show();

    if (result === "eqilateral") {
      $("#tri-yes").show();
      $("#tri-no").hide();
      $(".tri-type").text(result)
    }

    if (result === "isosceles") {
      $("#tri-yes").show();
      $("#tri-no").hide();
      $(".tri-type").text(result)
    }

    if (result === "scalene") {
      $("#tri-yes").show();
      $("#tri-no").hide();
      $(".tri-type").text(result)
    }

    if (!result) {
      $("#tri-no").show();
      $("#tri-yes").hide();
    }
    event.preventDefault();
  });

});
