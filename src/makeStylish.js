import _ from 'lodash';

const makeStylish = (data) => {
  const iter = (currentValue, depth) => {
    const replacer = ' ';
    const replacerSize = 4;
    const leftShift = 2;
    const bracketIndent = replacer.repeat(replacerSize * (depth - 1));

    const makeIndent = (status, depth) => {
      const makeShift = (status) => {
        if (status === 'added') {
          return `+${replacer}`;
        }
        if (status === 'removed') {
          return `-${replacer}`;
        }
        return `${replacer.repeat(leftShift)}`;
      };
      const spesialSymbols = makeShift(status);
      const indent = replacer.repeat((depth * replacerSize) - leftShift);
      return `${indent}${spesialSymbols}`;
    };

    const res = currentValue.map((node) => {
      const {
        value, value1, value2, status, key, children,
      } = node;

      const makeString = (dataValue) => {
        if (!_.isObject(dataValue)) return `${dataValue}`;
        const line = Object.entries(dataValue).map(([keyObj, valueObj]) => {
          const str = `${makeIndent('unchanged', depth + 1)}${keyObj}: ${makeString(valueObj)}`;
          return str;
        });
        return ['{', ...line, `${makeIndent('unchanged', depth)}}`].join('\n');
      };

      if (status === 'changed') {
        return [`${makeIndent('removed', depth)}${key}: ${makeString(value1)}`,
          `${makeIndent('added', depth)}${key}: ${makeString(value2)}`].join('\n');
      }

      if (children !== undefined) {
        return `${makeIndent('nested', depth)}${key}: ${iter(children, depth + 1)}`;
      }
      return `${makeIndent(status, depth)}${key}: ${makeString(value)}`;
    });

    return [
      '{',
      ...res,
      `${bracketIndent}}`,
    ].join('\n');
  };
  return iter(data, 1);
};

export default makeStylish;
