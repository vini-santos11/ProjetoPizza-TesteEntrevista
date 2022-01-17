export class Pizza {
  id: number;
  pizza: string;
  description: string;

  constructor(id:number, pizza: string, description: string){
      this.id = id;
      this.pizza = pizza;
      this.description = description;
  }
}
