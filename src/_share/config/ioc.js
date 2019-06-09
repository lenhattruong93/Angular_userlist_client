System.register(["../service/userService", "../enum", "../service/memoryStrogeCachManager"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var userService_1, enum_1, memoryStrogeCachManager_1, ioc;
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
            }
        ],
        execute: function () {
            ioc = [
                { name: enum_1.IoCNames.IUserService, instanceOf: userService_1.UserService },
                { name: enum_1.IoCNames.ICachManager, instanceOf: memoryStrogeCachManager_1.MemoryStrogeCachManager }
            ];
            exports_1("default", ioc);
        }
    };
});
//# sourceMappingURL=ioc.js.map