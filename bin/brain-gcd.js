#!/usr/bin/env node

import getName from '../src/cli.js';
import game from '../games/brain-gcd.js';

console.log('Welcome to the Brain Games!');
const userName = getName();
console.log(`Hello, ${userName}!`);
console.log('Find the greatest common divisor of given numbers.');
const gameResult = game();
if (gameResult) {
  console.log(`Congratulations, ${userName}!`);
} else {
  console.log(`Let's try again, ${userName}!`);
}
