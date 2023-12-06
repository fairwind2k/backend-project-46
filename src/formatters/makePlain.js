import _ from 'lodash';

const tree1 = [
  {
    key: 'common',
    children:
      [
        { key: 'follow', value: false, status: 'added' },
        { key: 'setting1', value: 'Value 1', status: 'unchanged' },
        { key: 'setting2', value: 200, status: 'removed' },
        {
          key: 'setting3', value1: true, value2: null, status: 'changed',
        },
        { key: 'setting4', value: 'blah blah', status: 'added' },
        { key: 'setting5', value: { key5: 'value5' }, status: 'added' },
        {
          key: 'setting6',
          children: [
            {
              key: 'doge',
              children: [
                {
                  key: 'wow', value1: '', value2: 'so much', status: 'changed',
                },
              ],
              status: 'nested',
            },
            { key: 'key', value: 'value', status: 'unchanged' },
            { key: 'ops', value: 'vops', status: 'added' },
          ],
          status: 'nested',
        },
      ],
    status: 'nested',
  },
  {
    key: 'group1',
    children:
      [
        {
          key: 'baz', value1: 'bas', value2: 'bars', status: 'changed',
        },
        { key: 'foo', value: 'bar', status: 'unchanged' },
        {
          key: 'nest', value1: { key: 'value' }, value2: 'str', status: 'changed',
        },
      ],
    status: 'nested',
  },
  { key: 'group2', value: { abc: 12345, deep: { id: 45 } }, status: 'removed' },
  { key: 'group3', value: { deep: { id: { number: 45 } }, fee: 100500 }, status: 'added' },
];

const data = [
  { key: 'key1', value: 'value1', status: 'added' },
  {
    key: 'key4',
    children: [
      { key: 'key5', value: 'value5', status: 'removed' },
      { key: 'foo', value: 'bar', status: 'unchanged' },
    ],
    status: 'nested',
  },
];

const makePlain = (data1) => {
  const iter = (currentValue, depth) => {
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
        acc.push(key);
        return iter(children, acc, depth + 1);
      }
      return '';
    });
    return entries.filter((string) => (string !== '')).join('\n');
  };

  return iter(data1, [], 1);
};

console.log(makePlain(data));
