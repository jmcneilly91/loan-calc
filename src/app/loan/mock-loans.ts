import { Loan } from './loan';

export const LOANS: Loan[] = [
    { 
        id: 1,
        name: 'Sallie Mae',
        principal: 10000,
        rate: .025,
        repaymentPeriod: 72,
        isSubsidized: false
     },
     { 
        id: 2,
        name: 'MyFedLoan',
        principal: 8000,
        rate: .063,
        repaymentPeriod: 120,
        isSubsidized: true
     }
];