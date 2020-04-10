// const covid19ImpactEstimator = (data) => data;
import ImpactEstimator from './classes/ImpactEstimator';
import SevereImpactEstimator from './classes/SevereImpactEstimator';

const covid19ImpactEstimator = (data) => {
  const impact = new ImpactEstimator(data.reportedCases);
  const severeImpact = new SevereImpactEstimator(data.reportedCases);
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
