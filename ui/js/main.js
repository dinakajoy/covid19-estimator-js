/* eslint-disable import/extensions */
/* eslint-disable no-alert */
import covid19ImpactEstimator from '../../src/estimator.js';

const submit = document.querySelector('#data-go-estimate');
const form = document.querySelector('#form');
document.querySelector('#country').focus();

const ctx = document.getElementById('myChart').getContext('2d');
const ctx2 = document.createElement('div');
ctx2.add
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

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

      <div class="box"> Reported Cases <br /><br /> <strong>${data.reportedCases}</strong></div>
      <div class="box"> Population <br /><br /> <strong>${data.population}</strong></div>
      <div class="box"> Time Before Report In Days <br /><br /> <strong>${output.impact.requestTime}</strong></div>
    </div>

    <div class="chrt">${hospitalBeds}</div>

    <br /><br />
    <button class="btn" onclick="location.reload()">Reload</button>
  `;
  res.style.display = 'block';
  return output;
});
