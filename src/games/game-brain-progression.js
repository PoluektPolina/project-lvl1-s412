import { cons } from 'hexlet-pairs';
import { range } from 'underscore';

const description = 'What number is missing in the progression?';

const randomNumber = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const startElement = randomNumber(1, 5);
const progrStep = randomNumber(2, 5);
const progressionLength = 10;
const hiddenElementIndex = randomNumber(0, 9);
const lastElement = startElement + (progressionLength - 1) * progrStep;

const progrArray = range(startElement, lastElement, progrStep);
const deletedElement = progrArray.splice(hiddenElementIndex, 1, '..');
const question = progrArray.join(' ');
const correctAnsw = String(deletedElement);

const brainProgression = () => cons(description, cons(question, correctAnsw));


export default brainProgression;
