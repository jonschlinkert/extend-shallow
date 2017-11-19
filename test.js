/*!
 * extend-shallow <https://github.com/jonschlinkert/extend-shallow>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('mocha');
var path = require('path');
var argv = require('minimist')(process.argv.slice(2));
var extend = require('./');
require('should');

if (argv && argv.lib) {
  extend = require(path.resolve('benchmark/code', argv.lib));
}

describe('extend', function() {
  it('should extend the first object with the properties of the other objects.', function() {
    extend({a: 'b'}, {c: 'd'}).should.eql({a: 'b', c: 'd'});
    extend({a: 'b', c: 'd'}, {c: 'e'}).should.eql({a: 'b', c: 'e'});
  });

  it('should skip over non-plain objects.', function() {
    extend({a: 'b'}, 'foo', {c: 'd'}).should.eql({a: 'b', c: 'd'});
    extend({a: 'b'}, null, {c: 'd'}).should.eql({a: 'b', c: 'd'});
    extend({a: 'b'}, new Date(), {c: 'd'}).should.eql({a: 'b', c: 'd'});
    extend({a: 'b', c: 'd'}, 'bar', {c: 'e'}).should.eql({a: 'b', c: 'e'});
  });

  it('should extend a regex.', function() {
    var fixture = /foo/;
    extend(fixture, {a: 'b'}, new Date(), {c: 'd'});
    fixture.a.should.equal('b');
    fixture.c.should.equal('d');
  });

  it('should extend a function.', function() {
    var fixture = function() {};
    extend(fixture, {a: 'b'}, new Date(), {c: 'd'});
    fixture.a.should.equal('b');
    fixture.c.should.equal('d');
  });

  it('should extend an array.', function() {
    var arr = [];
    extend(arr, {a: 'b'}, new Date(), {c: 'd'});
    arr.a.should.equal('b');
    arr.c.should.equal('d');
  });

  it('should return an empty object when args are undefined.', function() {
    extend(null).should.eql({});
    extend(undefined).should.eql({});
  });

  describe('.extend():', function() {
    it('should extend object a with object b:', function() {
      extend({a: {b: 'b'}}, {b: {c: 'c'}}).should.eql({a: {b: 'b'}, b: {c: 'c'}});
    });

    it('should return an empty object when args are undefined:', function() {
      extend().should.eql({});
    });
  });
});
