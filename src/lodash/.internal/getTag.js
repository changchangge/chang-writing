const toString = Object.prototype.toString;

function getTag(value) {
  return toString.call(value);
}

export default getTag;
