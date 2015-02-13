describe("triangle", function() {
  it("returns false if side a + side b is less than or equal to side c", function() {
    expect(triangle(3, 2, 1)).to.equal(false)
  });

  it("returns eqilateral if all sides are the same length", function() {
    expect(triangle(3, 3, 3)).to.equal("eqilateral")
  });

  it("returns isosceles if exactly two sides are equal length", function() {
    expect(triangle(5, 5, 7)).to.equal("isosceles")
  })

  it("returns scalene if all three sides are of different length", function() {
    expect(triangle(5, 7, 9)).to.equal("scalene")
  });
});
