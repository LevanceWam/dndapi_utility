const util = require('../src/util');
const expect = require('chai').expect;

describe('dndapi_test', () => {
  it('Testing for null', (done) => {
    expect(util.debug).to.not.equal(null);
    done();
  });

// This is to test to see if the bumper works
  util.dndBumper('1.0.0', 'major');
  util.dndBumper('1.1.0', 'minor');
  util.dndBumper('1.0.1', 'patch');
});
