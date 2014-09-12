# currency [![Build Status](https://travis-ci.org/sriramswamy/currency.svg?branch=master)](https://travis-ci.org/sriramswamy/currency)

> Currency utility to get country, currency name and symbol given a currency code. Can also be used to retrieve all currencies.

## Install

```sh
$ npm install currncy
```

## Usage

```js
### Retrieve list of currency codes

var Currency = require('currncy');

var currency = new Currency();
console.log(currency.list());
//=> ['ALL', 'AFN', ......, 'ZWD']

### Retrieve currency information for a particular currency

var currency = new Currency('USD');
console.log(currency.symbol());
//=> $

console.log(currency.name());
//=> US Dollar

console.log(currency.country());
//=> United States

(OR)

var currency = new Currency().get('INR');
console.log(currency.symbol);
//=> 

console.log(currency.name);
//=> Indian Rupee

console.log(currency.country);
//=> India
```
