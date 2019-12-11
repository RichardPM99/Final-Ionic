import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { TestComponent } from './test/test.component';


  var firebaseConfig = {
    apiKey: "AIzaSyAMmt9piwov4JcIwkcLHFnw8WWZnUEl5B4",
    authDomain: "ionicproyect-305c5.firebaseapp.com",
    databaseURL: "https://ionicproyect-305c5.firebaseio.com",
    projectId: "ionicproyect-305c5",
    storageBucket: "ionicproyect-305c5.appspot.com",
    messagingSenderId: "502626751729",
    appId: "1:502626751729:web:49364dc2f13fec3ee94550"
  };

@NgModule({
  declarations: [AppComponent,LoginComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule, ReactiveFormsModule,AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
