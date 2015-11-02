roundto
================

Rounds a number to specified number of decimal places

[![Build Status](https://travis-ci.org/mbayfield/roundTo.svg?branch=master)](https://travis-ci.org/mbayfield/roundTo)

Installation
--------

    npm install roundto

Examples
--------

The following examples show you how to use roundto

## Usage

```javascript
var roundto = require('roundto');

// round to 2 deicmal places
var rounded = roundto(12.1234,2);
=> 12.12

// round to 3 decimal places using the ceiling method
var rounded = roundto(12.1234,3,'ceiling');
=> 12.124
```

Running Tests
----

    $ npm test