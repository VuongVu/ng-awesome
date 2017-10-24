import { NgModule } from '@angular/core';
import { SignUpRoutingModule } from './sign-up.routing';
import { SignUpComponent } from './sign-up.component';

@NgModule({
  imports: [SignUpRoutingModule],
  declarations: [SignUpComponent],
  exports: [SignUpComponent],
})
export class SignUpModule {}
