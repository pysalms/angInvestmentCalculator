import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';
import { investment } from '../investment-display/invest.model';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment='';
  annualInvestment='';
  expectedReturn='';
  duration='';
  // private investmentService = inject(InvestmentService);
  @Output() invest = new EventEmitter<investment>();
  submitUserInputs(){
  //  this.investmentService.calcInvestmentReturns();    
    this.invest.emit({
      initialInvestment:parseInt(this.initialInvestment),
      annualInvestment:parseInt(this.annualInvestment),
      expectedReturn:parseInt(this.expectedReturn),
      duration:parseInt(this.duration)});
  }

  
  
}
