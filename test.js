'use strict';

var Currency = require('./');
var assert = require('assert');

describe('currency', function() {
        it('should return list of currencies', function() {
        	var currency = new Currency();
		var lst = currency.list();
		assert(true, Array.isArray(lst));
                assert(true, lst.length > 0);
        })

        it('should return correct country name and symbol', function() {
                var currency = new Currency('usd');
                assert(true, currency.name() === 'US Dollar');
                assert(true, currency.symbol() === '$');
                assert(true, currency.country === 'United States');
        })
});
