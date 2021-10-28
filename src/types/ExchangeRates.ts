interface Rates {
  currency: string;
  rate: number;
}

export interface ExchangeRatesType {
  rates: Rates[];
}
