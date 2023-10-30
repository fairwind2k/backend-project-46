import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'node:fs';

import gendiff from '../src/diff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '../__fixtures__', filename);
const pathJson1 = getFixturePath('file1.json');
const pathJson2 = getFixturePath('file2.json');
const pathYaml1 = getFixturePath('file1.yaml');
const pathYaml2 = getFixturePath('file2.yaml');
const pathYml1 = getFixturePath('file1.yml');
const pathYml2 = getFixturePath('file2.yml');

const expectString = readFileSync(getFixturePath('expected.txt'), 'utf8');

test('testing function gendiff(filepath1, filepath2, formatName)', () => {
  expect(gendiff(pathJson1, pathJson2, 'stylish')).toBe(expectString);
  expect(gendiff(pathYaml1, pathYaml2, 'stylish')).toBe(expectString);
  expect(gendiff(pathYml1, pathYml2, 'stylish')).toBe(expectString);
});
