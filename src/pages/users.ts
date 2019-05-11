import { Component } from "@angular/core";
import {UserService} from "../_share/service/userService"
@Component({
    templateUrl:"src/pages/users.html"
})
export class Users{
    public users:Array<any>;
    constructor(userService:UserService){
        let self=this;
        userService.getUsers().then((respone:any)=>{
            self.users=respone;

        });
    }
}