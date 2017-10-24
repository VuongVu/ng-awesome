import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './components/home/home.module#HomeModule',
  },
  {
    path: 'sign-in',
    loadChildren: './components/sign-in/sign-in.module#SignInModule',
  },
  {
    path: 'sign-up',
    loadChildren: './components/sign-up/sign-up.module#SignUpModule',
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
  {
    path: '404',
    loadChildren:
      './components/page-not-found/page-not-found.module#PageNotFoundModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
