'use strict';
const { program } = require('commander');

program
  .option('-s, --shift <shift>', 'output extra debugging')
  .option('-a, --action <action>', 'small pizza size')
  .option('-o, --output <output>', 'flavour of pizza')
  .option('-i, --input <intput>', 'flavour of pizza');

program.parse(process.argv);

module.exports = program.opts();
