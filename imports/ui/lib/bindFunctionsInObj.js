export function bindFuncInObj(obj, ...args) {
  const newObj = {};

  for (const func in obj) {
    if (obj.hasOwnProperty(func)) {
      newObj[func] = obj[func].bind(...args);
    }
  }

  return newObj;
}
