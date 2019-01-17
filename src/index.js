import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
};
const description = 'Answer "yes" if number even otherwise answer "no"';

const userName = () => {
  const getName = readlineSync.question('May I have your name?');
  console.log(`hello,${getName}!`);
};

// for brain-even game //


const randomNumber = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};


const isUserAnswerCorrect = (num, answer) => {
  if (num % 2 === 0 && answer === 'yes') {
    return 1;
  }
  if (num % 2 === 1 && answer === 'no') {
    return 1;
  }
  return 0;
};
/* не могу понять, как добавить имя юзера в результат, потому что константа userName
локальная.если делаю ее глобальной, то нарушается порядок выводимых сообщений
 в приветсвии   T_T */

const startGame = () => {
  const question = randomNumber(1, 100);
  const userAnswer = readlineSync.question(`Question: ${question}`);
  const correctAnswer = () => (question % 2 === 0 ? 'yes' : 'no');
  const result = isUserAnswerCorrect(question, userAnswer);
  if (result === 1) {
    return 'Correct!';
  }
  return `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer()}`;
};

const isEven = () => {
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
      return 'Congratulations!';
    }
    return iter(startGame(), score + 1);
  };
  iter(startGame(), 1);
};

export {
  greeting, userName, isEven, description,
};
