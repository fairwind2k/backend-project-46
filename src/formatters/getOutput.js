import makePlain from './makePlain.js';
import makeStylish from './makeStylish.js';

const getOutput = (tree, format) => {
  switch (format) {
    case 'plain':
      return makePlain(tree);
    case 'json':
      return JSON.stringify(tree);
    case 'stylish':
      return makeStylish(tree);
    default:
      throw new Error(`Unsupported format ${format}`);
  }
};

export default getOutput;
