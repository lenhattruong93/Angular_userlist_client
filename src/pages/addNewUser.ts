import { Component } from "@angular/core";
import { UserService } from "../_share/services/userService";
import { Router } from "@angular/router";
@Component({
    templateUrl:"src/pages/addNewUser.html"
})
export class AddNewUser{
    public model={
        firstName:"defaut",
        lastName:"defaut",
        userName:"defaut", 
    }
    private userService:UserService;
    private router:Router;
    constructor(userService:UserService,router:Router){
        this.userService=userService;    
        this.router=router;    
    }
    public onCancelClicked():void{
        this.router.navigate(["users"])
    }
    public onSaveClicked():void{
        let self =this;
        self.userService.addUser(this.model).then(()=>{
            self.router.navigate(["users"])
        });
    }
    public onFirstNameChanged(newFirstName:string):void{
        this.model.firstName=newFirstName;
    }
}