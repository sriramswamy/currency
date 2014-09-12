'use strict';
var currencies = require('./currencies.json');

var Currency = function(curr) {
	this.currencyList = [];
	this.currency = {};

	for (var c in currencies) {
		this.currencyList.push(c);
	}	

	if ( undefined !== curr ) {
		this.currency = this.get(curr);
	}
}

Currency.prototype = {

	list: function() {
		var self = this;
		return self.currencyList;
	},

	get: function(code) {
		return currencies[code.toUpperCase()];
	},

	country: function() {
		if( undefined === this.currency ) {
			return undefined;
		}
 		return this.currency.country;
	},

	name: function() {
		if( undefined === this.currency ) {
			return undefined;
		}		
		return this.currency.name;
	},

	symbol: function() {
		if( undefined === this.currency ) {
			return undefined;
		}		
		return this.currency.symbol;
	}
};

module.exports = Currency;
