import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { ExchangeRateModel } from '../models/exchenge-rate.model';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  baseUrl = 'https://open.er-api.com/v6/latest/';

  constructor(private httpClient: HttpClient) { }

  getBase(base: string): Observable<ExchangeRateModel> {
    return this.httpClient.get<ExchangeRateModel>(this.baseUrl+base);
  }
}
