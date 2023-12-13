import _ from 'lodash';

const getString = (nodeValue) => {
  if (_.isObject(nodeValue)) {
    return '[complex value]';
  }
  if (typeof (nodeValue) === 'string') {
    return `'${nodeValue}'`;
  }
  return `${nodeValue}`;
};

const makePlain = (data) => {
  const iter = (currentValue, acc, depth) => {
    const entries = currentValue.map((node) => {
      const {
        key, value, value1, value2, status, children,
      } = node;
      const currentKey = [...acc, key].join('.');
      switch (status) {
        case 'added':
          return `Property '${currentKey}' was ${status} with value: ${getString(value)}`;
        case 'removed':
          return `Property '${currentKey}' was ${status}`;
        case 'changed':
          return `Property '${currentKey}' was updated. From ${getString(value1)} to ${getString(value2)}`;
        case 'unchanged':
          return '';
        case 'nested':
          return iter(children, [...acc, key], depth + 1);
        default:
          throw new Error("Can't found a status!");
      }
    });
    return entries.filter((string) => (string !== '')).join('\n');
  };

  return iter(data, [], 1);
};

export default makePlain;
