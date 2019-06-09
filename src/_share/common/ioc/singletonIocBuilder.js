System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SingletonIocBuilder;
    return {
        setters: [],
        execute: function () {
            SingletonIocBuilder = /** @class */ (function () {
                function SingletonIocBuilder(item) {
                    this.item = item;
                }
                SingletonIocBuilder.prototype.build = function () {
                    if (!this.item["instance"]) {
                        this.item["instance"] = new this.item.instanceOf();
                    }
                    return this.item["instance"];
                };
                return SingletonIocBuilder;
            }());
            exports_1("SingletonIocBuilder", SingletonIocBuilder);
        }
    };
});
//# sourceMappingURL=singletonIocBuilder.js.map