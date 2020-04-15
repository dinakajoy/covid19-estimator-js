/* eslint-disable no-alert */
/* eslint-disable import/extensions */
import covid19ImpactEstimator from '../../src/estimator.js';

const submit = document.querySelector('#data-go-estimate');
const form = document.querySelector('#form');

document.querySelector('#country').focus();
submit.addEventListener('click', (e) => {
  e.preventDefault();
  // Inputed data
  const name = document.querySelector('#country').value;
  const avgAge = document.querySelector('#averageAge').value;
  const avgDailyIncomeInUSD = document.querySelector('#averageDailyIncomeInUSD').value;
  const avgDailyIncomePopulation = document.querySelector('#averageDailyIncomePopulation').value;
  const periodType = document.querySelector('#periodType').value;
  const timeToElapse = document.querySelector('#timeToElapse').value;
  const reportedCases = document.querySelector('#reportedCases').value;
  const population = document.querySelector('#population').value;
  const totalHospitalBeds = document.querySelector('#totalHopitalBeds').value;
  if (timeToElapse.length < 1 || reportedCases < 1) {
    alert('Please Enter All Values');
    return false;
  }
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
  submit.style.display = 'none';
  form.style.display = 'none';
  res.innerHTML = `
    <h2>Here Is The Report On The Impact Of The Virus In ${data.region.name}</h2>
    <pre>${JSON.stringify(output, null, 2)}</pre> <br /> <br /> 
    <button class="btn" onclick="location.reload()">Reload</button>
  `;
  res.style.display = 'block';
  return output;
});
