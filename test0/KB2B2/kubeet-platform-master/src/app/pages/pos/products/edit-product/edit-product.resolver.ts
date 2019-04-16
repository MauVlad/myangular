import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseProducts } from '../../../../shared/services/firebase/pos/firebase.products';

@Injectable()
export class EditProductResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseProducts) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let userId = route.paramMap.get('id');
      this.firebaseService.getUser(userId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
