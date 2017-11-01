import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SignUpComponent } from './containers/sign-up/sign-up.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: SignUpComponent }])],
  exports: [RouterModule],
})
export class SignUpRoutingModule {}
