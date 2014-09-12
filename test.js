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
                assert.equal('US Dollar', currency.name());
                assert.equal('$', currency.symbol());
                assert.equal('United States', currency.country());
        })

        it('should return correct country name and symbol with get', function() {
                var currency = new Currency().get('INR');
                assert.equal('Indian Rupee', currency.name);
                assert.equal('₹', currency.symbol);
                assert.equal('India', currency.country);                
        })        
});
