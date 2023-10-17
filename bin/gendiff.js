#!/usr/bin/env node
import { program } from 'commander';
import gendiff from '../src/diff.js';

program
  .name('gendiff.js')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    console.log(gendiff(filepath1, filepath2));
  });

program.parse(process.argv);
