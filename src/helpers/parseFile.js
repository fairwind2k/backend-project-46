import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import makePath from './makePath.js';

const parseFile = (filepath) => {
  const extention = path.extname(filepath);
  const unparsedData = fs.readFileSync(makePath(filepath));
  const data = (extention === 'json') ? JSON.parse(unparsedData) : yaml.load(unparsedData);
  return data;
};

export default parseFile;
