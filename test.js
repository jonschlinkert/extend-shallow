/*!
 * extend-shallow <https://github.com/jonschlinkert/extend-shallow>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('mocha');
var hasSymbol = typeof global.Symbol === 'function';
var path = require('path');
var argv = require('minimist')(process.argv.slice(2));
var assert = require('assert');
var extend = require('./');

if (argv && argv.lib) {
  extend = require(path.resolve('benchmark/code', argv.lib));
}

describe('extend', function() {
  it('should extend the first object with the properties of the other objects', function() {
    assert.deepEqual(extend({a: 'b'}, {c: 'd'}), {a: 'b', c: 'd'});
    assert.deepEqual(extend({a: 'b', c: 'd'}, {c: 'e'}), {a: 'b', c: 'e'});
  });

  it('should handle non-plain objects', function() {
    assert.deepEqual(extend({a: 'b'}, 'foo', {c: 'd'}), {0: 'f', 1: 'o', 2: 'o', a: 'b', c: 'd'});
    assert.deepEqual(extend({a: 'b'}, null, {c: 'd'}), {a: 'b', c: 'd'});
    assert.deepEqual(extend({a: 'b'}, new Date(), {c: 'd'}), {a: 'b', c: 'd'});
  });

  it('should extend a regex', function() {
    var fixture = /foo/;
    extend(fixture, {a: 'b'}, new Date(), {c: 'd'});
    assert.equal(fixture.a, 'b');
    assert.equal(fixture.c, 'd');
  });

  it('should extend a function', function() {
    var fixture = function() {};
    extend(fixture, {a: 'b'}, new Date(), {c: 'd'});
    assert.equal(fixture.a, 'b');
    assert.equal(fixture.c, 'd');
  });

  it('should extend an array', function() {
    var arr = [];
    extend(arr, {a: 'b'}, new Date(), {c: 'd'});
    assert.equal(arr.a, 'b');
    assert.equal(arr.c, 'd');
  });

  it('should throw when the first arg is invalid', function() {
    assert.throws(function() {
      extend(null);
    });
    assert.throws(function() {
      extend(undefined);
    });
    assert.throws(function() {
      extend();
    });
  });

  it('should return an empty object when non-object is passed', function() {
    assert.deepEqual(extend(123), {});
  });

  it('should not extend non-enumerable symbols', function() {
    if (!hasSymbol) return this.skip();
    var fixture = {};
    var obj = {};
    var symbol = Symbol('foo');
    Object.defineProperty(obj, symbol, {enumerable: false, value: 'bar'});
    extend(fixture, obj);
    var other = extend({}, obj);
    assert.equal(typeof fixture[symbol], 'undefined');
    assert.equal(typeof other[symbol], 'undefined');
  });

  it('should extend symbol properties', function() {
    if (!hasSymbol) return this.skip();
    var fixture = {};
    var obj = {};
    var symbol = Symbol('foo');
    obj[symbol] = 'bar';
    extend(fixture, obj);
    var other = extend({}, obj);
    assert.equal(fixture[symbol], 'bar');
    assert.equal(other[symbol], 'bar');
  });
});
