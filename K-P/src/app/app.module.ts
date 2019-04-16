import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { StorageService } from "./shared/services/storage/storage.service";
import { HttpModule } from '@angular/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseProducts } from './shared/services/firebase/pos/firebase.products';
import { FirebaseEmployees } from './shared/services/firebase/timelog/firebase.employees';

import { MatInputModule, MatButtonModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
//import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
 
    LazyLoadModule,
    CoreModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
 //   ReactiveFormsModule, 
 //   FormsModule
  ],
  providers: [StorageService, FirebaseProducts, FirebaseEmployees],
  bootstrap: [AppComponent]
})
export class AppModule { }
