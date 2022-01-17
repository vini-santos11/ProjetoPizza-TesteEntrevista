import { PizzaService } from 'src/app/shared/services/pizza.service';
import { PizzaCardComponent } from './../../shared/components/pizza-card/pizza-card.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { PizzaComponent } from './pizza/pizza.component';
import { MatIconModule } from '@angular/material/icon';
import { NavbarModule } from './../../shared/components/navbar/navbar.module';
import { RestrictedAreaRoutingRoutingModule } from './restricted-area-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [
    LayoutComponent,
    PizzaComponent,
    HomeComponent,
    MenuComponent,
    PizzaCardComponent
  ],
  imports: [
    CommonModule,
    RestrictedAreaRoutingRoutingModule,
    NavbarModule,
    MatIconModule
  ],
  providers: [PizzaService]
})
export class RestrictedAreaModule { }
