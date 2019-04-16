import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  employees = [
  { name: 'Apple iPhone 6S Plus, GSM Unlocked, 64GB - Space Gray (Refurbished)', 
    provider: 'Apple',
    price: '7,500.00',
    stock: 3,
    image:'assets/iphone.jpg'},
  
    {name: 'Apple 13 Inch MacBook Air Laptop (1.8GHz Intel Core i5 Dual Core Processor',
            provider: 'Apple',
    price: '14,500',
    stock: 6,
    image:'assets/mac.jpg'},
    
    {name: 'Xbox One S 1TB Console - Starter BundleXbox One', 
    provider: 'Microsoft',
    price: '8,200.00',
    stock: 11,
    image:'assets/xbox.jpg'}
    
   
];

  constructor() { }

  ngOnInit() {
  }

}
