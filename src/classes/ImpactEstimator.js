/* eslint-disable no-console */
class ImpactEstimator {
  constructor(data) {
    this.periodType = data.periodType;
    this.timeToElapse = data.timeToElapse;
    this.reportedCases = data.reportedCases;
    this.population = data.population;
    this.totalHospitalBeds = data.totalHospitalBeds;
  }

  requestTime() {
    let days;
    if (this.periodType === 'days') {
      if (this.timeToElapse > 2) {
        days = Math.trunc(this.timeToElapse / 3);
      } else {
        days = 1;
      }
    } else if (this.periodType === 'weeks') {
      // Converts timeToElapse in weeks to days
      const toDays = this.timeToElapse * 7;
      days = Math.trunc(toDays / 3);
    } else if (this.periodType === 'months') {
      // Converts timeToElapse in months to days
      const toDays = this.timeToElapse * 30;
      days = Math.trunc(toDays / 3);
    }
    return days;
  }

  currentlyInfected() {
    return this.reportedCases * 10;
  }

  infectionsByRequestedTime() {
    const lengthInDays = this.requestTime();
    return (this.reportedCases * 10) * (2 ** lengthInDays);
  }

  severeCasesByRequestedTime() {
    const severePositiveCases = this.infectionsByRequestedTime() * 0.15;
    return Math.trunc(severePositiveCases);
  }

  remainingBedsByRequestedTime() {
    const remainingBeds = this.totalHospitalBeds * 0.35;
    return Math.trunc(remainingBeds);
  }

  hospitalBedsByRequestedTime() {
    let answer;
    console.log(this.remainingBedsByRequestedTime());
    console.log(this.severeCasesByRequestedTime());
    if (this.remainingBedsByRequestedTime() > this.severeCasesByRequestedTime()) {
      answer = this.remainingBedsByRequestedTime();
    } else {
      answer = this.remainingBedsByRequestedTime() - this.severeCasesByRequestedTime();
    }
    return answer;
  }
}
export default ImpactEstimator;
