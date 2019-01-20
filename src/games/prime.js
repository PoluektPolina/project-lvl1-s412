import { cons } from 'hexlet-pairs';
import brainGame from '..';
import randomNumber from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
    return true;
  }
  return true;
};

const brainPrime = () => {
  const question = randomNumber(1, 100);
  const correctAnswer = (isPrime(question) === true ? 'yes' : 'no');
  return cons(question, correctAnswer);
};

export default () => brainGame(description, brainPrime);
