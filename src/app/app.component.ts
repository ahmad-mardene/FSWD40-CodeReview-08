import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { FirebaseService } from './services/firebase.services';
import { AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]

})
export class AppComponent implements OnInit {
   items: item[];
   gender: gender[];
   appState: string;

 constructor(private _firebaseService: FirebaseService) {
}
  ngOnInit() {
  	this.appState = 'default'

  	 this._firebaseService.getitems().subscribe(items => {

     this.items = items;

   });

   this._firebaseService.getgender().subscribe(gender => {

     this.gender = gender;

   });

 }

 filtergender(gender) {
  this._firebaseService.getitems(gender).subscribe(items=> {
    this.items = items;
  })
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
