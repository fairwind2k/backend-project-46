import makePlain from './makePlain.js';
import makeStylish from './makeStylish.js';

const getOutput = (tree, formatter) => {
  switch (formatter) {
    case 'plain':
      return makePlain(tree);
    case 'json':
      return JSON.stringify(tree);
    case 'stylish':
      return makeStylish(tree);
    default:
      throw new Error('Error! Choose the option!');
  }
};

export default getOutput;
