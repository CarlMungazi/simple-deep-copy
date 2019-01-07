module.exports = function arrObjDeepCopy(target) {
  let value;
  let key;
  const copy = Array.isArray(target) ? [] : {};

  for (key in target) {
    value = target[key];
    copy[key] = (typeof value === "object") ? arrObjDeepCopy(value) : value;
  }

  return copy;
}