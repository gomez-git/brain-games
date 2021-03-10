import { getAnswer } from '../src/cli.js';

const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const gcd = (num1, num2) => {
  for (let i = Math.max(num1, num2); i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return String(i);
    }
  }
  return num1;
};
const getCorrectAnswer = (num1, num2) => gcd(num1, num2);

export default () => {
  for (let i = 0; i < 3; i += 1) {
    const randomInt1 = getRandomInt();
    const randomInt2 = getRandomInt();
    console.log(`Question: ${randomInt1} ${randomInt2}`);
    const userAnswer = getAnswer();
    const correctAnswer = getCorrectAnswer(randomInt1, randomInt2);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }
  }

  return true;
};
