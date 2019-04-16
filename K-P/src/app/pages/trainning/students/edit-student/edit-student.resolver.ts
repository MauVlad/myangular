import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseStudents } from '../../../../shared/services/firebase/trainning/firebase.students';

@Injectable()
export class EditStudentResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseStudents) { }

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
