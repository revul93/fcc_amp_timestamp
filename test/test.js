const assert = require('assert');
const timestamp = require('../timestamp');

describe('Timestamp', () => {
    describe('No date passed', () => {
        const currentUnix = Date.now();
        const currentGMT = new Date(currentUnix).toGMTString();

        const result = timestamp();
        it(`Expected unix to equal ${currentUnix}`, () => {
            assert.strictEqual(
                true,
                Math.abs(result.unix - currentUnix) < 1000,
            );
        });
        it(`Expected unix to equal ${currentGMT}`, () => {
            assert.strictEqual(result.utc, currentGMT);
        });
    });

    describe('date = unix time', () => {
        const result = timestamp(1451001600000);

        it(`Expected ${result.unix} to equal ${1451001600000}`, () => {
            assert.strictEqual(result.unix, 1451001600000);
        });
        it(`Expected ${result.utc} to equal "Fri, 25 Dec 2015 00:00:00 GMT"`, () => {
            assert.strictEqual(result.utc, 'Fri, 25 Dec 2015 00:00:00 GMT');
        });
    });

    describe('date = timestamp', () => {
        const result = timestamp('2015-12-25');

        it(`Expected ${result.unix} to equal ${1451001600000}`, () => {
            assert.strictEqual(result.unix, 1451001600000);
        });
        it(`Expected ${result.utc} to equal "Fri, 25 Dec 2015 00:00:00 GMT"`, () => {
            assert.strictEqual(result.utc, 'Fri, 25 Dec 2015 00:00:00 GMT');
        });
    });

    describe('Invalid date', () => {
        const result = timestamp('2015-25-12');

        it(`Expected Invalid date error`, () => {
            assert.strictEqual(result.error, 'Invalid date');
        });
    });
});
