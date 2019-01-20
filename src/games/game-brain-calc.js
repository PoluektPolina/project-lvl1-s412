import { cons } from 'hexlet-pairs';
import brainGame from '..';

const description = 'What is the result of the expression?';

const randomNumber = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const randomOperation = () => {
  const items = ['+', '-', '*'];
  const random = items[Math.floor(Math.random() * items.length)];
  return random;
};

const brainCalc = () => {
  const num1 = randomNumber(1, 20);
  const num2 = randomNumber(2, 15);
  const operation = randomOperation();
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
  const correctAnsw = String(expression());
  return cons(`${num1}${operation}${num2}`, correctAnsw);
};

const runGame = () => brainGame(description, brainCalc);

export default runGame;
