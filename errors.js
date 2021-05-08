'use strict';
module.exports = {
  ENOENT: 'One of the file paths you specified points to a non-existent file',
  required: 'Arguments "--action" and "--shift" are required',
  unexpected: 'An unexpected error happened',
  shift: 'Please input a correct shift value. It must be an integer',
  action:
    'Plase input a correct action value. It must be either "encode" or "decode"',
  input:
    'Cannot open input file. Please check that it exists and you have read permission.',
  output:
    'Cannot open output file. Please check that it exists and you have write permission.',
};
