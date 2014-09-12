# currency [![Build Status](https://travis-ci.org/sriramswamy/currency.svg?branch=master)](https://travis-ci.org/sriramswamy/currency)

> Currency utility to get country, currency name and symbol given a currency code. Can also be used to retrieve all currencies.

## Install

```sh
$ npm install currncy
```

## Usage

**Retrieve list of currency codes**

```js
var Currency = require('currncy');

var currency = new Currency();
console.log(currency.list());
//=> ['ALL', 'AFN', ......, 'ZWD']
```

**Retrieve currency information for a particular currency. Currency code is case insensitive.**

```js
var currency = new Currency('usd'); 

console.log(currency.symbol());
//=> $

console.log(currency.name());
//=> US Dollar

console.log(currency.country());
//=> United States
```

**undefined is returned in case currency code is not found**

```js
var currency = new Currency('XXX');
console.log(currency.symbol);

**You can use the "get" method to retrieve the currency information as an object.**

```js
var currency = new Currency().get('INR');
console.log(currency.symbol);
//=> 

console.log(currency.name);
//=> Indian Rupee

console.log(currency.country);
//=> India
```
