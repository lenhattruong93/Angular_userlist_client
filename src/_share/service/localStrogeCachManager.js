System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LocalStrogeCachManager;
    return {
        setters: [],
        execute: function () {
            LocalStrogeCachManager = /** @class */ (function () {
                function LocalStrogeCachManager() {
                }
                LocalStrogeCachManager.prototype.add = function (key, value) {
                    window.localStorage.setItem(key, JSON.stringify(value));
                };
                LocalStrogeCachManager.prototype.exist = function (key) {
                    return !!window.localStorage.getItem(key);
                };
                LocalStrogeCachManager.prototype.get = function (key) {
                    return JSON.parse(window.localStorage.getItem(key));
                };
                return LocalStrogeCachManager;
            }());
            exports_1("LocalStrogeCachManager", LocalStrogeCachManager);
        }
    };
});
//# sourceMappingURL=localStrogeCachManager.js.map