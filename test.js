'use strict';

var Currency = require('./');
var assert = require('assert');

describe('currency', function() {
        it('should return value', function() {
        	var currency = new Currency();
        	console.log("------------");
        	console.log(currency.list());

        	var cur = currency.get('ARS');
        	console.log(cur.name);
		console.log(cur.symbol);

        	var c1 = new Currency('awg');

        	console.log(c1.name());
        	console.log(c1.symbol());
        })
});
