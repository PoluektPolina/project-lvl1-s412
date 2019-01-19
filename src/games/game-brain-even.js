import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!';

const introductionCalc = () => {
  console.log(greeting);
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}`);
  console.log('Answer "yes" if number even otherwise answer "no"');
};

export default introductionCalc;
