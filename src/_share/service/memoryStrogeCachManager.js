System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MemoryStrogeCachManager;
    return {
        setters: [],
        execute: function () {
            MemoryStrogeCachManager = /** @class */ (function () {
                function MemoryStrogeCachManager() {
                    this.data = {};
                }
                MemoryStrogeCachManager.prototype.add = function (key, value) {
                    this.data[key] = value;
                };
                MemoryStrogeCachManager.prototype.exist = function (key) {
                    return this.data.hasOwnProperty(key);
                };
                MemoryStrogeCachManager.prototype.get = function (key) {
                    return this.data[key];
                };
                return MemoryStrogeCachManager;
            }());
            exports_1("MemoryStrogeCachManager", MemoryStrogeCachManager);
        }
    };
});
//# sourceMappingURL=memoryStrogeCachManager.js.map