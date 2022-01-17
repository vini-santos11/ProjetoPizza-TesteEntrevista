import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('src/app/modules/authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('src/app/modules/restricted-area/restricted-area.module').then(m => m.RestrictedAreaModule),

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
