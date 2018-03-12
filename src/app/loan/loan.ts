export class Loan {

    constructor(
        public id: number,
        public name: string,
        public principal: number,
        public rate: number,
        public repaymentPeriod: number,
        public isSubsidized?: boolean
    ) { }
}