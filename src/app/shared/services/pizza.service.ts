import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Pizza } from '../models/pizza';

@Injectable()
export class PizzaService {

  public jsonURL = "assets/data/pizza.json";
  public pizza?: Pizza;

    constructor(private http: HttpClient) {
    }

    getPizzas(): Observable<any>{
        return this.http.get(this.jsonURL);
    }

    async getPizzasById(pizzaId?: number): Promise<Pizza | undefined>
    {
      const data: Pizza[] =( await firstValueFrom(this.http.get(this.jsonURL)) as Pizza[]);
      data.forEach((element: Pizza) => {
        if(element.id == pizzaId)
          this.pizza = element;
      })
      return this.pizza;
    }
}
