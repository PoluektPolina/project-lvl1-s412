import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';


const greeting = 'Welcome to the Brain Games!';


const isUserAnswerCorrect = (correctAnsw, userAnswer) => (correctAnsw === userAnswer ? 1 : 0);

const brainGame = (game) => {
  console.log(greeting);
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  console.log(car(game));

  const startGame = () => {
    const question = car(cdr(game));
    const correctAnswer = cdr(cdr(game));
    const userAnswer = readlineSync.question(`Question: ${question}`);
    const result = isUserAnswerCorrect(correctAnswer, userAnswer);
    if (result === 1) {
      return 'Correct!';
    }
    return `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`;
  };

  const iter = (gameResult, score) => {
    if (gameResult !== 'Correct!') {
      console.log(gameResult);
      console.log("Let's try again");
      return null;
    }
    if (gameResult === 'Correct!') {
      console.log('Correct!');
    }
    if (score === 3) {
      console.log('Congratulations!');
      return null;
    }
    return iter(startGame(), score + 1);
  };
  iter(startGame(), 1);
};

export default brainGame;
