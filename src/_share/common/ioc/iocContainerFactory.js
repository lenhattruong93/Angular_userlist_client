System.register(["./iocContainer", "../../config/ioc"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var iocContainer_1, ioc_1, IoCContainerFactory;
    return {
        setters: [
            function (iocContainer_1_1) {
                iocContainer_1 = iocContainer_1_1;
            },
            function (ioc_1_1) {
                ioc_1 = ioc_1_1;
            }
        ],
        execute: function () {
            IoCContainerFactory = /** @class */ (function () {
                function IoCContainerFactory() {
                }
                IoCContainerFactory.create = function () {
                    var container = new iocContainer_1.IoCContainer();
                    container.import(ioc_1.default);
                    return container;
                };
                return IoCContainerFactory;
            }());
            exports_1("IoCContainerFactory", IoCContainerFactory);
        }
    };
});
//# sourceMappingURL=iocContainerFactory.js.map