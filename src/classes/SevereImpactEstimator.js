class SevereImpactEstimator {
  constructor(reportedCases) {
    this.reportedCases = reportedCases;
  }

  currentlyInfected() {
    return this.reportedCases * 50;
  }

  infectionsByRequestedTime() {
    // infenction rate is estimated based on the fact that currentlyInfected doubles every 3 days
    return (this.reportedCases * 50) * (2 ** 9);
  }
}
export default SevereImpactEstimator;
