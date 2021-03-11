import gameLogic from '../index.js';
import getRandomInt from '../utils.js';

const gcd = (num1, num2) => {
  for (let i = Math.min(num1, num2); i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return String(i);
    }
  }
};

const setTask = 'Find the greatest common divisor of given numbers.';
const setArgs = () => [getRandomInt(), getRandomInt()];
const getCorrectAnswer = ([num1, num2]) => gcd(num1, num2);

export default () => gameLogic(setTask, setArgs, getCorrectAnswer);
