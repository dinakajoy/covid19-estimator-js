import covidEstimator from '../../../src/estimator';
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

  // const movie = new Movie({
  //     movieId: req.body.movieId,
  //     userId: req.body.userId
  // });
  // movie.save().then(
  // () => {
  res.status(200).json({
    estimate
  });
  // }).catch(
  // (error) => {
  //   res.status(400).json({
  //     error: error
  //   });
  // });
};
