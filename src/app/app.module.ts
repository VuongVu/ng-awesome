import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { SignInComponent } from './containers/sign-in/sign-in.component';
import { NavBarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SignInComponent, NavBarComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-awesome' }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
