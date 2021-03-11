import gameLogic from '../index.js';
import getRandomInt from '../utils.js';

const operators = ['+', '-', '*'];
const getRandomOperator = () => operators[getRandomInt(0, 2)];

const setTask = 'What is the result of the expression?';
const setArgs = () => [getRandomInt(), getRandomOperator(), getRandomInt()];
const getCorrectAnswer = ([num1, operator, num2]) => {
  switch (operator) {
    case '+':
      return String(num1 + num2);
    case '-':
      return String(num1 - num2);
    default:
      return String(num1 * num2);
  }
};

export default () => gameLogic(setTask, setArgs, getCorrectAnswer);
