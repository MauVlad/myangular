import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseEmployees } from '../../../../shared/services/firebase/timelog/firebase.employees';

@Injectable()
export class EditEmployeesResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseEmployees) { }

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
