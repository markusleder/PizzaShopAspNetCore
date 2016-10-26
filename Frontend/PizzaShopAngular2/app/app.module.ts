import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

import { routing } from "./app.routing";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./pizza/menu.component";
import { NavigationComponent } from "./navigation/navigation.component";

@NgModule({
    imports: [ BrowserModule, HttpModule, routing ],
    declarations: [ AppComponent, NavigationComponent, HomeComponent, MenuComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
