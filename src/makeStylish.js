import _ from 'lodash';

const makeStylish = (data) => {
  const iter = (currentValue, depth) => {
    const replacer = ' ';
    const replacerSize = 4;
    const leftShift = 2;
    const bracketIndent = replacer.repeat(replacerSize * (depth - 1));

    const makeIndent = (status, depthLevel) => {
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
      const indent = replacer.repeat((depthLevel * replacerSize) - leftShift);
      return `${indent}${spesialSymbols}`;
    };

    const res = currentValue.map((node) => {
      const {
        value, value1, value2, status, key, children,
      } = node;

      const makeString = (dataValue, depthLevel) => {
        const iterStr = (dataV, level) => {
          if (!_.isObject(dataV)) return `${dataV}`;
          const line = Object.entries(dataV).map(([keyV, valueV]) => {
            const str = `${makeIndent('unchanged', level + 1)}${keyV}: ${iterStr(valueV, level + 1)}`;
            return str;
          });
          return ['{', ...line, `${makeIndent('unchanged', level)}}`].join('\n');
        };
        return iterStr(dataValue, depth);
      };

      if (status === 'changed') {
        return [`${makeIndent('removed', depth)}${key}: ${makeString(value1, depth)}`,
          `${makeIndent('added', depth)}${key}: ${makeString(value2, depth)}`].join('\n');
      }

      if (children !== undefined) {
        return `${makeIndent('nested', depth)}${key}: ${iter(children, depth + 1)}`;
      }
      return `${makeIndent(status, depth)}${key}: ${makeString(value, depth)}`;
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
