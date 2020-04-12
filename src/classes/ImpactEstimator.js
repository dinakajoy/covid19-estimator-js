/* eslint-disable no-console */
class ImpactEstimator {
  constructor(data) {
    this.avgDailyIncomeInUSD = data.region.avgDailyIncomeInUSD;
    this.avgDailyIncomePopulation = data.region.avgDailyIncomePopulation;
    this.periodType = data.periodType;
    this.periodType = data.periodType;
    this.timeToElapse = data.timeToElapse;
    this.reportedCases = data.reportedCases;
    // this.population = data.population;
    this.totalHospitalBeds = data.totalHospitalBeds;
  }

  // SUB METHODS THAT RETURNS VALUE TO BE USED BY MAIN METHODS
  requestTime() {
    let days;
    if (this.periodType === 'days') {
      days = this.timeToElapse;
    }
    if (this.periodType === 'weeks') {
      // Converts timeToElapse in weeks to days
      days = this.timeToElapse * 7;
    }
    if (this.periodType === 'months') {
      // Converts timeToElapse in months to days
      days = this.timeToElapse * 30;
    }
    return days;
  }

  remainingBedsByRequestedTime() {
    return 0.35 * this.totalHospitalBeds;
  }

  // MAIN METHODS
  currentlyInfected() {
    return this.reportedCases * 10;
  }

  infectionsByRequestedTime() {
    const days = this.requestTime();
    if (days < 3) {
      return Math.trunc((this.reportedCases * 10) * (2 ** 1));
    }
    const daysByThrees = Math.trunc(days / 3);
    return Math.trunc((this.reportedCases * 10) * (2 ** daysByThrees));
  }

  severeCasesByRequestedTime() {
    return Math.trunc(this.infectionsByRequestedTime() * 0.15);
  }

  hospitalBedsByRequestedTime() {
    let answer;
    if (this.remainingBedsByRequestedTime() > this.severeCasesByRequestedTime()) {
      answer = this.remainingBedsByRequestedTime();
    } else {
      answer = Math.trunc(this.remainingBedsByRequestedTime() - this.severeCasesByRequestedTime());
    }
    return answer;
  }

  casesForICUByRequestedTime() {
    return Math.trunc(0.5 * this.infectionsByRequestedTime);
  }

  casesForVentilatorsByRequestedTime() {
    return Math.trunc(0.2 * this.infectionsByRequestedTime);
  }

  dollarsInFlight() {
    const days = this.requestTime();
    const percentOfRegion = this.avgDailyIncomeInUSD * 100;
    return percentOfRegion * this.avgDailyIncomeInUSD * days;
  }
}
export default ImpactEstimator;
