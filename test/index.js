var roundTo = require('../');

describe('round-to', function() {

	// round to 2 decimal places
	it('should return two decimal places', function(done) {
		var node = roundTo(12.12345,2); 
		var value = '12.12';
		
		node.should.equal(value);
		done();
	});

});