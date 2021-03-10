import { getAnswer } from '../src/cli.js';

const operands = ['+', '-', '*'];
const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomOperand = () => operands[getRandomInt(0, 2)];
const getCorrectAnswer = (num1, num2, operand) => {
  switch (operand) {
    case '+':
      return String(num1 + num2);
    case '-':
      return String(num1 - num2);
    default:
      return String(num1 * num2);
  }
};

export default () => {
  for (let i = 0; i < 3; i += 1) {
    const randomInt1 = getRandomInt();
    const randomInt2 = getRandomInt();
    const randomOperand = getRandomOperand();
    console.log(`Question: ${randomInt1} ${randomOperand} ${randomInt2}`);
    const userAnswer = getAnswer();
    const correctAnswer = getCorrectAnswer(randomInt1, randomInt2, randomOperand);
    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }
  }

  return true;
};
