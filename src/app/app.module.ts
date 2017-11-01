import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'ng-awesome' }),
    SharedModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'ng-awesome-fs'),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
