import parseFile from './helpers/parsers.js';
import makeTree from './helpers/makeTree.js';
import makeStylish from './makeStylish.js';

// const stilished = (keys, data1, data2) => {
//   const result = keys.reduce((acc, key) => {
//     if (!Object.hasOwn(data1, key)) {
//       acc.push(`  + ${key}: ${data2[key]}`);
//     } else if (!Object.hasOwn(data2, key)) {
//       acc.push(`  - ${key}: ${data1[key]}`);
//     } else if (Object.hasOwn(data1, key)) {
//       if (data1[key] === data2[key]) {
//         acc.push(`    ${key}: ${data1[key]}`);
//       } else {
//         acc.push(`  - ${key}: ${data1[key]}`);
//         acc.push(`  + ${key}: ${data2[key]}`);
//       }
//     }
//     return acc;
//   }, []);
//   return ['{', ...result, '}'].join('\n');
// };

const gendiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);
  const tree = makeTree(data1, data2);
  return makeStylish(tree, data1, data2);
};

export default gendiff;
