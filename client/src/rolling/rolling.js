const data = require('./rollData');
const payoutData = require('./Payout.json');

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

const determinePayout = (currentCity) => {
  const destinationRegion = determineRegion();
  const destinationCity = determineCity(destinationRegion);
  return payoutData[currentCity][destinationCity]
}