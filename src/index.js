import getName, { getAnswer } from './cli.js';

const say = console.log;

export const greetings = () => {
  say('Welcome to the Brain Games!');
  const userName = getName();
  say(`Hello, ${userName}!`);

  return userName;
};

const engine = (setArgs, getCorrectAnswer) => {
  for (let gamesCount = 0; gamesCount < 3; gamesCount += 1) {
    const args = setArgs();
    say(`Question: ${args.join(' ')}`);

    const userAnswer = getAnswer();
    const correctAnswer = getCorrectAnswer(args);

    if (userAnswer === correctAnswer) {
      say('Correct!');
    } else {
      say(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

      return false;
    }
  }

  return true;
};

const goodbye = (gameResult, userName) => {
  if (gameResult) {
    say(`Congratulations, ${userName}!`);
  } else {
    say(`Let's try again, ${userName}!`);
  }
};

export default (setTask, setArgs, getCorrectAnswer) => {
  const userName = greetings();
  say(setTask);
  const gameResult = engine(setArgs, getCorrectAnswer);
  goodbye(gameResult, userName);
};
