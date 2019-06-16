System.register(["../service/userService", "../enum", "../service/memoryStrogeCachManager", "../service/resourceManager"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var userService_1, enum_1, memoryStrogeCachManager_1, resourceManager_1, ioc;
    return {
        setters: [
            function (userService_1_1) {
                userService_1 = userService_1_1;
            },
            function (enum_1_1) {
                enum_1 = enum_1_1;
            },
            function (memoryStrogeCachManager_1_1) {
                memoryStrogeCachManager_1 = memoryStrogeCachManager_1_1;
            },
            function (resourceManager_1_1) {
                resourceManager_1 = resourceManager_1_1;
            }
        ],
        execute: function () {
            ioc = [
                { name: enum_1.IoCNames.IUserService, instanceOf: userService_1.UserService, lifecycle: enum_1.IoCLifeCycle.Transient },
                { name: enum_1.IoCNames.ICachManager, instanceOf: memoryStrogeCachManager_1.MemoryStrogeCachManager, lifecycle: enum_1.IoCLifeCycle.Singleton },
                { name: enum_1.IoCNames.IResourceManager, instanceOf: resourceManager_1.ResourceManager, lifecycle: enum_1.IoCLifeCycle.Singleton }
            ];
            exports_1("default", ioc);
        }
    };
});
//# sourceMappingURL=ioc.js.map