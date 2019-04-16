import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseMembers } from '../../../../shared/services/firebase/projectmanager/firebase.members';

@Injectable()
export class EditMemberResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseMembers) { }

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
