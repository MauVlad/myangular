import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseTasks } from '../../../../shared/services/firebase/projectmanager/firebase.tasks';

@Injectable()
export class EditTaskResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseTasks) { }

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
