import path from 'path';
import fs from 'fs';
import makePath from './helpers/makePath.js';
import parseFile from './helpers/parsers.js';
import makeTree from './helpers/makeTree.js';
import getOutput from './formatters/getOutput.js';

const getPath = (filepath) => {
  const unparsedData = fs.readFileSync(makePath(filepath));
  return unparsedData;
};

const getExtension = (filepath) => path.extname(filepath);

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
