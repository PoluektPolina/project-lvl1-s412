import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const greeting = 'Welcome to the Brain Games!';
const nubmerOfRounds = 3;

const brainGame = (description, gamePair) => {
  console.log(greeting);
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  console.log(description);
  for (let round = 0; round < nubmerOfRounds; round += 1) {
    const pair = gamePair();
    const question = car(pair);
    const correctAnswer = cdr(pair);
    const userAnswer = readlineSync.question(`Question: ${question} `);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer :( Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

export default brainGame;
