import _ from 'lodash';

const makePlain = (data) => {
  const iter = (currentValue, acc, depth) => {
    const getString = (nodeValue) => {
      if (_.isObject(nodeValue)) {
        return '[complex value]';
      }
      if (typeof (nodeValue) === 'string') {
        return `'${nodeValue}'`;
      }
      return `${nodeValue}`;
    };

    const entries = currentValue.map((node) => {
      const {
        key, value, value1, value2, status, children,
      } = node;
      const currentKey = [...acc, key].join('.');
      if (status === 'added') {
        return `Property '${currentKey}' was ${status} with value: ${getString(value)}`;
      }
      if (status === 'removed') {
        return `Property '${currentKey}' was ${status}`;
      }
      if (status === 'changed') {
        return `Property '${currentKey}' was updated. From ${getString(value1)} to ${getString(value2)}`;
      }
      if (status === 'nested' && children !== undefined) {
        return iter(children, [...acc, key], depth + 1);
      }
      return '';
    });
    return entries.filter((string) => (string !== '')).join('\n');
  };

  return iter(data, [], 1);
};

export default makePlain;
