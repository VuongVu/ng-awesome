import { NgModule } from '@angular/core';

import { SignInComponent } from './containers/sign-in/sign-in.component';
import { SignInRoutingModule } from './sign-in.routing';

@NgModule({
  imports: [SignInRoutingModule],
  declarations: [SignInComponent],
  providers: [],
})
export class SignInModule {}
