import {CommonModule} from "@angular/common";
//import {BrowserModule} from "@angular/platfrom-browser";
import {HttpModule} from "@angular/http";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {Users} from "./pages/users"
import { UserService } from "./_share/service/userService";
import { AddNewUser } from "./pages/addNewUser";
import { FormsModule } from "@angular/forms";
let routes: Routes = [
    {path : "users",component: Users},
    {path:"",redirectTo:"users",pathMatch:"full"},
    {path:"addNewUser",component: AddNewUser}
];
@NgModule({
    imports: [CommonModule,HttpModule,RouterModule.forRoot(routes),FormsModule],
    exports: [RouterModule],
    declarations:[Users,AddNewUser],
    providers:[UserService]
})
export class UserRoutes { }