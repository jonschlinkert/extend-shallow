'use strict';

var path = require('path');
var argv = require('minimist')(process.argv.slice(2));
// var code = 'code/*.js';

// if (argv && argv._) {
//   code = name(argv._[0]);
// }

var Suite = require('benchmarked');
var suite = new Suite({
  result: true,
  fixtures: 'fixtures/*.js',
  add: 'code/{{while,for}-arguments-in,_current}.js',
  cwd: __dirname
});

suite.run();

function name(str) {
  return 'code/{_current,' + str + '}{,*}';
}
