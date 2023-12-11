import path from 'path';
import fs from 'fs';
import makePath from './helpers/makePath.js';
import parseFile from './helpers/parsers.js';
import makeTree from './helpers/makeTree.js';
import makeStylish from './formatters/makeStylish.js';
import makePlain from './formatters/makePlain.js';

const getPath = (filepath) => {
  const unparsedData = fs.readFileSync(makePath(filepath));
  return unparsedData;
};

const getExtension = (filepath) => path.extname(filepath);

const getOutput = (tree, formatter) => {
  if (formatter === 'plain') {
    return makePlain(tree);
  }
  if (formatter === 'json') {
    return JSON.stringify(tree);
  }
  return makeStylish(tree);
};

const gendiff = (filepath1, filepath2, formatName = 'stylish') => {
  const path1 = getPath(filepath1);
  const path2 = getPath(filepath2);
  const extension1 = getExtension(filepath1);
  const extension2 = getExtension(filepath2);
  const data1 = parseFile(path1, extension1);
  const data2 = parseFile(path2, extension2);
  const diffTree = makeTree(data1, data2);
  return getOutput(diffTree, formatName);
};

export default gendiff;
