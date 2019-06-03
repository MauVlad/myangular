import { Injectable } from '@angular/core';
//import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Deduperce } from '../models/deduperce';
import { AuthService } from './auth.service';
import { ToastrService } from './toastr.service';

@Injectable()
export class DeduperceService {
	//products: AngularFireList<Product>;
	//product: AngularFireObject<Product>;
    deduperces: AngularFirestoreCollection<Deduperce>;
	deduperce:  AngularFirestoreDocument<Deduperce>;

	// favouriteDeduperces
	//favouriteProducts: AngularFireList<FavouriteProduct>;
	//cartProducts: AngularFireList<FavouriteProduct>;
	favouriteDeduperces: AngularFirestoreCollection<FavouriteDeduperce>;
	cartDeduperces:      AngularFirestoreDocument<FavouriteDeduperce>;


	// NavbarCounts
	navbarCartCount = 0;
	navbarFavEmplCount = 0;

	constructor(
		private db: AngularFirestore,
		private authService: AuthService,
		private toastrService: ToastrService
	) {
		this.calculateLocalFavEmplCounts();
		this.calculateLocalCartEmplCounts();
	}

	getDeduperces() {
		//this.products = this.db.list('products');
		this.deduperces = this.db.collection('deduperces');
		//return this.db.collection('deduperces');
		return this.deduperces;
	}

	createDeduperce(data: Deduperce) {
		//this.products.push(data);
		return this.db.collection('deduperces').add(data);
	}

	getDeduperceById(key: string) {
		this.deduperce =   this.db.collection('deduperces').doc(key);
		//this.db.doc('products/' + key);
		return this.deduperce;
	}

	updateDeduperce(data: Deduperce) {
	//	this.products.update(data.$key, data);
	}

	deleteDeduperce(key: string) {
	//	this.products.remove(key);
	}

	/*
   ----------  Favourite Deduperce Function  ----------
  */

	// Get Favourite Deduperce based on userId
	getUsersFavouriteDeduperce() {
		const user = this.authService.getLoggedInUser();
	//	this.favouriteProducts = this.db.list('favouriteProducts', (ref) =>
//			ref.orderByChild('userId').equalTo(user.$key)
//		);
		return this.favouriteDeduperces;
	}

	// Adding New deduperce to favourite if logged else to localStorage
	addFavouriteDeduperce(data: Deduperce): void {
		let a: Deduperce[];
		a = JSON.parse(localStorage.getItem('avf_item')) || [];
		a.push(data);
		this.toastrService.wait('Adding Deduperce', 'Adding Deduperce as Favourite');
		setTimeout(() => {
			localStorage.setItem('avf_item', JSON.stringify(a));
			this.calculateLocalFavEmplCounts();
		}, 1500);
	}

	// Fetching unsigned users favourite proucts
	getLocalFavouriteDeduperces(): Deduperce[] {
		const deduperces: Deduperce[] = JSON.parse(localStorage.getItem('avf_item')) || [];

		return deduperces;
	}

	// Removing Favourite Deduperce from Database
	removeFavourite(key: string) {
//		this.favouriteProducts.remove(key);
	}

	// Removing Favourite Deduperce from localStorage
	removeLocalFavourite(deduperce: Deduperce) {
		const deduperces: Deduperce[] = JSON.parse(localStorage.getItem('avf_item'));

		for (let i = 0; i < deduperces.length; i++) {
			if (deduperces[i].deduperceId === deduperce.deduperceId) {
				deduperces.splice(i, 1);
				break;
			}
		}
		// ReAdding the deduperces after remove
		localStorage.setItem('avf_item', JSON.stringify(deduperces));

		this.calculateLocalFavEmplCounts();
	}

	// Returning Local Deduperces Count
	calculateLocalFavEmplCounts() {
		this.navbarFavEmplCount = this.getLocalFavouriteDeduperces().length;
	}

	/*
   ----------  Cart Deduperce Function  ----------
  */

	// Adding new Deduperce to cart db if logged in else localStorage
	addToCart(data: Deduperce): void {
		let a: Deduperce[];

		a = JSON.parse(localStorage.getItem('avct_item')) || [];

		a.push(data);
		this.toastrService.wait('Adding Deduperce to Cart', 'Deduperce Adding to the cart');
		setTimeout(() => {
			localStorage.setItem('avct_item', JSON.stringify(a));
			this.calculateLocalCartEmplCounts();
		}, 500);
	}

	// Removing cart from local
	removeLocalCartDeduperce(deduperce: Deduperce) {
		const deduperces: Deduperce[] = JSON.parse(localStorage.getItem('avct_item'));

		for (let i = 0; i < deduperces.length; i++) {
			if (deduperces[i].deduperceId === deduperce.deduperceId) {
				deduperces.splice(i, 1);
				break;
			}
		}
		// ReAdding the deduperces after remove
		localStorage.setItem('avct_item', JSON.stringify(deduperces));

		this.calculateLocalCartEmplCounts();
	}

	// Fetching Locat CartsDeduperces
	getLocalCartDeduperces(): Deduperce[] {
		const deduperces: Deduperce[] = JSON.parse(localStorage.getItem('avct_item')) || [];

		return deduperces;
	}

	// returning LocalCarts Deduperce Count
	calculateLocalCartEmplCounts() {
		this.navbarCartCount = this.getLocalCartDeduperces().length;
	}
}

export class FavouriteDeduperce {
	deduperce: Deduperce;
	deduperceId: string;
	userId: string;
}
