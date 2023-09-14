#!/usr/bin/env node
import { program } from 'commander';

program
  .name('gendiff.js')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .command('parser <filepath1> <filepath2>', 'print arrays');

program.parse(process.argv);
