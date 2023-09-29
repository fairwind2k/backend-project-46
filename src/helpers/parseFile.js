import fs from 'fs';
import makePath from './makePath.js';

const parseFile = (filepath) => {
  const arr = filepath.split('.');
  const [, extention] = arr;
  let data = [];
  if (extention === 'json') {
    data = JSON.parse(fs.readFileSync(makePath(filepath)));
  }
  return data;
};

export default parseFile;
