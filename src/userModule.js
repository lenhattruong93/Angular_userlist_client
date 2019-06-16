System.register(["@angular/core", "@angular/platform-browser", "@angular/forms", "./userRoutes", "./layout", "./_share/enum"], function (exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, userRoutes_1, layout_1, enum_1, UserModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (userRoutes_1_1) {
                userRoutes_1 = userRoutes_1_1;
            },
            function (layout_1_1) {
                layout_1 = layout_1_1;
            },
            function (enum_1_1) {
                enum_1 = enum_1_1;
            }
        ],
        execute: function () {
            UserModule = /** @class */ (function () {
                function UserModule(injector, appRef) {
                    this.appRef = appRef;
                    window.ioc.setInjector(injector);
                }
                UserModule.prototype.ngDoBootstrap = function () {
                    var self = this;
                    var resource = window.ioc.resolve(enum_1.IoCNames.IResourceManager);
                    resource.loadLocale("users").then(function (json) {
                        resource.import(json);
                        self.appRef.bootstrap(layout_1.Layout); /// Se hoi lai luc offline
                    });
                };
                UserModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            userRoutes_1.UserRoutes
                        ],
                        declarations: [layout_1.Layout],
                        entryComponents: [layout_1.Layout]
                        // bootstrap: [Layout]
                    }),
                    __metadata("design:paramtypes", [core_1.Injector, core_1.ApplicationRef])
                ], UserModule);
                return UserModule;
            }());
            exports_1("UserModule", UserModule);
        }
    };
});
//# sourceMappingURL=userModule.js.map