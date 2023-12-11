import yaml from 'js-yaml';

const parseFile = (data, extension) => {
  if (extension === 'json') {
    return JSON.parse(data);
  }
  return yaml.load(data);
};

export default parseFile;
