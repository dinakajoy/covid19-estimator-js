class SevereImpactEstimator {
  constructor(reportedCases) {
    this.reportedCases = reportedCases;
  }

  currentlyInfected() {
    return this.reportedCases * 50;
  }

  infectionsByRequestedTime() {
    return this.currentlyInfected * (2 ** 9);
  }
}
export default SevereImpactEstimator;
