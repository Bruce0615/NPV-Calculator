export class NPVParameter {
    initialValue: number;
    lowerBoundDiscountRate: number;
    upperBoundDiscountRate: number;
    discountRateIncrement: number;
    cashflows: Array<number>;
}

export class NPVResult {
    discountRate: number;
    npv:number;
}

export class Calculation {
    initialValue: number;
    lowerBoundDiscountRate: number;
    upperBoundDiscountRate: number;
    discountRateIncrement: number;
    cashflows: Array<number>;
    npvResults: Array<NPVResult>
}