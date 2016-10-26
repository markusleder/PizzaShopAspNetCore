import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { Pizza } from "../dtos/pizza";
import { pizzas } from "./pizzas-mock";

@Injectable()
export class PizzaService {

    private pizzasUrl = ""; // add URL to web api. If empty --> mock data will be used

    constructor(private http: Http) { }

    getPizzas(): Promise<Pizza[]> {
        if (this.pizzasUrl) {
            return this.http.get(this.pizzasUrl)
                .toPromise()
                .then(response => response.json().data as Pizza[])
                .catch(this.handleError);
        } else {
            return Promise.resolve(pizzas);
        }
    }

    private handleError(error: any) {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    }
}