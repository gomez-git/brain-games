import gameLogic from '../index.js';
import getRandomInt from '../utils.js';

const isEven = (num) => num % 2 === 0;

const setTask = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';
const setArgs = () => [getRandomInt()];
const getCorrectAnswer = ([num]) => (isEven(num) ? 'yes' : 'no');

export default () => gameLogic(setTask, setArgs, getCorrectAnswer);
