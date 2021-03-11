import gameLogic from '../index.js';
import getRandomInt from '../utils.js';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const setTask = 'Answer "yes" if the number is prime, otherwise answer "no".';
const setArgs = () => [getRandomInt()];
const getCorrectAnswer = ([num]) => (isPrime(num) ? 'yes' : 'no');

export default () => gameLogic(setTask, setArgs, getCorrectAnswer);
