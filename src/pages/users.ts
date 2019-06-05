import { Component } from "@angular/core";
import { UserService } from "../_share/service/userService"
import { Router } from "@angular/router";
import { IUserService } from "../_share/service/iUserService";
import { IoCNames } from "../_share/enum"
import { ICacheManager } from "../_share/service/icacheManager";

@Component({
    templateUrl: "src/pages/users.html"
})
export class Users {
    public users: Array<any>;
    public router: Router;
    public userService: UserService; //Code them cho phan adduser
    constructor(userService: UserService, router: Router) {
        this.userService = userService;
        let self = this;
        self.router = router;// code them phan add user de router hoat dong
        self.reload()
        // userService.getUsers().then((respone:any)=>{
        //   self.users=respone;
        // }); 
    }
    public onAddNewUserClicked(): void {
        this.router.navigate(["addNewUser"]);
    }
    private reload() {
        let self = this;
        let cache: ICacheManager = window.ioc.resolve(IoCNames.ICachManager);
        if(cache.exist("localusers")){
            self.users=cache.get("localusers");
        }
        let userService: IUserService = window.ioc.resolve(IoCNames.IUserService);
        userService.getUsers()
            .then((item: Array<any>) => {
                self.users = item;
                cache.add("localusers",item)
            })
    };
    public onUserClicked(user: any) {
        console.log(user);

    }
}