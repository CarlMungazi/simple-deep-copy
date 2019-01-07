module.exports = function simpleDeepCopy(target) {
  let value;
  let key;
  const copy = Array.isArray(target) ? [] : {};

  for (key in target) {
    value = target[key];
    copy[key] = (typeof value === "object") ? simpleDeepCopy(value) : value;
  }

  return copy;
}