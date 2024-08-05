import { Injectable } from '@angular/core';
import { investment } from './investment-display/invest.model';
import { calculateInvestmentResults } from '../investment-results'

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  constructor() { }

  calcInvestmentReturns(investment:investment){
  return calculateInvestmentResults(investment);
  
  }
}
