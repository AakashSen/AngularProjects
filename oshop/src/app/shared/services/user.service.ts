import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AppUser } from 'shared/models/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private db : AngularFireDatabase) { }

  save(user : firebase.User) {
     this.db.object('/users/'+ user.uid).update({
        name : user.displayName,
        email : user.email
     });    
  }

  get(uid : String) : Observable<AppUser> {
   return this.db.object<AppUser>('/users/'+ uid).valueChanges();
  }
}
