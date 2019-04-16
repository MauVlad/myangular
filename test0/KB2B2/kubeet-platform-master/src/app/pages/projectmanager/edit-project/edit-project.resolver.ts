import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseProjects } from '../../../shared/services/firebase/projectmanager/firebase.projects';

@Injectable()
export class EditProjectResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseProjects) { }

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
