class ImpactEstimator {
  constructor(reportedCases) {
    this.reportedCases = reportedCases;
  }

  currentlyInfected() {
    return this.reportedCases * 10;
  }

  infectionsByRequestedTime() {
    // infenction rate is estimated based on the fact that currentlyInfected doubles every 3 days
    return (this.reportedCases * 10) * (2 ** 9);
  }
}
export default ImpactEstimator;
