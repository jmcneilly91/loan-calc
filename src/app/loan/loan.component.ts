import { Component, OnInit } from '@angular/core';

import { Loan } from './loan';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  loan: Loan = {
    id: 1,
    name: 'Sallie Mae',

    principal: 12000,
    rate: .035,
    repaymentPeriod: 72,
    subsidized: false
  }


  constructor() { }

  ngOnInit() {
  }

}
