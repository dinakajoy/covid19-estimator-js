// const covid19ImpactEstimator = (data) => data;
import ImpactEstimator from './classes/ImpactEstimator';
import SevereImpactEstimator from './classes/SevereImpactEstimator';

const covid19ImpactEstimator = (data) => {
  const { periodType, timeToElapse, reportedCases } = data;
  const impactCalc = new ImpactEstimator(periodType, timeToElapse, reportedCases);
  const severeImpactCalc = new SevereImpactEstimator(periodType, timeToElapse, reportedCases);
  const impact = {
    currentlyInfected: impactCalc.currentlyInfected(),
    infectionsByRequestedTime: impactCalc.infectionsByRequestedTime()
  };
  const severeImpact = {
    currentlyInfected: severeImpactCalc.currentlyInfected(),
    infectionsByRequestedTime: severeImpactCalc.infectionsByRequestedTime()
  };
  return {
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
