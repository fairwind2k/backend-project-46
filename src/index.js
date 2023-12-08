import parseFile from './helpers/parsers.js';
import makeTree from './helpers/makeTree.js';
import makeStylish from './formatters/makeStylish.js';
import makePlain from './formatters/makePlain.js';
import makeJson from './formatters/makeJson.js';

const gendiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);
  const tree = makeTree(data1, data2);
  if (formatName === 'plain') {
    return makePlain(tree);
  }
  if (formatName === 'json') {
    return makeJson(tree);
  }
  return makeStylish(tree);
};

export default gendiff;
