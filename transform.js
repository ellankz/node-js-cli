'use strict';
const { Transform } = require('stream');

const createTransformStream = (transformation, shift) => {
  return new Transform({
    transform(data, _encoding, callback) {
      try {
        const resultString = transformation(data, shift);
        callback(null, resultString);
      } catch (err) {
        callback(err);
      }
    },
  });
};

module.exports = createTransformStream;
