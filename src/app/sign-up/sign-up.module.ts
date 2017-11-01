import { NgModule } from '@angular/core';

import { SignUpComponent } from './containers/sign-up/sign-up.component';
import { SignUpRoutingModule } from './sign-up.routing';

@NgModule({
  imports: [SignUpRoutingModule],
  declarations: [SignUpComponent],
  providers: [],
})
export class SignUpModule {}
