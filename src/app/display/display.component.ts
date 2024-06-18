import { Component ,OnInit} from '@angular/core';
import { BitCoinServiceService } from '../bit-coin-service.service';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { JsonPipe, NgIf } from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

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
  imports: [HttpClientModule,MatCardModule,JsonPipe,NgIf,MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit{

  public curr!: any;
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
    return this.data.getBit(currency,crypto).subscribe(data =>
      {
        console.log(data);
        this.curr = data;
      }
    )
  }

  ngOnInit(): void {
    this.getData(this.selectedvalue,this.selected_bit_coin);
  }

}
