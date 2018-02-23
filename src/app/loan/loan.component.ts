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

  constructor(private loanService: LoanService) { }

  ngOnInit() {
    this.getLoans();
  }

  getLoans(): void {
    this.loans = this.loanService.getLoans();
  }
}