// 补码，取整，与java的差异，存储

function slice(array, start, end) {
  let length = array == null ? 0 : array.length;
  if (!length) {
    return 0;
  }
  start = start == null ? 0 : start;

  // null进行加减都相当于0
  end = end === undefined ? length : end;

  if (start < 0) {
    start = start < -length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }

  // js中做位运算消暑部分直接去除
  length = start > end ? 0 : (end - start) >>> 0;
  start >>>= 0;

  let index = -1;
  const result = new Array(length);

  while (++index < length) {
    result[index] = array[index + start];
  }

  return result;
}

export default slice;