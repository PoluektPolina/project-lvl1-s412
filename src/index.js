import readlineSync from 'readline-sync';
import isEven from 'is-even';

const greeting = 'Welcome to the Brain Games!';

const introductionEven = () => {
  console.log(greeting);
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}`);
  console.log('Answer "yes" if number even otherwise answer "no"');
};


// for brain-even game //


const randomNumber = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};


const isUserAnswerCorrect = (correctAnsw, userAnswer) => (correctAnsw === userAnswer ? 1 : 0);

const startGame = () => {
  const question = randomNumber(1, 100);
  const userAnswer = readlineSync.question(`Question: ${question}`);
  const correctAnswer = num => (isEven(num) ? 'yes' : 'no');
  const result = isUserAnswerCorrect(correctAnswer(question), userAnswer);
  if (result === 1) {
    return 'Correct!';
  }
  return `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer()}`;
};

const brainEven = () => {
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

export {
  introductionEven, brainEven,
};
