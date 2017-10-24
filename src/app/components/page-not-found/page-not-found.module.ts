import { NgModule } from '@angular/core';
import { PageNotFoundRoutes } from './page-not-found.routing';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [
    PageNotFoundRoutes
  ],
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent]
})
export class PageNotFoundModule { }
