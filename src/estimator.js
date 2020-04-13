import ImpactEstimator from './classes/ImpactEstimator';
import SevereImpactEstimator from './classes/SevereImpactEstimator';

const covid19ImpactEstimator = (data) => {
  const impact = new ImpactEstimator(data);
  const severeImpact = new SevereImpactEstimator(data);
  const output = {
    data,
    impact: {
      currentlyInfected: impact.currentlyInfected(),
      infectionsByRequestedTime: impact.infectionsByRequestedTime(),
      severeCasesByRequestedTime: impact.severeCasesByRequestedTime(),
      hospitalBedsByRequestedTime: impact.hospitalBedsByRequestedTime(),
      casesForICUByRequestedTime: impact.casesForICUByRequestedTime(),
      casesForVentilatorsByRequestedTime: impact.casesForVentilatorsByRequestedTime(),
      dollarsInFlight: impact.dollarsInFlight()
    },
    severeImpact: {
      currentlyInfected: severeImpact.currentlyInfected(),
      infectionsByRequestedTime: severeImpact.infectionsByRequestedTime(),
      severeCasesByRequestedTime: severeImpact.severeCasesByRequestedTime(),
      hospitalBedsByRequestedTime: severeImpact.hospitalBedsByRequestedTime(),
      casesForICUByRequestedTime: severeImpact.casesForICUByRequestedTime(),
      casesForVentilatorsByRequestedTime: severeImpact.casesForVentilatorsByRequestedTime(),
      dollarsInFlight: severeImpact.dollarsInFlight()
    }
  };
  return output;
};

// Inputed data

// const processInput = () => {
//   const name = document.querySelector('#country').value;
//   const avgAge = document.querySelector('#averageAge').value;
//   const avgDailyIncomeInUSD = document.querySelector('#averageDailyIncomeInUSD').value;
//   const avgDailyIncomePopulation = document.querySelector('#averageDailyIncomePopulation').value;
//   const periodType = document.querySelector('#periodType').value;
//   const timeToElapse = document.querySelector('#timeToElapse').value;
//   const reportedCases = document.querySelector('#reportedCases').value;
//   const population = document.querySelector('#population').value;
//   const totalHospitalBeds = document.querySelector('#totalHopitalBeds').value;
//   const data = {
//     region: {
//       name,
//       avgAge,
//       avgDailyIncomeInUSD,
//       avgDailyIncomePopulation
//     },
//     periodType,
//     timeToElapse,
//     reportedCases,
//     population,
//     totalHospitalBeds
//   };
//   covid19ImpactEstimator(data);
// };

// const submit = document.querySelector('#data-go-estimate');
// submit.addEventListener('click', (e) => {
//   e.preventDefault();
//   processInput();
// });

export default covid19ImpactEstimator;
