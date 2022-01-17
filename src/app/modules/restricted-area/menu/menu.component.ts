import { Router } from '@angular/router';
import { Pizza } from './../../../shared/models/pizza';
import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/shared/services/pizza.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public pizzas: Pizza[] = [];

  constructor(
    private pizzaService: PizzaService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadPizzas();
  }

  loadPizzas() {
    this.pizzaService.getPizzas().subscribe(data => {
      this.pizzas = data;
    })
  }

  clicked($event: {pizzaId: number}) {
    this.router.navigate([`/pizzas/${$event.pizzaId}`]);
  }
}
