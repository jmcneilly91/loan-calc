import { Injectable } from '@angular/core';

import { Loan } from './loan';
import { LOANS } from './mock-loans';

@Injectable()
export class LoanService {

  constructor() { }

  getLoans(): Loan[] { 
    return LOANS;
  }
}
