System.register(["./ioCBuilderFactory"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ioCBuilderFactory_1, IoCContainer;
    return {
        setters: [
            function (ioCBuilderFactory_1_1) {
                ioCBuilderFactory_1 = ioCBuilderFactory_1_1;
            }
        ],
        execute: function () {
            IoCContainer = /** @class */ (function () {
                function IoCContainer() {
                    this.registrations = [];
                }
                // string : iocbuider window.ioc.resolve("IUserService")
                // object : resolve angular object window.ioc.resolve(Http)
                IoCContainer.prototype.resolve = function (arg) {
                    if (typeof arg == "function") {
                        return this.resolveAngularObject(arg);
                    }
                    //* let instance: any;
                    var builder;
                    this.registrations.forEach(function (item) {
                        if (item.name != arg) {
                            return;
                        }
                        builder = ioCBuilderFactory_1.IoCBuilderFactory.create(item);
                        //*  instance = new item.instanceOf();
                        // if (item.lifecycle == IoCLifeCycle.Transient) {
                        //     instance = new item.instanceOf();
                        //     return;
                        // }
                        // if(item.lifecycle==IoCLifeCycle.Singleton){
                        //     if(!item["instance"]){
                        //         item["instance"]=new item.instanceOf();
                        //     }
                        //     instance=item["instance"];
                        //     return; 
                        // }
                    });
                    return builder.build();
                    //* return instance;
                    // if (name == "IUserService") {
                    //   return new UserService();
                    // }
                    // return null;
                };
                IoCContainer.prototype.resolveAngularObject = function (arg) {
                    return this.injector.get(arg);
                    //* injector.get(arg hay Http)
                };
                IoCContainer.prototype.import = function (iocRegs) {
                    this.registrations = iocRegs;
                };
                ;
                IoCContainer.prototype.setInjector = function (injector) {
                    this.injector = injector;
                };
                return IoCContainer;
            }());
            exports_1("IoCContainer", IoCContainer);
        }
    };
});
//# sourceMappingURL=iocContainer.js.map