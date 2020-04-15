import covidEstimator from '../../../src/estimator';

const request = require('request');
const Log = require('../models/log');


exports.generateData = (req, res) => {
  const data = {
    region: {
      name: req.body.region.name,
      avgAge: req.body.region.avgAge,
      avgDailyIncomeInUSD: req.body.region.avgDailyIncomeInUSD,
      avgDailyIncomePopulation: req.body.region.avgDailyIncomePopulation
    },
    periodType: req.body.periodType,
    timeToElapse: req.body.timeToElapse,
    reportedCases: req.body.reportedCases,
    population: req.body.population,
    totalHospitalBeds: req.body.totalHospitalBeds
  };
  const estimate = covidEstimator(data);

  const log = new Log({
    method: res.method,
    url: res.baseUrl,
    code: res.atatusCode,
    time: res.elapsedTime
  });
  console.log(log);
  // log.save().then(() => {
    res.status(200).json({
      estimate
    // });
  }).catch((error) => {
    res.status(400).json({
      error: error
    });
  });
}
