const data = require('./rollData');

const rollDie = () => Math.floor( Math.random() * 6 ) + 1;

const isEven = num => num % 2 === 0;

const determineRegion = () => {
  const evenOrOdd = isEven(rollDie()) ? 'even' : 'odd';
  const dieRoll = rollDie() + rollDie();
  return data.Regions[dieRoll][evenOrOdd];
};

const determineCity = (region) => {
  const evenOrOdd = isEven(rollDie()) ? 'even' : 'odd';
  const dieRoll = rollDie() + rollDie();
  return data[region][dieRoll][evenOrOdd]
};