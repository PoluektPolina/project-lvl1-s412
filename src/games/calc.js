import { cons } from 'hexlet-pairs';
import brainGame from '..';
import randomNumber from '../utils';

const description = 'What is the result of the expression?';

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

export default () => brainGame(description, brainCalc);
