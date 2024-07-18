import { Component ,OnDestroy,OnInit} from '@angular/core';
import { BitCoinServiceService } from '../bit-coin-service.service';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { JsonPipe, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

interface currency_pair{
  value: string;
  viewValue: string;
}

interface bitcoin_pair{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [HttpClientModule,MatCardModule,JsonPipe,NgIf,MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit, OnDestroy{

  public curr!: any;
  private subcription!: Subscription;
  constructor(private data:BitCoinServiceService)
  {}

  foods: currency_pair[] = [
    {value: 'INR', viewValue: 'India'},
    {value: 'AUD', viewValue: 'Australia'},
    {value: 'USD', viewValue: 'USA'},
  ];

  bit_tokens:bitcoin_pair[] = [
    {value: 'BTC', viewValue: 'BitCoin'},
    {value: 'DOGE', viewValue: 'Dogecoin'},
    {value: 'ETC', viewValue: 'Ethereum Classic'},
    {value: 'ETH', viewValue: 'Ethereum'},
    {value: 'USDT', viewValue: 'Tether'},
    {value: 'XLM', viewValue: ' Stellar'},
    {value: 'XPM', viewValue: 'Primecoin'},
  ]

  public selected_bit_coin: string = this.bit_tokens[0].value;

  public selectedvalue: string = this.foods[0].value;
  getData(currency:string,crypto:string)
  {
    this.subcription= this.data.getBit(currency,crypto).subscribe(data =>
      {
        this.curr = data;
      }
    )
  }

  private update_value(){
    setInterval(()=>this.getData(this.selectedvalue,this.selected_bit_coin),1000);
  }

  ngOnInit(): void {
    this.getData(this.selectedvalue,this.selected_bit_coin);
    this.update_value();
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }


}
