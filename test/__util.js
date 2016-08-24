const util = require('../src/util');
const expect = require('chai').expect;

describe('dndapi_test', () => {

  it('Testing for null', (done) => {
    expect(util.debug).to.not.equal(null);
    done();
  });

});
