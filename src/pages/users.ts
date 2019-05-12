import { Component } from "@angular/core";
import {UserService} from "../_share/service/userService"
import { Router } from "@angular/router";
@Component({
    templateUrl:"src/pages/users.html"
})
export class Users{
    public users:Array<any>;
    public router:Router; //Code them cho phan adduser
    constructor(userService:UserService,router:Router){
        let self=this;
        self.router=router;// code them phan add user de router hoat dong
        userService.getUsers().then((respone:any)=>{
            self.users=respone;

        });
   
    }

     public onAddNewUserClicked():void {
        this.router.navigate(["addNewUser"]);
    }
     public onUserClicked(user:any) {
         console.log(user);

     }
}