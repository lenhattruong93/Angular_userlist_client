System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PromiseStatus, Promise;
    return {
        setters: [],
        execute: function () {
            (function (PromiseStatus) {
                PromiseStatus[PromiseStatus["None"] = 0] = "None";
                PromiseStatus[PromiseStatus["Success"] = 1] = "Success";
            })(PromiseStatus || (PromiseStatus = {}));
            Promise = /** @class */ (function () {
                function Promise() {
                    this.status = PromiseStatus.None;
                }
                Promise.prototype.then = function (callBackFunc) {
                    this.successCallback = callBackFunc;
                    this.processCallback();
                    // if(this.status=="ss"){
                    //   this.successCallback(this.data);
                    //   }
                    return this;
                };
                Promise.prototype.resolve = function (data) {
                    this.status = PromiseStatus.Success;
                    // this.status = "ss";
                    this.data = data;
                    this.processCallback();
                    // if (!!this.successCallback) {
                    //   this.successCallback(data);
                    //}
                    return this;
                };
                Promise.prototype.processCallback = function () {
                    if (this.status == PromiseStatus.Success && !!this.successCallback) {
                        this.successCallback(this.data);
                    }
                };
                return Promise;
            }());
            exports_1("Promise", Promise);
        }
    };
});
//# sourceMappingURL=promise.js.map