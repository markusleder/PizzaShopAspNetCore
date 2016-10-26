import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Injectable } from "@angular/core";
import { Pizza } from "./dtos/pizza";
import { PizzaService } from "./services/pizza.service";

@Component({
    selector: "pizzashop-menu",
    templateUrl: "app/pizza/menu.component.html",
    providers: [PizzaService]
})
export class MenuComponent implements OnInit {

    pizzas: Pizza[];
    @Output() onAdded = new EventEmitter<Pizza>();

    constructor(private pizzaService: PizzaService) {
    }

    ngOnInit(): void {
        this.pizzaService.getPizzas().then(p => {
            this.pizzas = p;
        });        
    }

    addPizza(pizza: Pizza): void {
        console.log(pizza.name);
        this.onAdded.emit(pizza);
    }
}
