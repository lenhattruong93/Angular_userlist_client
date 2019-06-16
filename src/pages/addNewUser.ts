import { Component } from "@angular/core";
import { UserService } from "../_share/service/userService";
import { Router } from "@angular/router";
import { IUserService } from "../_share/service/iUserService";
import { IoCNames } from "../_share/enum";

@Component({
    templateUrl: "src/pages/addNewUser.html"
})
export class AddNewUser {
    private router: Router;// khai bao de su dung router
    private user: any = {
        firstName: "",
        lastName: "",
        userName: ""
    };
   // private userService: UserService;
    constructor(userService: UserService, router: Router) {
       // this.userService = userService;
        this.router = router;
    }
    public onSaveClicked(): void {
       let self = this;
        let userService: IUserService = window.ioc.resolve(IoCNames.IUserService);
        userService.addNewUser(this.user).then(() => {
            self.router.navigate(["users"]);
        });
    }
    public onCancleClicked():void{
        let self=this;
        self.router.navigate(["users"])
    }
}