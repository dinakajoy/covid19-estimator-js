// const covid19ImpactEstimator = (data) => data;
import ImpactEstimator from './classes/ImpactEstimator';
import SevereImpactEstimator from './classes/SevereImpactEstimator';

const covid19ImpactEstimator = (data) => {
  const { periodType, timeToElapse, reportedCases } = data;
  const impact = new ImpactEstimator(periodType, timeToElapse, reportedCases);
  const severeImpact = new SevereImpactEstimator(periodType, timeToElapse, reportedCases);
  // const impact = {
  //   currentlyInfected: impactCalc.currentlyInfected(),
  //   infectionsByRequestedTime: impactCalc.infectionsByRequestedTime()
  // };
  // const severeImpact = {
  //   currentlyInfected: severeImpactCalc.currentlyInfected(),
  //   infectionsByRequestedTime: severeImpactCalc.infectionsByRequestedTime()
  // };
  return {
    impact: {
      currentlyInfected: impact.currentlyInfected(),
      infectionsByRequestedTime: impact.infectionsByRequestedTime()
    },
    severeImpact: {
      currentlyInfected: severeImpact.currentlyInfected(),
      infectionsByRequestedTime: severeImpact.infectionsByRequestedTime()
    }
  };
};

export default covid19ImpactEstimator;
