// const covid19ImpactEstimator = (data) => data;
import ImpactEstimator from './classes/ImpactEstimator';
import SevereImpactEst from './classes/SevereImpactEstimator';

const covid19ImpactEstimator = (data) => {
  const impact = new ImpactEstimator(data.periodType, data.timeToElapse, data.reportedCases);
  const severeImpact = new SevereImpactEst(data.periodType, data.timeToElapse, data.reportedCases);
  return JSON.stringify({
    estimate: {
      impact: {
        currentlyInfected: impact.currentlyInfected(),
        infectionsByRequestedTime: impact.infectionsByRequestedTime()
      },
      severeImpact: {
        currentlyInfected: severeImpact.currentlyInfected(),
        infectionsByRequestedTime: severeImpact.infectionsByRequestedTime()
      }
    }
  });
};

export default covid19ImpactEstimator;
