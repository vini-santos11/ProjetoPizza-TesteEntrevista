import { PizzaService } from 'src/app/shared/services/pizza.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from 'src/app/shared/models/pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  public pizza?: Pizza | undefined;
  public pizzaId?: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.getPizza();
  }

  redirectTo(){
    this.router.navigate(['/menu'])
  }

  async getPizza() {
    this.pizzaId = this.activatedRoute.snapshot.params['id'];
    this.pizza = await this.pizzaService.getPizzasById(this.pizzaId);
  }
}
