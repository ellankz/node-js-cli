'use strict';
const { program } = require('commander');

program
  .option('-s, --shift <number>', 'shift number')
  .option('-a, --action <action>', 'encode/decode')
  .option('-o, --output <file>', 'output file')
  .option('-i, --input <file>', 'input file');

program.parse(process.argv);

module.exports = program.opts();
