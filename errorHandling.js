'use strict';
const errors = require('./errors');
const fs = require('fs');
const path = require('path');

const exitOnError = (error, exitCode) => {
  if (error.code) {
    console.error('Error:', errors[error.code] || errors.unexpected);
  } else {
    console.error('Error:', error);
  }
  process.exit(exitCode || 1);
};

const handleInputErrors = async (shift, action, input, output) => {
  const shiftIsValid = !!shift && Number.isInteger(shift);
  const actionIsValid = action === 'encode' || action === 'decode';

  if (input) {
    try {
      const inputFilePath = path.resolve(__dirname, input);
      await fs.promises.access(inputFilePath, fs.constants.F_OK);
    } catch {
      exitOnError(errors.input, 9);
    }
  }

  if (output) {
    try {
      const outputFilePath = path.resolve(__dirname, output);
      await fs.promises.access(
        outputFilePath,
        fs.constants.F_OK | fs.constants.W_OK
      );
    } catch {
      exitOnError(errors.output, 9);
    }
  }

  if (!shift || !action) {
    exitOnError(errors.required, 9);
  }

  if (!shiftIsValid) {
    exitOnError(errors.shift, 9);
  }

  if (!actionIsValid) {
    exitOnError(errors.action, 9);
  }
};

module.exports = { handleInputErrors, exitOnError };
