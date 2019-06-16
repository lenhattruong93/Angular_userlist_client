System.register(["../models/promise", "@angular/http", "../helper/objectHelper"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var promise_1, http_1, objectHelper_1, ResourceManager;
    return {
        setters: [
            function (promise_1_1) {
                promise_1 = promise_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (objectHelper_1_1) {
                objectHelper_1 = objectHelper_1_1;
            }
        ],
        execute: function () {
            ResourceManager = /** @class */ (function () {
                function ResourceManager() {
                    this.lng = "en";
                }
                ResourceManager.prototype.loadLocale = function (locale) {
                    var self = this;
                    this.localeName = locale;
                    var def = new promise_1.Promise();
                    var uri = "/src/resources/locale/" + this.localeName + "." + self.lng + ".json";
                    var http = window.ioc.resolve(http_1.Http);
                    http.get(uri)
                        .map(function (respone) { return respone.json(); })
                        .subscribe(function (json) { return def.resolve(json); });
                    return def;
                };
                ;
                ResourceManager.prototype.import = function (json) {
                    this.locale = json;
                };
                ;
                ResourceManager.prototype.getLocale = function () {
                    return this.locale;
                };
                ResourceManager.prototype.reload = function (lng) {
                    var self = this;
                    self.lng = lng;
                    var def = new promise_1.Promise();
                    var uri = "/src/resources/locale/" + this.localeName + "." + self.lng + ".json";
                    var http = window.ioc.resolve(http_1.Http);
                    http.get(uri)
                        .map(function (respone) { return respone.json(); })
                        .subscribe(function (json) {
                        objectHelper_1.default.extend(self.locale, json);
                        def.resolve(json);
                    });
                    return def;
                };
                return ResourceManager;
            }());
            exports_1("ResourceManager", ResourceManager);
        }
    };
});
//# sourceMappingURL=resourceManager.js.map