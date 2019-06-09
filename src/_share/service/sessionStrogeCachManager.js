System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SessionStrogeCachManager;
    return {
        setters: [],
        execute: function () {
            SessionStrogeCachManager = /** @class */ (function () {
                function SessionStrogeCachManager() {
                }
                SessionStrogeCachManager.prototype.add = function (key, value) {
                    window.sessionStorage.setItem(key, JSON.stringify(value));
                };
                SessionStrogeCachManager.prototype.exist = function (key) {
                    return !!window.sessionStorage.getItem(key);
                };
                SessionStrogeCachManager.prototype.get = function (key) {
                    return JSON.parse(window.sessionStorage.getItem(key));
                };
                return SessionStrogeCachManager;
            }());
            exports_1("SessionStrogeCachManager", SessionStrogeCachManager);
        }
    };
});
//# sourceMappingURL=sessionStrogeCachManager.js.map