import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import gendiff from '../src/diff.js';
import expectString from '../__fixtures__/expected_result.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '../__fixtures__', filename);
const pathJson1 = getFixturePath('file1.json');
const pathJson2 = getFixturePath('file2.json');

test('testing function gendiff(filepath1, filepath2)', () => {
  expect(gendiff(pathJson1, pathJson2)).toBe(expectString);
});
