export interface investment{
    initialInvestment:number,
  annualInvestment:number,
  expectedReturn:number,
  duration:number
}

export interface returns{
  year: number,
      interest: number,
      valueEndOfYear: number,
      annualInvestment: number,
      totalInterest: number,
      totalAmountInvested:number
}