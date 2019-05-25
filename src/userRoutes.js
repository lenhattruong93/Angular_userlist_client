System.register(["@angular/core", "./pages/users", "@angular/router", "./_share/services/userService", "@angular/http", "@angular/common", "./pages/addNewUser", "@angular/forms", "./_share/component/form/formTextInput"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, users_1, router_1, userService_1, http_1, common_1, addNewUser_1, forms_1, formTextInput_1, routes, UserRoutes;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (users_1_1) {
                users_1 = users_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (userService_1_1) {
                userService_1 = userService_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (addNewUser_1_1) {
                addNewUser_1 = addNewUser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (formTextInput_1_1) {
                formTextInput_1 = formTextInput_1_1;
            }
        ],
        execute: function () {
            routes = [
                { path: "users", component: users_1.Users },
                { path: "", redirectTo: "users", pathMatch: "full" },
                { path: "addNewUser", component: addNewUser_1.AddNewUser }
            ];
            UserRoutes = /** @class */ (function () {
                function UserRoutes() {
                }
                UserRoutes = __decorate([
                    core_1.NgModule({
                        imports: [http_1.HttpModule, forms_1.FormsModule, common_1.CommonModule, router_1.RouterModule.forRoot(routes)],
                        exports: [router_1.RouterModule],
                        declarations: [
                            formTextInput_1.FormTextInput,
                            /*
                            common
                            */
                            users_1.Users, addNewUser_1.AddNewUser
                        ],
                        providers: [userService_1.UserService]
                    })
                ], UserRoutes);
                return UserRoutes;
            }());
            exports_1("UserRoutes", UserRoutes);
        }
    };
});
//# sourceMappingURL=userRoutes.js.map