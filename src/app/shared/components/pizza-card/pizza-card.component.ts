import { Pizza } from './../../models/pizza';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.scss']
})
export class PizzaCardComponent implements OnInit {

  @Input() pizza?: Pizza;
  @Output() handleClick = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clicked() {
    this.handleClick.emit({
      pizzaId: this.pizza?.id
    });
  }
}
