class SevereImpactEstimator {
  constructor(periodType, timeToElapse, reportedCases) {
    this.periodType = periodType;
    this.timeToElapse = timeToElapse;
    this.reportedCases = reportedCases;
  }

  requestedTime() {
    let days;
    if (this.periodType === 'days') {
      if (this.timeToElapse > 2) {
        days = Math.floor(this.timeToElapse / 3);
      } else {
        days = 1;
      }
    }
    if (this.periodType === 'weeks') {
      // Converts timeToElapse in weeks to days
      const toDays = this.timeToElapse * 7;
      days = Math.floor(toDays / 3);
    }
    if (this.periodType === 'months') {
      // Converts timeToElapse in months to days
      const toDays = this.timeToElapse * 30;
      days = Math.floor(toDays / 3);
    }
    return days;
  }

  currentlyInfected() {
    return this.reportedCases * 50;
  }

  infectionsByRequestedTime() {
    const lengthInDays = this.requestedTime();
    return (this.reportedCases * 50) * (2 ** lengthInDays);
  }
}
export default SevereImpactEstimator;
