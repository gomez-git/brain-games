import getName, { getAnswer } from './cli.js';

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getName();
  console.log(`Hello, ${userName}!`);
  return userName;
};

const engine = (setArgs, getCorrectAnswer) => {
  for (let i = 0; i < 3; i += 1) {
    const args = setArgs();
    console.log(`Question: ${args.join(' ')}`);
    const userAnswer = getAnswer();
    const correctAnswer = getCorrectAnswer(args);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }
  }
  return true;
};

const goodbye = (gameResult, userName) => {
  if (gameResult) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default (setTask, setArgs, getCorrectAnswer) => {
  const userName = (() => greetings())();
  console.log(setTask);
  const gameResult = engine(setArgs, getCorrectAnswer);
  goodbye(gameResult, userName);
};
