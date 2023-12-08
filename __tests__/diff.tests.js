import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'node:fs';

import gendiff from '../src/index.js';

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
const expectStringPlain = readFileSync(getFixturePath('expected_plain.txt'), 'utf8');
const expectStringJson = readFileSync(getFixturePath('expected_json.txt'), 'utf8');

test('testing function gendiff(filepath1, filepath2, formatName = "stylish")', () => {
  expect(gendiff(pathJson1, pathJson2, 'stylish')).toBe(expectString);
  expect(gendiff(pathYaml1, pathYaml2, 'stylish')).toBe(expectString);
  expect(gendiff(pathYml1, pathYml2, 'stylish')).toBe(expectString);
});

test('testing function gendiff(filepath1, filepath2, formatName = "plain")', () => {
  expect(gendiff(pathJson1, pathJson2, 'plain')).toBe(expectStringPlain);
  expect(gendiff(pathYaml1, pathYaml2, 'plain')).toBe(expectStringPlain);
  expect(gendiff(pathYml1, pathYml2, 'plain')).toBe(expectStringPlain);
});

test('testing function gendiff(filepath1, filepath2, formatName = "json")', () => {
  expect(gendiff(pathJson1, pathJson2, 'json')).toBe(expectStringJson);
  expect(gendiff(pathYaml1, pathYaml2, 'json')).toBe(expectStringJson);
  expect(gendiff(pathYml1, pathYml2, 'json')).toBe(expectStringJson);
});
