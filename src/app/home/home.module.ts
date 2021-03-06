import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './containers/home/home.component';
import { HomeRoutingModule } from './home.routing';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
