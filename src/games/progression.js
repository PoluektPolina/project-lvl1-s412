import { cons } from 'hexlet-pairs';
import { range } from 'underscore';
import brainGame from '..';
import randomNumber from '../utils';

const description = 'What number is missing in the progression?';

const brainProgression = () => {
  const startElement = randomNumber(1, 5);
  const progrStep = randomNumber(2, 5);
  const progressionLength = 10;
  const hiddenElementIndex = randomNumber(0, 9);
  const lastElement = startElement + (progressionLength - 1) * progrStep;

  const progrArray = range(startElement, lastElement, progrStep);
  const deletedElement = progrArray.splice(hiddenElementIndex, 1, '..');
  const question = progrArray.join(' ');
  const correctAnsw = String(deletedElement);

  return cons(question, correctAnsw);
};

export default () => brainGame(description, brainProgression);
