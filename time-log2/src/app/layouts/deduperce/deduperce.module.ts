import { NgModule, NO_ERRORS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

// configuration and services
import { DeduperceRoutes } from "./deduperce.routing";
import { DeduperceListComponent } from './deduperce-list/deduperce-list.component';
//import { IndexComponent } from '../../index/index.component';
import { SharedModule } from "../../shared/shared.module";
import { AddDeduperceComponent } from './add-deduperce/add-deduperce.component';
import { DeduperceDetailComponent } from './deduperce-detail/deduperce-detail.component';

@NgModule({
	imports: [CommonModule, RouterModule.forChild(DeduperceRoutes), SharedModule],
	declarations: [
		DeduperceListComponent,
		AddDeduperceComponent,
		DeduperceDetailComponent
	],
	exports: [/*BestProductComponent*/],
	schemas: [ NO_ERRORS_SCHEMA ]

})
export class DeduperceModule { }
