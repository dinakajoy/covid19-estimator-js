/* eslint-disable import/extensions */
/* eslint-disable no-alert */
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

  form.style.display = 'none';
  const res = document.querySelector('#output');
  const output = covid19ImpactEstimator(data);

  res.innerHTML = `
    <h2 class="output-title">Report On The Impact Of COVID19 In <strong>${data.region.name}</strong></h2>
    <div class="boxes">
      <div class="box"> Average Age <br /><br /> <strong>${data.region.avgAge}</strong></div>
      <div class="box"> Average Daily Income In USD <br /><br /> <strong>${data.region.avgDailyIncomeInUSD}</strong></div>
      <div class="box"> Average Daily Income Population <br /><br /> <strong>${data.region.avgDailyIncomePopulation}</strong></div>

      <div class="box"> Population <br /><br /> <strong>${data.population}</strong></div>
      <div class="box"> Reported Cases <br /><br /> <strong>${data.reportedCases}</strong></div>
      <div class="box"> Time Before Report In Days <br /><br /> <strong>${output.impact.requestTime}</strong></div>

      <div class="box"> Total Hospital Beds <br /><br /> <strong>${data.totalHospitalBeds}</strong></div>
      <div class="box"> Available (+)/Required (-) Hospital Beds <br /><br /> <strong>${output.impact.hospitalBedsByRequestedTime}</strong></div>
      <div class="box"> Available (+)/Required (-) Hospital Beds For Severe Impact<br /><br /> <strong>${output.severeImpact.hospitalBedsByRequestedTime}</strong></div>
    </div>
    <br /><br />
    <h3>Impact Calculation</h3>
    <div class="boxes">
      <div class="box"> Population <br /><br /> <strong>${data.population}</strong></div>
      <div class="box"> Currently Infected <br /><br /> <strong>${output.impact.currentlyInfected}</strong></div>
      <div class="box"> Severe Cases <br /><br /> <strong>${output.impact.severeCasesByRequestedTime}</strong></div>
      <div class="box"> Cases For ICU <br /><br /> <strong>${output.impact.casesForICUByRequestedTime}</strong></div>
      <div class="box"> Cases For Ventilators <br /><br /> <strong>${output.impact.casesForVentilatorsByRequestedTime}</strong></div>
      <div class="box"> Dollars in Flight <br /><br /> <strong>${output.impact.dollarsInFlight}</strong></div>
    </div>
    <br /><br />
    <h3>Severe Impact Calculation</h3>
    <div class="boxes">
      <div class="box"> Population <br /><br /> <strong>${data.population}</strong></div>
      <div class="box"> Currently Infected <br /><br /> <strong>${output.severeImpact.currentlyInfected}</strong></div>
      <div class="box"> Severe Cases <br /><br /> <strong>${output.severeImpact.severeCasesByRequestedTime}</strong></div>
      <div class="box"> Cases For ICU <br /><br /> <strong>${output.severeImpact.casesForICUByRequestedTime}</strong></div>
      <div class="box"> Cases For Ventilators <br /><br /> <strong>${output.severeImpact.casesForVentilatorsByRequestedTime}</strong></div>
      <div class="box"> Dollars in Flight <br /><br /> <strong>${output.severeImpact.dollarsInFlight}</strong></div>
    </div>
    <br /><br />
    <button class="btn" onclick="location.reload()">Reload</button>
  `;
  res.style.display = 'block';
  return output;
});
