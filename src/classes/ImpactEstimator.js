class ImpactEstimator {
  constructor(periodType, timeToElapse, reportedCases, totalHospitalBeds) {
    this.periodType = periodType;
    this.timeToElapse = timeToElapse;
    this.reportedCases = reportedCases;
    this.totalHospitalBeds = totalHospitalBeds;
  }

  requestTime() {
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
    return this.reportedCases * 10;
  }

  infectionsByRequestedTime() {
    const lengthInDays = this.requestTime();
    return (this.reportedCases * 10) * (2 ** lengthInDays);
  }

  severeCasesByRequestedTime() {
    const positiveCases = this.infectionsByRequestedTime();
    return Math.trunc((15 / 100) * positiveCases);
  }

  remainingBedsByRequestedTime() {
    return Math.trunc((35 / 100) * this.totalHospitalBeds);
  }

  hospitalBedsByRequestedTime() {
    if (this.remainingBedsByRequestedTime() > this.severeCasesByRequestedTime()) {
      return this.remainingBedsByRequestedTime();
    }
    return this.remainingBedsByRequestedTime() - this.severeCasesByRequestedTime();
  }
}
export default ImpactEstimator;
