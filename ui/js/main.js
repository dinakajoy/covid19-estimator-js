/* eslint-disable import/extensions */
import covid19ImpactEstimator from '../../src/estimator.js';

// Inputed data
const processInput = () => {
  const name = document.querySelector('#country').value;
  const avgAge = document.querySelector('#averageAge').value;
  const avgDailyIncomeInUSD = document.querySelector('#averageDailyIncomeInUSD').value;
  const avgDailyIncomePopulation = document.querySelector('#averageDailyIncomePopulation').value;
  const periodType = document.querySelector('#periodType').value;
  const timeToElapse = document.querySelector('#timeToElapse').value;
  const reportedCases = document.querySelector('#reportedCases').value;
  const population = document.querySelector('#population').value;
  const totalHospitalBeds = document.querySelector('#totalHopitalBeds').value;
  const data = {
    region: {
      name,
      avgAge,
      avgDailyIncomeInUSD,
      avgDailyIncomePopulation
    },
    periodType,
    timeToElapse,
    reportedCases,
    population,
    totalHospitalBeds
  };

  const output = covid19ImpactEstimator(data);
  const res = document.querySelector('#output');
  const result = `<h2>COVID19 Estimate Details</h2><br>
    <ul>
      <li><strong>Name: </strong>${data.region.name}</li>
      <li><strong>Average Age: </strong>${data.region.avgAge}</li>
      <li><strong>Average Daily Income In USD: </strong>${data.region.avgDailyIncomeInUSD}</li>
      <li><strong>Average Daily Income Population: </strong>${data.region.avgDailyIncomePopulation}</li>
      <li><strong>Period Type: </strong>${data.periodType}</li>
      <li><strong>Time To Elapse: </strong>${data.timeToElapse}</li>
      <li><strong>Reported Cases: </strong>${data.reportedCases}</li>
      <li><strong>Population: </strong>${data.population}</li>
      <li><strong>Total Hospital Beds: </strong>${data.totalHospitalBeds}</li>
    </ul>`;
  res.innerHTML = result;
  res.style.display = 'block';
  return output;
};

const submit = document.querySelector('#data-go-estimate');
submit.addEventListener('click', (e) => {
  e.preventDefault();
  processInput();
});

export default processInput;
