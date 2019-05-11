import {CommonModule} from "@angular/common";
//import {BrowserModule} from "@angular/platfrom-browser";
import {HttpModule} from "@angular/http";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {Users} from "./pages/users"
import { UserService } from "./_share/service/userService";
let routes: Routes = [
    {path : "users",component: Users},
    {path:"",redirectTo:"users",pathMatch:"full"}
];
@NgModule({
    imports: [CommonModule,HttpModule,RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations:[Users],
    providers:[UserService]
})
export class UserRoutes { }