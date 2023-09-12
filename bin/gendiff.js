#!/usr/bin/env node
import { program } from 'commander';

program
  .name('gendiff.js')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0');

// program.command('-h')
//   .option('--first')
//   .option('-s, --separator <char>')
//   .action((str, options) => {
//     const limit = options.first ? 1 : undefined;
//     console.log(str.split(options.separator, limit));
//   });

program.parse();
