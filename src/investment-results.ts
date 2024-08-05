// Use the below code as a help
// e.g., integrate it into a service or component
// You may need to tweak it, depending on where and how you use it

import { investment, returns } from "./app/investment-display/invest.model";

export function calculateInvestmentResults(investment:investment) {
  const annualData = [];
  let investmentValue = investment.initialInvestment;

  for (let i = 0; i < investment.duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (investment.expectedReturn / 100);
    // console.log('interest earned ',interestEarnedInYear)
    investmentValue += interestEarnedInYear + investment.annualInvestment;
    // console.log('inv value ', typeof(investment.annualInvestment))
    const totalInterest =
      investmentValue - investment.annualInvestment * year - investment.initialInvestment;
    //  console.log('total interest ', totalInterest )
      annualData.push({
      year: year, 
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: investment.annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: investment.initialInvestment + investment.annualInvestment * year,
    });
  }

  return annualData;
}
