import { Component } from "@angular/core";
import { UserService } from "../_share/service/userService";
import { Router } from "@angular/router";

@Component({
    templateUrl: "src/pages/addNewUser.html"
})
export class AddNewUser {
    private router: Router;// khai bao de su dung router
    private user: any = {
        fistName: "",
        lastName: "",
        userName: ""
    };
    private userService: UserService;
    constructor(userService: UserService,router : Router) {
        this.userService = userService;
        this.router= router;
    }
    public onSaveClicked(): void {
        let self = this;
        this.userService.addNewUser(this.user).then(() => {
            self.router.navigate(["users"]);
        });
    }
}