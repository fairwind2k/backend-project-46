import _ from 'lodash';

const makeObj = (data1, data2) => {
  const data3 = _.assign(_.clone(data1), _.clone(data2));
  return data3;
};

const makeTree = (data1, data2) => {
  const data = makeObj(data1, data2);
  const keys = _.sortBy(_.keys(data));
  const result = keys.map((key) => {
    if (!_.has(data1, key)) {
      return { key, value: data2[key], status: 'added' };
    }
    if (!_.has(data2, key)) {
      return { key, value: data1[key], status: 'removed' };
    }
    if (data1[key] === data2[key]) {
      return { key, value: data1[key], status: 'unchanged' };
    }
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { key, children: makeTree(data1[key], data2[key]), status: 'nested' };
    }
    return {
      key, value1: data1[key], value2: data2[key], status: 'changed',
    };
  });
  return result;
};

export default makeTree;
