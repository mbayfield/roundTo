roundTo
================

Rounds a number to decimal places

## Usage

var roundTo = require('roundTo');

// round to 2 deicmal places
var rounded = roundTo(12.1234,2);

// round to 3 decimal places using the ceiling method
var rounded = roundTo(12.1234,3,'ceiling');