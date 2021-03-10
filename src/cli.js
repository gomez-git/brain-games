import readlineSync from 'readline-sync';

export default () => readlineSync.question('May I have your name? ');
export const getAnswer = () => readlineSync.question('Your answer: ');
