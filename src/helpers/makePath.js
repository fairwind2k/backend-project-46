import path from 'path';

const makePath = (filepath) => {
  const arr = filepath.split('/');
  const currentPath = process.cwd();
  if (arr.includes(currentPath)) {
    return filepath;
  }
  const filepathAbs = path.resolve(currentPath, filepath);
  return filepathAbs;
};

export default makePath;
