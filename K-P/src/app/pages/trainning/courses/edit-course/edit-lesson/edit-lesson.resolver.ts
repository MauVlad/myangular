import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseLessons } from '../../../../../shared/services/firebase/trainning/firebase.lessons';

@Injectable()
export class EditLessonResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseLessons) { }

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
