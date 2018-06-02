import {Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
@Injectable()
export class FirebaseService{
  items: FirebaseListObservable<item[]>;
  gender: FirebaseListObservable<gender[]>;
  
  constructor(private af: AngularFireDatabase) {
    
  }
  // getitems() {
  //     this.item= this.af.list('/item') as FirebaseListObservable<item[]>;
  //     return this.item;
  // }
 getitems(gender: string = null) {
      if (gender != null) {
          this.items = this.af.list('/item', {
              query: {
                  orderByChild: 'gender',
                  equalTo: gender
              }
          }) as FirebaseListObservable<item[]>;
      } else {
          this.items= this.af.list('/item') as FirebaseListObservable<item[]>;
      }
      return this.items;
  }
  getgender() {
      this.gender= this.af.list('/gender') as FirebaseListObservable<gender[]>;
      return this.gender;
  }
}
export interface item {
  $key?: string;
  name?: string;
  surname?: string;
  image?: string;
  gender?: string;
  age?: number;
  inRelation?: boolean;
  
}
export interface gender {
  $key?: string;
  name?: string;
}