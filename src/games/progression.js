import gameLogic from '../index.js';
import getRandomInt from '../utils.js';

const getProgression = ([num, step, position]) => {
  const result = [];
  for (let i = num; result.length < 9; i += step) {
    if (i === num + step * position) {
      result.push('..');
    } else result.push(i);
  }
  return result;
};

const setTask = 'What number is missing in the progression?';
const setArgs = () => getProgression([getRandomInt(), getRandomInt(3, 10), getRandomInt(1, 7)]);
const getCorrectAnswer = (coll) => {
  const indexOfMissingNumber = coll.indexOf('..');
  const missingNumber = (coll[indexOfMissingNumber - 1] + coll[indexOfMissingNumber + 1]) / 2;
  return String(missingNumber);
};

export default () => gameLogic(setTask, setArgs, getCorrectAnswer);
