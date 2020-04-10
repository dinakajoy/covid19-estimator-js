/* eslint-disable no-console */
class SevereImpactEstimator {
  constructor(periodType, timeToElapse, reportedCases) {
    this.periodType = periodType;
    this.timeToElapse = timeToElapse;
    this.reportedCases = reportedCases;
  }

  requestedTime() {
    console.log(`Sev periodType = ${this.periodType}`);
    console.log(`Sev timeToElapse = ${this.timeToElapse}`);
    console.log(`Sev reportedCases = ${this.reportedCases}`);
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
    console.log(`Sev days - ${days}`);
    return days;
  }

  currentlyInfected() {
    console.log(this.reportedCases * 50);
    return this.reportedCases * 50;
  }

  infectionsByRequestedTime() {
    const lengthInDays = this.requestedTime();
    console.log(`Sev daysDivBy3 - ${lengthInDays}`);
    console.log(`Sev daysDivBy3MulBy2 - ${2 ** lengthInDays}`);
    console.log(`(Sev IBRT - ${this.reportedCases} * 10) * (2 ** ${lengthInDays})`);
    return (this.reportedCases * 50) * (2 ** lengthInDays);
  }
}
export default SevereImpactEstimator;
