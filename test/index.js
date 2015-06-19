var roundto = require('../');

describe('round-to', function() {

	// round to 2 decimal places
	it('should return two decimal places', function(done) {
		var node = roundto(12.12345,2); 
		var value = 12.12;
		
		node.should.equal(value);
		done();
	});

	// round to 3 decimal places
	it('should return three decimal places', function(done) {
		var node = roundto(12.12345,3); 
		var value = 12.123;
		
		node.should.equal(value);
		done();
	});
	
	// round to 3 decimal places
	it('should return three decimal places using ceiling', function(done) {
		var node = roundto(12.12345,3,'ceiling'); 
		var value = 12.124;
		
		node.should.equal(value);
		done();
	});

	// round to 3 decimal places
	it('should return three decimal places using floor', function(done) {
		var node = roundto(12.12345,3,'floor'); 
		var value = 12.123;
		
		node.should.equal(value);
		done();
	});
});