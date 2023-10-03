import { test, expect } from '@jest/globals';

import gendiff from '../src/diff.js';

const path1 = '__tests__/__fixtures__/file1.json';
const path2 = '__tests__/__fixtures__/file2.json';
const expectString = '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}';

test('testing function gendiff(filepath1, filepath2)', () => {
  expect(gendiff(path1, path2)).toBe(expectString);
});
