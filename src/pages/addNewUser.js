System.register(["@angular/core", "../_share/services/userService", "@angular/router"], function (exports_1, context_1) {
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
    var core_1, userService_1, router_1, AddNewUser;
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
            AddNewUser = /** @class */ (function () {
                function AddNewUser(userService, router) {
                    this.model = {
                        firstName: "defaut",
                        lastName: "defaut",
                        userName: "defaut",
                    };
                    this.userService = userService;
                    this.router = router;
                }
                AddNewUser.prototype.onCancelClicked = function () {
                    this.router.navigate(["users"]);
                };
                AddNewUser.prototype.onSaveClicked = function () {
                    var self = this;
                    self.userService.addUser(this.model).then(function () {
                        self.router.navigate(["users"]);
                    });
                };
                AddNewUser.prototype.onFirstNameChanged = function (newFirstName) {
                    this.model.firstName = newFirstName;
                };
                AddNewUser = __decorate([
                    core_1.Component({
                        templateUrl: "src/pages/addNewUser.html"
                    }),
                    __metadata("design:paramtypes", [userService_1.UserService, router_1.Router])
                ], AddNewUser);
                return AddNewUser;
            }());
            exports_1("AddNewUser", AddNewUser);
        }
    };
});
//# sourceMappingURL=addNewUser.js.map