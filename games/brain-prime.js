import { getAnswer } from '../src/cli.js';

const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const isPrime = (num) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const getCorrectAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

export default () => {
  for (let i = 0; i < 3; i += 1) {
    const randomInt = getRandomInt(2);
    console.log(`Question: ${randomInt}`);
    const userAnswer = getAnswer();
    const correctAnswer = getCorrectAnswer(randomInt);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }
  }

  return true;
};
