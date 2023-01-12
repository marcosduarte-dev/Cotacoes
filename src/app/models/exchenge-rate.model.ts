import { Rates } from "./rates.model";

export interface ExchangeRateModel
 {
  base_code: string;
  time_last_update_unix: string,
  rates: Rates,
 }
