import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseTeachers } from '../../../../shared/services/firebase/trainning/firebase.teachers';

@Injectable()
export class EditTeacherResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseTeachers) { }

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
