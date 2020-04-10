class ImpactEstimator {
  constructor(reportedCases) {
    this.reportedCases = reportedCases;
  }

  currentlyInfected() {
    return this.reportedCases * 10;
  }

  infectionsByRequestedTime() {
    return this.currentlyInfected * (2 ** 9);
  }
}
export default ImpactEstimator;
