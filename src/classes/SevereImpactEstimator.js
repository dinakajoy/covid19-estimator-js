/* eslint-disable no-console */
class SevereImpactEstimator {
  constructor(data) {
    this.periodType = data.periodType;
    this.timeToElapse = data.timeToElapse;
    this.reportedCases = data.reportedCases;
    this.population = data.population;
    this.totalHospitalBeds = data.totalHospitalBeds;
  }

  requestedTime() {
    let days;
    if (this.periodType === 'days') {
      if (this.timeToElapse > 2) {
        days = Math.trunc(this.timeToElapse / 3);
      } else {
        days = 1;
      }
    }
    if (this.periodType === 'weeks') {
      // Converts timeToElapse in weeks to days
      const toDays = this.timeToElapse * 7;
      days = Math.trunc(toDays / 3);
    }
    if (this.periodType === 'months') {
      // Converts timeToElapse in months to days
      const toDays = this.timeToElapse * 30;
      days = Math.trunc(toDays / 3);
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

  severeCasesByRequestedTime() {
    const severePositiveCases = 0.15 * this.infectionsByRequestedTime();
    console.log(severePositiveCases);
    console.log(Math.trunc(severePositiveCases));
    return Math.trunc(severePositiveCases);
  }

  remainingBedsByRequestedTime() {
    const remainingBeds = 0.35 * this.totalHospitalBeds;
    console.log(remainingBeds);
    console.log(Math.trunc(remainingBeds));
    return Math.trunc(remainingBeds);
  }

  hospitalBedsByRequestedTime() {
    if (this.remainingBedsByRequestedTime() > this.severeCasesByRequestedTime()) {
      return this.remainingBedsByRequestedTime();
    }
    console.log(this.remainingBedsByRequestedTime() - this.severeCasesByRequestedTime());
    return this.remainingBedsByRequestedTime() - this.severeCasesByRequestedTime();
  }
}
export default SevereImpactEstimator;
