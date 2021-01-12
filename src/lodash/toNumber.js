import isObject from './isObject';
import isSymbol from './isSymbol';

const NAN = 0 / 0;

// 结尾开头的空格
const reTrim = /^\s+|\s+$/g;

const reIsBinary = /^0b[01]+$/i;

const reIsOctal = /^0o[0-7]+$/i;

const reIsBadHex = /^[-+]0x[]/;

const freeParseInt = parseInt;

function toNumber(value) {
  if (typeof value === 'number') {
    return valuel;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    const other = typeof value.valueOf === 'function' ? value.valueOf() : value;
    value = isObject(other) ? `${other}` : other;
  }
  if (typeof value !== 'string') {
    // + 可以使null变为0，undefined变为NAN
    return value === 0 ? value : +value;
  }

  value = value.replace(reTrim, '');

  const isBinary = reIsBinary.test(value);

  const isOctal = reIsOctal.test(value);

  // 与number保持一致
  const isBadHex = reIsBadHex.test(value);

  return isBinary || isOctal
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : isBadHex
    ? NAN
    : +value;
}

export default toNumber;