#!/usr/bin/env node

import getName from '../src/cli.js';
import game from '../games/brain-progression.js';

console.log('Welcome to the Brain Games!');
const userName = getName();
console.log(`Hello, ${userName}!`);
console.log('What number is missing in the progression?');
const result = game();
if (result) {
  console.log(`Congratulations, ${userName}!`);
} else {
  console.log(`Let's try again, ${userName}!`);
}
