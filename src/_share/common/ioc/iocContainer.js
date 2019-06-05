System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var IoCContainer;
    return {
        setters: [],
        execute: function () {
            IoCContainer = /** @class */ (function () {
                function IoCContainer() {
                    this.registrations = [];
                }
                IoCContainer.prototype.resolve = function (name) {
                    var instance;
                    this.registrations.forEach(function (item) {
                        if (item.name != name) {
                            return;
                        }
                        instance = new item.instanceOf();
                    });
                    return instance;
                    // if (name == "IUserService") {
                    //   return new UserService();
                    // }
                    // return null;
                };
                IoCContainer.prototype.import = function (iocRegs) {
                    this.registrations = iocRegs;
                };
                ;
                return IoCContainer;
            }());
            exports_1("IoCContainer", IoCContainer);
        }
    };
});
//# sourceMappingURL=iocContainer.js.map