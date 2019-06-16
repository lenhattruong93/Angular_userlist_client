System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var IoCNames, IoCLifeCycle;
    return {
        setters: [],
        execute: function () {
            exports_1("IoCNames", IoCNames = {
                IUserService: "IUserService",
                ICachManager: "ICachManager",
                IResourceManager: "IResourceManager"
            });
            (function (IoCLifeCycle) {
                IoCLifeCycle[IoCLifeCycle["Transient"] = 1] = "Transient";
                IoCLifeCycle[IoCLifeCycle["Singleton"] = 2] = "Singleton";
            })(IoCLifeCycle || (IoCLifeCycle = {}));
            exports_1("IoCLifeCycle", IoCLifeCycle);
        }
    };
});
//# sourceMappingURL=enum.js.map