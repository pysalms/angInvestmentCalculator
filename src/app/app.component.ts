import { Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentDisplayComponent } from './investment-display/investment-display.component';
import { InvestmentService } from './investment.service';
import { investment, returns } from './investment-display/invest.model';
type investArray = Array<returns>;
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent,UserInputComponent,InvestmentDisplayComponent],
  // providers:[investment-res?]
})
export class AppComponent {
  private investmentService = inject(InvestmentService);
  calcInvestment?:returns[];
  // calcInvestment = 
  // [{
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

  getInvestmentDetails(investment:investment){
   this.calcInvestment = this.investmentService.calcInvestmentReturns(investment)
  }
}
