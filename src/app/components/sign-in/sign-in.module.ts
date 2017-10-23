import { NgModule } from '@angular/core';

import { SignInComponent } from './sign-in.component';
import { SignInRoutingModule } from './sign-in.routing';

@NgModule({
  imports: [SignInRoutingModule],
  declarations: [SignInComponent],
  exports: [SignInComponent],
})
export class SignInModule {}
