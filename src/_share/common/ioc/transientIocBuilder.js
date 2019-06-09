System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TransientIocBuilder;
    return {
        setters: [],
        execute: function () {
            TransientIocBuilder = /** @class */ (function () {
                function TransientIocBuilder(item) {
                    this.item = item;
                }
                TransientIocBuilder.prototype.build = function () {
                    return new this.item.instanceOf();
                };
                return TransientIocBuilder;
            }());
            exports_1("TransientIocBuilder", TransientIocBuilder);
        }
    };
});
//# sourceMappingURL=transientIocBuilder.js.map