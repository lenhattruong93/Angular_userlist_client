System.register(["@angular/core", "@angular/router", "../_share/enum", "../_share/common/basePage"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
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
    var core_1, router_1, enum_1, basePage_1, Users;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (enum_1_1) {
                enum_1 = enum_1_1;
            },
            function (basePage_1_1) {
                basePage_1 = basePage_1_1;
            }
        ],
        execute: function () {
            Users = /** @class */ (function (_super) {
                __extends(Users, _super);
                function Users(router) {
                    var _this = _super.call(this) || this;
                    var self = _this;
                    self.router = router;
                    self.reload();
                    return _this;
                }
                Users.prototype.onENClicked = function () {
                    var resource = window.ioc.resolve(enum_1.IoCNames.IResourceManager);
                    resource.reload("en");
                };
                Users.prototype.onVNClicked = function () {
                    var resource = window.ioc.resolve(enum_1.IoCNames.IResourceManager);
                    resource.reload("vn");
                };
                Users.prototype.onAddNewUserClicked = function () {
                    this.router.navigate(["addNewUser"]);
                };
                Users.prototype.reload = function () {
                    var self = this;
                    var cache = window.ioc.resolve(enum_1.IoCNames.ICachManager);
                    if (cache.exist("localusers")) {
                        self.users = cache.get("localusers");
                    }
                    var userService = window.ioc.resolve(enum_1.IoCNames.IUserService);
                    userService.getUsers()
                        .then(function (item) {
                        self.users = item;
                        cache.add("localusers", item);
                    });
                    var cach1 = window.ioc.resolve(enum_1.IoCNames.ICachManager);
                    console.log(cach1.get("localusers"));
                };
                ;
                Users.prototype.onUserClicked = function (user) {
                    console.log(user);
                };
                Users = __decorate([
                    core_1.Component({
                        templateUrl: "src/pages/users.html"
                    }),
                    __metadata("design:paramtypes", [router_1.Router])
                ], Users);
                return Users;
            }(basePage_1.BasePage));
            exports_1("Users", Users);
        }
    };
});
//# sourceMappingURL=users.js.map