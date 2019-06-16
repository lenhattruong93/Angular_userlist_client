import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IUserService } from "../_share/service/iUserService";
import { IoCNames } from "../_share/enum";
import { BasePage } from "../_share/common/basePage";
@Component({
    templateUrl: "src/pages/addNewUser.html"
})
export class AddNewUser extends BasePage  {
    private router: Router;// khai bao de su dung router
    private user: any = {
        firstName: "",
        lastName: "",
        userName: ""
    };
    constructor(router: Router) {
        super()
        this.router = router;
    }
    public onSaveClicked(): void {
        let self = this;
        let userService: IUserService = window.ioc.resolve(IoCNames.IUserService);
        userService.addNewUser(this.user).then(() => {
            self.router.navigate(["users"]);
        });
    }
    public onCancleClicked(): void {
        let self = this;
        self.router.navigate(["users"])
    }
}