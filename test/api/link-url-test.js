var unittest = require('reut');

var settings = require('../testsettings');

var testNo = 0;
function logTest(test) {
	console.log('TEST #%d: %s', ++testNo, test.desc);
}

unittest.suite('link')
        .startup(function (fixture, done) {
        	// Called before EVERY test begins.
        	fixture.module = require('../../src/services/link');
        	fixture.urls = require('../../src/services/urls');
        	done();
        })
        .test('makeUrl', function (test, fixture) {
        	logTest(test);

        	var result = fixture.module.makeUrl('abc', '123', 'foo');

        	test.equal(result, fixture.urls.linkPath + '?token=abc&mid=123&murl=foo');
        })
        ;