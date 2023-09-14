#!/usr/bin/env node
import fs from 'fs';
import { program } from 'commander';

const rawData1 = fs.readFileSync('./file1.json', 'utf8');

const rawData2 = fs.readFileSync('./file2.json', 'utf8');

const arr1 = JSON.parse(rawData1);
const arr2 = JSON.parse(rawData2);
// console.log(arr1);
// console.log(arr2);

const command = () => {
  console.log(arr1);
  console.log(arr2);
};

program.parse(process.argv);

const { args } = program;
command(args);
