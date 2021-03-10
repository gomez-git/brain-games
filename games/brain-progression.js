import { getAnswer } from '../src/cli.js';

const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const getProgression = (num, step, position) => {
  const result = [];
  for (let i = num; result.length < 9; i += step) {
    result.push(i);
  }
  result[position] = '..';
  return result.join(' ');
};
const getCorrectAnswer = (num, step, position) => String(num + step * position);

export default () => {
  for (let i = 0; i < 3; i += 1) {
    const randomInt1 = getRandomInt();
    const randomInt2 = getRandomInt(3, 10);
    const randomInt3 = getRandomInt(1, 7);
    const progression = getProgression(randomInt1, randomInt2, randomInt3);
    console.log(`Question: ${progression}`);
    const userAnswer = getAnswer();
    const correctAnswer = getCorrectAnswer(randomInt1, randomInt2, randomInt3);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }
  }

  return true;
};
