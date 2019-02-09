const i = require('../src/');

describe('index test', function() {
  it('should have `d` Function property', function() {
    expect(i.d).to.be.an.instanceOf(Function);
  });
});
