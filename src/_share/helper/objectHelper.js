System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function extend(target, source) {
        if (!source) {
            return target;
        }
        for (var pro in source) {
            if (typeof (source[pro]) == "object") {
                target[pro] = extend(target[pro], source[pro]);
                continue;
            }
            target[pro] = source[pro];
        }
        return target;
    }
    var helper;
    return {
        setters: [],
        execute: function () {
            helper = {
                extend: extend
            };
            exports_1("default", helper);
            ;
        }
    };
});
//# sourceMappingURL=objectHelper.js.map