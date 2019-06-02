System.register(["@angular/core", "../_share/service/userService", "@angular/router"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, userService_1, router_1, Users;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (userService_1_1) {
                userService_1 = userService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            Users = /** @class */ (function () {
                function Users(userService, router) {
                    this.userService = userService;
                    var self = this;
                    self.router = router; // code them phan add user de router hoat dong
                    self.reload();
                    // userService.getUsers().then((respone:any)=>{
                    //   self.users=respone;
                    // }); 
                }
                Users.prototype.onAddNewUserClicked = function () {
                    this.router.navigate(["addNewUser"]);
                };
                Users.prototype.reload = function () {
                    var self = this;
                    self.userService.getUsers().then(function (item) {
                        console.log(item);
                        self.users = item;
                    });
                };
                ;
                Users.prototype.onUserClicked = function (user) {
                    console.log(user);
                };
                Users = __decorate([
                    core_1.Component({
                        templateUrl: "src/pages/users.html"
                    }),
                    __metadata("design:paramtypes", [userService_1.UserService, router_1.Router])
                ], Users);
                return Users;
            }());
            exports_1("Users", Users);
        }
    };
});
//# sourceMappingURL=users.js.map