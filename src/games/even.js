import isEven from 'is-even';
import { cons } from 'hexlet-pairs';
import brainGame from '..';
import randomNumber from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no"';

const brainEven = () => {
  const question = randomNumber(1, 100);
  const correctAnsw = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnsw);
};

export default () => brainGame(description, brainEven);
