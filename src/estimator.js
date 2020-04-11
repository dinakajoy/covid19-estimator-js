// const covid19ImpactEstimator = (data) => data;
import ImpactEstimator from './classes/ImpactEstimator';
import SevereImpactEstimator from './classes/SevereImpactEstimator';

const covid19ImpactEstimator = (data) => {
  const impact = new ImpactEstimator(data);
  const severeImpact = new SevereImpactEstimator(data);
  return {
    estimate: {
      impact: {
        currentlyInfected: impact.currentlyInfected(),
        infectionsByRequestedTime: impact.infectionsByRequestedTime(),
        severeCasesByRequestedTime: impact.severeCasesByRequestedTime(),
        hospitalBedsByRequestedTime: impact.hospitalBedsByRequestedTime()
      },
      severeImpact: {
        currentlyInfected: severeImpact.currentlyInfected(),
        infectionsByRequestedTime: severeImpact.infectionsByRequestedTime(),
        severeCasesByRequestedTime: severeImpact.severeCasesByRequestedTime(),
        hospitalBedsByRequestedTime: severeImpact.hospitalBedsByRequestedTime()
      }
    }
  };
};

export default covid19ImpactEstimator;
