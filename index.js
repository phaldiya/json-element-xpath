
const getObjectPath = (obj, targetKey, multiple = false, parentKey = []) => {
  if (!obj || !targetKey || typeof obj !== 'object') {
    return null;
  }
  const result = [];

  if (typeof obj === 'object' && obj[targetKey]) {
    if (!multiple) {
      return [...parentKey, targetKey].join('.');
    }

    result.push([...parentKey, targetKey].join('.'));
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const [groupKey, groupVal] of Object.entries(obj)) {
    const path = getObjectPath(groupVal, targetKey, multiple, [...parentKey, groupKey]);
    if (path) {
      if (!multiple) {
        return path;
      }
      result.push(path);
    }
  }

  return result.length ? result.join(',').split(',').filter(Boolean) : null;
};

module.exports = {
  getXPath(object, objectKey, multiple = false) {
    return getObjectPath(object, objectKey, multiple);
  }
}
