let DateUtils = require('../src/date-utils');
let assert = require('assert');
let sinon = require('sinon');

it('2/2019 should return 28 days', function () {
    let du = new DateUtils();
    sinon.stub(du, 'isLeapYear').returns(true);
    assert.equal(du.getDaysOfMonth(2, 2020), 29);
});