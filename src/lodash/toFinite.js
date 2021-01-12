import toNumber from './toNumber';

const INFINITY = Infinity;
const MAX_INTEGER = Number.MAX_VALUE;

function toFinite(value) {
  if (!value) {
    return 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    const sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  // 处理NaN
  return value === value ? value : 0;
}

export default toFinite