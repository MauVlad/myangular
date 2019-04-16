import { Component, OnInit } from '@angular/core';
//import { ProductService } from '../../shared/services/ventas/product.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-contacts',
  templateUrl: './shoppingcar.component.html',
  styleUrls: ['./shoppingcar.component.scss']
})
export class ShoppingCarComponent implements OnInit {
	checked = false;
    indeterminate = false;
   
  constructor(
   // private productService: ProductService
  ) { 

   
  }

  ngOnInit() {
    //this.getProductsData();
  }
  employees = [
        { name: 'Apple iPhone 6S Plus, GSM Unlocked, 64GB - Space Gray (Refurbished)', 
          provider: 'Apple',
          price: '7,500.00',
          stock: 3,
          urlimage:'https://storage.googleapis.com/kubeet/motum/markers/m1.png'},
        
          {
         name: 'Dell PowerEdge T30 Tower Server - Intel Xeon E3-1225 v5 Quad-Core Processor up to 3.7 GHz', 
        
            provider: 'Dell',
          price: '35,240.00',
          stock: 5,
          urlimage:'https://storage.googleapis.com/kubeet/motum/markers/m2.png'},
    
          {name: 'Apple 13 Inch MacBook Air Laptop (1.8GHz Intel Core i5 Dual Core Processor',
                  provider: 'Apple',
          price: '14,500',
          stock: 6,
          urlimage:'https://storage.googleapis.com/kubeet/motum/markers/m3.png'},
          
          {name: 'Xbox One S 1TB Console - Starter BundleXbox One', 
          provider: 'Microsoft',
          price: '8,200.00',
          stock: 11,
          urlimage:'https://storage.googleapis.com/kubeet/motum/markers/m4.png'},
          
          {name: 'Apple Mac Pro desktop (3.5GHz 6-Core Intel Xeon E5, 16GB RAM, 256GB Flash)', 
          provider: 'Apple',
          price: '16,500.00',
          stock: 9,
          urlimage:'https://storage.googleapis.com/kubeet/motum/markers/m5.png'},
			];



  getProductsData(){

   
      }
      
    }
