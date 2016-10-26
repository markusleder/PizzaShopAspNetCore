import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./pizza/menu.component";

const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "menu",
        component: MenuComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
