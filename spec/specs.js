describe("triangle", function() {
  it("returns false if side a + side b is less than or equal to side c", function() {
    expect(triangle(1, 2, 3)).to.equal(false)
  });

  it("returns eqilateral if all sides are the same length", function() {
    expect(triangle(3, 3, 3)).to.equal("eqilateral")
  });


});
