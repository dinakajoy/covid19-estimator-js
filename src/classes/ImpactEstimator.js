/* eslint-disable no-console */
class ImpactEstimator {
  constructor(periodType, timeToElapse, reportedCases) {
    this.periodType = periodType;
    this.timeToElapse = timeToElapse;
    this.reportedCases = reportedCases;
  }

  requestTime() {
    console.log(`periodType = ${this.periodType}`);
    console.log(`timeToElapse = ${this.timeToElapse}`);
    console.log(`reportedCases = ${this.reportedCases}`);
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
    return this.reportedCases * 10;
  }

  infectionsByRequestedTime() {
    const lengthInDays = this.requestTime();
    console.log(lengthInDays);
    return (this.reportedCases * 10) * (2 ** lengthInDays);
  }
}
export default ImpactEstimator;
