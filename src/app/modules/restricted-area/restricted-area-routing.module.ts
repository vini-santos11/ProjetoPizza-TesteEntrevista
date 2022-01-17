import { LayoutComponent } from './layout/layout.component';
import { PizzaComponent } from './pizza/pizza.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CanActivateRoute } from 'src/app/core/guards/permission.guard';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [CanActivateRoute],
      },
      {
        path: 'menu',
        component: MenuComponent,
        canActivate: [CanActivateRoute],
      },
      {
        path: 'pizzas/:id',
        component: PizzaComponent,
        canActivate: [CanActivateRoute]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CanActivateRoute]
})
export class RestrictedAreaRoutingRoutingModule { }
