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
    // calculates 35% of totalHospitalBeds
    return 0.35 * this.totalHospitalBeds;
  }

  // MAIN METHODS
  currentlyInfected() {
    return this.reportedCases * 10;
  }

  infectionsByRequestedTime() {
    const days = this.requestTime();
    if (days < 3) {
      return this.currentlyInfected() * (2 ** 1);
    }
    const daysByThrees = Math.trunc(days / 3);
    return this.currentlyInfected() * (2 ** daysByThrees);
  }

  severeCasesByRequestedTime() {
    // calculates 15% of infectionsByRequestedTime()
    return Math.trunc(0.15 * this.infectionsByRequestedTime());
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
    // calculates 5% of infectionsByRequestedTime()
    return Math.trunc(0.05 * this.infectionsByRequestedTime());
  }

  casesForVentilatorsByRequestedTime() {
    // calculates 2% of infectionsByRequestedTime()
    return Math.trunc(0.02 * this.infectionsByRequestedTime());
  }

  dollarsInFlight() {
    const days = this.requestTime();
    // const percentOfIncomePop = this.avgDailyIncomePopulation * 100;
    const percentOfIncomePop = this.avgDailyIncomePopulation;
    const amount = this.infectionsByRequestedTime() * percentOfIncomePop * this.avgDailyIncomeInUSD;
    return Math.trunc(amount / days);
  }
}
export default ImpactEstimator;
