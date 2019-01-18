import readlineSync from 'readline-sync';
import isEven from 'is-even';

const greeting = 'Welcome to the Brain Games!';

const introductionEven = () => {
  console.log(greeting);
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}`);
  console.log('Answer "yes" if number even otherwise answer "no"');
};
const introductionCalc = () => {
  console.log(greeting);
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}`);
  console.log('What is the result of the expression?');
};


// for brain-even game //


const randomNumber = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const randomOperation = () => {
  const items = ['+', '-', '*'];
  const random = items[Math.floor(Math.random() * items.length)];
  return random;
};

const isUserAnswerCorrect = (correctAnsw, userAnswer) => (correctAnsw === userAnswer ? 1 : 0);

// horrible code, sorry//

const brainGame = (game) => {
  const startGame = () => {
    const num1 = randomNumber(1, 20);
    const num2 = randomNumber(2, 10);
    const operation = randomOperation();

    const questionGenerator = () => {
      if (game === 'even') {
        return randomNumber(1, 100);
      }
      return `${num1}${operation}${num2}`;
    };
    const question = questionGenerator();

    const correctAnswer = () => {
      if (game === 'even') {
        return (isEven(question) ? 'yes' : 'no');
      }
      const expression = () => {
        switch (operation) {
          case '+':
            return num1 + num2;
          case '-':
            return num1 - num2;
          case '*':
            return num1 * num2;
          default:
            return 0;
        }
      };
      return String(expression());
    };

    const userAnswer = readlineSync.question(`Question: ${question}`);
    const result = isUserAnswerCorrect(correctAnswer(), userAnswer);
    if (result === 1) {
      return 'Correct!';
    }
    return `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer()}`;
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

export {
  introductionEven, introductionCalc, brainGame,
};
