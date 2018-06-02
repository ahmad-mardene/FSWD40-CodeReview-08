import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig ={
 // You will have this information from firebase .
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
