import { Component, OnInit } from '@angular/core';

import { Loan } from './loan';
import { LoanService } from './loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  loans: Loan[];
  loan = new Loan(0, "temp", 0, 0, 0, false);

  constructor(private loanService: LoanService) { }

  ngOnInit() {
    this.getLoans();
  }

  getLoans(): void {
    this.loans = this.loanService.getLoans();
  }

  addLoan(input: Loan): void {
    let loan = new Loan(
      // TODO: How to get an appropriate id value?
      0,
      input.name,
      input.principal,
      input.rate,
      input.repaymentPeriod,
      input.isSubsidized
    );
    this.loans.push(loan);
  }
}
