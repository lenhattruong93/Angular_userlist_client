import { NgModule } from "@angular/core";
import {Users} from "./pages/users";
import { RouterModule, Routes } from "@angular/router";
import { UserService } from "./_share/services/userService";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";
import {AddNewUser} from "./pages/addNewUser"
import { FormsModule } from "@angular/forms";
import { FormTextInput } from "./_share/component/form/formTextInput";
import { FormButtons } from "./_share/component/form/formButtons";
let routes: Routes = [
    {path:"users",component:Users},
    {path:"",redirectTo:"users",pathMatch:"full"},
    {path:"addNewUser",component:AddNewUser}
];
@NgModule({
    imports: [HttpModule,FormsModule,CommonModule,RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations:[
       FormTextInput,
       FormButtons,
        /*
        common
        */ 
        Users,AddNewUser],
    providers:[UserService]
})
export class UserRoutes { }