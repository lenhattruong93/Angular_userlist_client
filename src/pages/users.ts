import { Component } from "@angular/core";
import {UserService} from "../_share/services/userService"
import { Router } from "@angular/router";
@Component({
    templateUrl:"src/pages/users.html"
})
export class Users{
    public users:Array<any>=[];
    public router:Router;
    constructor(userService:UserService,router:Router){
        this.router=router;
        userService.getUsers().then((respone:any)=>{
            this.users=respone;
        });      
    };
    public onEditUserClicked():void{

    }
    public onDeleteUserClicked():void{

    }
    public onViewUserClicked():void{

    }
    public onAddNewUser():void{
        this.router.navigate(["addNewUser"]);

    }
}