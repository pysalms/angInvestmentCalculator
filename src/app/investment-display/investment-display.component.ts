import { Component, inject, Input } from '@angular/core';
import { InvestmentService } from '../investment.service';
import { returns } from './invest.model';

@Component({
  selector: 'app-investment-display',
  standalone: true,
  imports: [],
  templateUrl: './investment-display.component.html',
  styleUrl: './investment-display.component.css'
})
export class InvestmentDisplayComponent {

  // private investmentService = inject(InvestmentService);
  @Input() investmentData?:returns[];
  // investmentData = [{
  //     year:1,
  //     valueEndOfYear:11100,
  //     interest:100,
  //     totalInterest:100,
  //     totalAmountInvested:11000,
  //   },
  //   {
  //     year:2,
  //     valueEndOfYear:22100,
  //     interest:100,
  //     totalInterest:200,
  //     totalAmountInvested:21000,
  //   }]
  
  
}
