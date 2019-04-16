import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseCourses } from '../../../../shared/services/firebase/trainning/firebase.courses';

@Injectable()
export class EditCourseResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseCourses) { }

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
