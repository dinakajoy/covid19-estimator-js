/* eslint-disable import/extensions */
import ImpactEstimator from './classes/ImpactEstimator.js';
import SevereImpactEstimator from './classes/SevereImpactEstimator.js';

const covid19ImpactEstimator = (data) => {
  const impact = new ImpactEstimator(data);
  const severeImpact = new SevereImpactEstimator(data);
  const output = {
    impact: {
      requestTime: impact.requestTime(),
      currentlyInfected: impact.currentlyInfected(),
      infectionsByRequestedTime: impact.infectionsByRequestedTime(),
      severeCasesByRequestedTime: impact.severeCasesByRequestedTime(),
      hospitalBedsByRequestedTime: impact.hospitalBedsByRequestedTime(),
      casesForICUByRequestedTime: impact.casesForICUByRequestedTime(),
      casesForVentilatorsByRequestedTime: impact.casesForVentilatorsByRequestedTime(),
      dollarsInFlight: impact.dollarsInFlight()
    },
    severeImpact: {
      requestTime: severeImpact.requestTime(),
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

export default covid19ImpactEstimator;
