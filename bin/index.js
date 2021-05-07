#!/usr/bin/env node
'use strict';
const fs = require('fs');
const { pipeline } = require('stream');
const ceasar = require('./ceasar');
const { handleInputErrors, exitOnError } = require('./errorHandling');
const createTransformStream = require('./transform');
const { shift, action, input, output } = require('./parseArgs');

const shiftNum = parseFloat(shift, 10);

handleInputErrors(shiftNum, action, input, output).then(() => {
  const transformStream = createTransformStream(ceasar[action], shiftNum);

  if (!input) {
    console.log('Provide text to encode:');
  }
  const readStream =
    typeof input === 'string'
      ? fs.createReadStream(input, 'utf8')
      : process.stdin;
  const writeStream =
    typeof output === 'string'
      ? fs.createWriteStream(output, { encoding: 'utf8', flags: 'a' })
      : process.stdout;

  pipeline(readStream, transformStream, writeStream, (error) => {
    if (error) {
      exitOnError(error);
    } else {
      console.log('Encode succeeded.');
    }
  });
});
