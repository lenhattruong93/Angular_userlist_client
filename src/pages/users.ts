import { Component } from "@angular/core";
import { UserService } from "../_share/service/userService"
import { Router } from "@angular/router";
import { IUserService } from "../_share/service/iUserService";
import { IoCNames } from "../_share/enum"
import { ICacheManager } from "../_share/service/icacheManager";
import { BasePage } from "../_share/common/basePage";
import { IResourceManager } from "../_share/service/iresourceManager";
@Component({
    templateUrl: "src/pages/users.html"
})
export class Users extends BasePage { 
    public users: Array<any>;
    public router: Router;
    constructor(router: Router) {
        super()
        let self = this;
        self.router = router;
        self.reload()
    }
    public onENClicked():void{
        let resource:IResourceManager= window.ioc.resolve(IoCNames.IResourceManager);
        resource.reload("en");
    }
    public onVNClicked():void{
        let resource:IResourceManager= window.ioc.resolve(IoCNames.IResourceManager);
        resource.reload("vn");
    }
    public onAddNewUserClicked(): void {
        this.router.navigate(["addNewUser"]);
    }
    private reload() {
        let self = this;
        let cache: ICacheManager = window.ioc.resolve(IoCNames.ICachManager);
        if (cache.exist("localusers")) {
            self.users = cache.get("localusers");
        }
        let userService: IUserService = window.ioc.resolve(IoCNames.IUserService);
        userService.getUsers()
            .then((item: Array<any>) => {
                self.users = item;
                cache.add("localusers", item)
            });
        let cach1: ICacheManager = window.ioc.resolve(IoCNames.ICachManager);
        console.log(cach1.get("localusers"));
    };
    public onUserClicked(user: any) {
        console.log(user);
    }
}