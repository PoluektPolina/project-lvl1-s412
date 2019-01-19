import isEven from 'is-even';
import { cons } from 'hexlet-pairs';

const description = 'Answer "yes" if number even otherwise answer "no"';

const randomNumber = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const brainEven = () => {
  const question = randomNumber(1, 100);
  const correctAnsw = isEven(question) ? 'yes' : 'no';
  return cons(description, cons(question, correctAnsw));
};


export default brainEven;
