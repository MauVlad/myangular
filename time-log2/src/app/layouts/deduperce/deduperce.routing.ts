//import { CartProductsComponent } from './cart-products/cart-products.component';
//import { FavouriteProductsComponent } from './favourite-products/favourite-products.component';
import { DeduperceListComponent } from './deduperce-list/deduperce-list.component';
import { Routes } from '@angular/router';
import { IndexComponent } from '../../index/index.component';
import { DeduperceDetailComponent } from './deduperce-detail/deduperce-detail.component';
import { AddDeduperceComponent } from './add-deduperce/add-deduperce.component';

export const DeduperceRoutes: Routes = [
	{
		path: 'deduperces',
		children: [
			{
				path: '',
				component: IndexComponent
			},
			{
				path: 'all-deduperces',
				component: DeduperceListComponent
			},
			{
				path: 'deduperce/:id',
				component: DeduperceDetailComponent
			},
			{
				path: 'add-deduperce',
				component: AddDeduperceComponent
			}
				]
	}
];
