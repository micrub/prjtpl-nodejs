import baseModule from "../src/index"

let {sayHello, d} = baseModule

describe('index test', function() {
  it('should have `d` Function property', function() {
    expect(d).to.be.an.instanceOf(Function);
  });
  it('should have`sayHello` Function property', function() {
    expect(sayHello).to.be.an.instanceOf(Function);
  });
});
