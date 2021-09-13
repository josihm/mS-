import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './recursosCompartidos/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from './recursosCompartidos/header/material/mat.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AuthService } from './recursosCompartidos/servicios/auth.service';
import firebase from "firebase/app";
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { ServiciosService } from './recursosCompartidos/servicios/servicios.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, FormsModule,
    MatModule,
    AngularFireModule.initializeApp(environment.configuracionFirebase),
    AngularFirestoreModule,
  ],
  providers: [AngularFirestore, AuthService, ServiciosService,
    {
      provide: ErrorStateMatcher, 
      useClass: ShowOnDirtyErrorStateMatcher
    },
  ],
  bootstrap: [AppComponent,]
})
export class AppModule { }
