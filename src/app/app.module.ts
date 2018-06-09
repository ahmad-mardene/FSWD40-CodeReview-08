import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig ={
  apiKey: "AIzaSyAbyeJNHMcY_kwajMDQXjM3t-iKSN3GwM4",
    authDomain: "dating-app-892cc.firebaseapp.com",
    databaseURL: "https://dating-app-892cc.firebaseio.com",
    projectId: "dating-app-892cc",
    storageBucket: "dating-app-892cc.appspot.com",
    messagingSenderId: "363692606630"
};

@NgModule({
 declarations: [
   AppComponent
 ],
 imports: [
   BrowserModule,
   AngularFireModule.initializeApp(firebaseConfig),
   AngularFireAuthModule,
   AngularFireDatabaseModule 
  ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
