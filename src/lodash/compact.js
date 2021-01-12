function compact(array) {
  let resIndex = 0;
  const result = [];
  if (array == 0) {
    return result;
  }
  for (const value of array) {
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

export default compact;
