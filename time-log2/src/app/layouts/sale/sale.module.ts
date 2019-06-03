import { SaleListComponent } from './sale-list/sale-list.component';
// Core Dependencies
//import { NgModule } from "@angular/core";
import { NgModule, NO_ERRORS_SCHEMA, APP_INITIALIZER } from '@angular/core';

import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";

// configuration and services
import { SaleRoutes } from "./sale.routing";
//import { IndexComponent } from '../../index/index.component';

// Components
/*
import { CheckoutModule } from "./checkout/checkout.module";

import { ProductComponent } from "./product.component";
import { BestProductComponent } from "./best-product/best-product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { SharedModule } from "../../shared/shared.module";
import { FavouriteProductsComponent } from "./favourite-products/favourite-products.component";
import { CartProductsComponent } from "./cart-products/cart-products.component";
import { CartCalculatorComponent } from "./cart-calculator/cart-calculator.component";
*/

@NgModule({
	imports: [CommonModule, RouterModule.forChild(SaleRoutes), SharedModule],
	declarations: [
		SaleListComponent
	],
  exports: [/*BestProductComponent*/],
  schemas: [ NO_ERRORS_SCHEMA ]

})
export class SaleModule { }
