import { Component, OnInit } from '@angular/core';

import { Loan } from '../loan/loan';
import { LoanService } from '../loan/loan.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loans: Loan[];

  constructor(private loanService: LoanService) { }

  ngOnInit() {
    this.getLoans();
  }

  getLoans(): void {
    this.loans = this.loanService.getLoans();
  }

}
