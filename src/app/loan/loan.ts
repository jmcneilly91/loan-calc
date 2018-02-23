export class Loan {
    id: number;
    name: string;

    principal: number;
    rate: number;
    repaymentPeriod: number; // In months
    subsidized: boolean;
}