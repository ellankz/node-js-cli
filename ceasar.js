'use strict';
const LOWER_A_CODE = 97;
const UPPER_A_CODE = 65;
const ALPHABET_LENGTH = 26;

const ceasarEncode = (buffer, shift) => {
  return [...buffer].reduce((result, charCode) => {
    const isLowerCase =
      charCode >= LOWER_A_CODE && charCode < LOWER_A_CODE + ALPHABET_LENGTH;
    const isUpperCase =
      charCode >= UPPER_A_CODE && charCode < UPPER_A_CODE + ALPHABET_LENGTH;
    let resultCharCode = charCode;
    if (isLowerCase || isUpperCase) {
      const space = isLowerCase ? LOWER_A_CODE : UPPER_A_CODE;
      const pureCode = charCode - space;
      resultCharCode =
        ((pureCode + shift + ALPHABET_LENGTH) % ALPHABET_LENGTH) + space;
    }
    return result + String.fromCharCode(resultCharCode);
  }, '');
};

module.exports = {
  encode: (data, s) => ceasarEncode(data, s),
  decode: (data, s) => ceasarEncode(data, s * -1),
};
