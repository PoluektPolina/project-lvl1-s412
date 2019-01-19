import { cons } from 'hexlet-pairs';

const description = 'Find the greatest common divisor of given numbers';

const randomNumber = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const findGcd = (num1, num2) => {
  const denomStart = () => (num1 > num2 ? num2 : num1);

  const iter = (divisor) => {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      return divisor;
    }
    return iter(divisor - 1);
  };
  return iter(denomStart());
};

const brainGcd = () => {
  const num1 = randomNumber(1, 30);
  const num2 = randomNumber(2, 50);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGcd(num1, num2));
  return cons(description, cons(question, correctAnswer));
};

export default brainGcd;
