import isEven from 'is-even';
import { cons } from 'hexlet-pairs';
import brainGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no"';

const randomNumber = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const brainEven = () => {
  const question = randomNumber(1, 100);
  const correctAnsw = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnsw);
};

const runGame = () => brainGame(description, brainEven);

export default runGame;
