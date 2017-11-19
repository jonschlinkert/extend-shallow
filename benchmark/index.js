'use strict';

const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
const suite = require('benchmarked');
const glob = argv._[0] || '*';

suite.run({code: `code/${glob}.js`, fixtures: `fixtures/*.js`})
  .then(function(stats) {
    stats.forEach(function(target) {
      target.fastest = target.fastest || ['n/a'];
    });
    console.log(suite.render(stats));
  })
  .catch(console.error);
