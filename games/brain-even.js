import { getAnswer } from '../src/cli.js';

const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = (num) => num % 2 === 0;
const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

export default () => {
  for (let i = 0; i < 3; i += 1) {
    const randomInt1 = getRandomInt();
    console.log(`Question: ${randomInt1}`);
    const userAnswer = getAnswer();
    const correctAnswer = getCorrectAnswer(randomInt1);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }
  }

  return true;
};
