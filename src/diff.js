import parseFile from './helpers/parsers.js';
import makeTree from './helpers/makeTree.js';
import makeStylish from './makeStylish.js';

const gendiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);
  const tree = makeTree(data1, data2);
  let res = '';
  if (formatName === 'stylish') {
    res = makeStylish(tree, data1, data2);
  }
  return res;
};

export default gendiff;
