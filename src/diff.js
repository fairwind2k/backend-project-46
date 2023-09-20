import _ from 'lodash';
import fs from 'fs';
import makePath from './helpers/makePath.js';

const gendiff = (filepath1, filepath2, format = 'plain') => {
  const data1 = JSON.parse(fs.readFileSync(makePath(filepath1)));
  const data2 = JSON.parse(fs.readFileSync(makePath(filepath2)));
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2).sort();
  const result = keys.reduce((acc, key) => {
    if (!Object.hasOwn(data1, key)) {
      acc.push(`  + ${key}: ${data2[key]}`);
    } else if (!Object.hasOwn(data2, key)) {
      acc.push(`  - ${key}: ${data1[key]}`);
    } else if (Object.hasOwn(data1, key)) {
      if (data1[key] === data2[key]) {
        acc.push(`    ${key}: ${data1[key]}`);
      } else {
        acc.push(`  - ${key}: ${data1[key]}`);
        acc.push(`  + ${key}: ${data2[key]}`);
      }
    }
    return acc;
  }, []);
  return ['{', ...result, '}'].join('\n');
};

export default gendiff;
