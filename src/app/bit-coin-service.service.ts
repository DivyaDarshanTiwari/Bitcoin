import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Data } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BitCoinServiceService {

  private url = "https://api.coinbase.com/v2/prices/" //BTC-USD/buy endpoint
  constructor(private http:HttpClient) { }

  getBit(currency: string):Observable<Data>
  {
    console.log(currency);
    let x = `${this.url}BTC-${currency}/buy`
    return this.http.get<Data>(x);
  }
}
