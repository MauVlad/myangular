import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseConcepts } from '../../../../../../shared/services/firebase/trainning/firebase.concepts';

@Injectable()
export class EditConceptResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseConcepts) { }

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
