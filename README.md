#### Hexlet tests and linter status:
[![Actions Status](https://github.com/fairwind2k/backend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/fairwind2k/backend-project-46/actions) [![genDiff-check](https://github.com/fairwind2k/backend-project-46/actions/workflows/genDiff-check.yml/badge.svg)](https://github.com/fairwind2k/backend-project-46/actions)  [![Maintainability](https://api.codeclimate.com/v1/badges/eef05403244f66d8a0be/maintainability)](https://codeclimate.com/github/fairwind2k/backend-project-46/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/eef05403244f66d8a0be/test_coverage)](https://codeclimate.com/github/fairwind2k/backend-project-46/test_coverage)

## About a project

This a command-line tool that shows a difference between two files in a fancy way. You can choose out of 3 output formats: stylish (by default), plain and json.

### Support formats of files:
- json;
- yaml, yml;

### Requirements:
Node.js: 13.2.0 and above

## How it works

#### Install

```
make install
npm link
```

#### Usage

##### Help information
```
gendiff -h
```

#### Main command:

```
gendiff <format style> filepath1 filepath2

```
or for 'stylish' format by default
```
gendiff filepath1 filepath2

```
#### Example:
[![asciicast](https://asciinema.org/a/I4bKVkkfpZsIphee5L5B8U8lg.svg)](https://asciinema.org/a/I4bKVkkfpZsIphee5L5B8U8lg)