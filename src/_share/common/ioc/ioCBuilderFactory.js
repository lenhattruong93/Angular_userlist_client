System.register(["../../enum", "./transientIocBuilder", "./singletonIocBuilder"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var enum_1, transientIocBuilder_1, singletonIocBuilder_1, IoCBuilderFactory;
    return {
        setters: [
            function (enum_1_1) {
                enum_1 = enum_1_1;
            },
            function (transientIocBuilder_1_1) {
                transientIocBuilder_1 = transientIocBuilder_1_1;
            },
            function (singletonIocBuilder_1_1) {
                singletonIocBuilder_1 = singletonIocBuilder_1_1;
            }
        ],
        execute: function () {
            IoCBuilderFactory = /** @class */ (function () {
                function IoCBuilderFactory() {
                }
                IoCBuilderFactory.create = function (item) {
                    switch (item.lifecycle) {
                        case enum_1.IoCLifeCycle.Transient:
                            return new transientIocBuilder_1.TransientIocBuilder(item);
                        case enum_1.IoCLifeCycle.Singleton:
                            return new singletonIocBuilder_1.SingletonIocBuilder(item);
                    }
                };
                return IoCBuilderFactory;
            }());
            exports_1("IoCBuilderFactory", IoCBuilderFactory);
        }
    };
});
//# sourceMappingURL=ioCBuilderFactory.js.map