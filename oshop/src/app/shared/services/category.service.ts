import { Injectable } from '@angular/core';
import { query } from '@angular/core/src/render3';
import { defineBase } from '@angular/core/src/render3';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    //return this.db.list('/categories', ref => ref.orderByChild('name')).valueChanges();
    return this.db.list('/categories', ref => ref.orderByChild('name')).snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }));
  }
}
