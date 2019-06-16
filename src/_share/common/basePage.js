System.register(["../enum"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var enum_1, BasePage;
    return {
        setters: [
            function (enum_1_1) {
                enum_1 = enum_1_1;
            }
        ],
        execute: function () {
            BasePage = /** @class */ (function () {
                function BasePage() {
                    var resource = window.ioc.resolve(enum_1.IoCNames.IResourceManager);
                    this.i18n = resource.getLocale();
                }
                return BasePage;
            }());
            exports_1("BasePage", BasePage);
        }
    };
});
//# sourceMappingURL=basePage.js.map