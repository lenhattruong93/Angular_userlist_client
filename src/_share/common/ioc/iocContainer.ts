import { UserService } from "../../service/userService";
import { IoCLifeCycle } from "../../enum";
import { IIoCBuilder } from "./iioiCBuilder";
import { IoCBuilderFactory } from "./ioCBuilderFactory";
import { Http } from "@angular/http";

export class IoCContainer {
    private injector:any;
    private registrations: Array<IIocRegistration> = [];
    // string : iocbuider window.ioc.resolve("IUserService")
    // object : resolve angular object window.ioc.resolve(Http)
    public resolve(arg: any): any {
        if(typeof arg =="function"){
            return this.resolveAngularObject(arg)
        }
       //* let instance: any;
       let builder:IIoCBuilder;
        this.registrations.forEach((item: IIocRegistration) => {
            if (item.name != arg) { return; }
            builder=IoCBuilderFactory.create(item)
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
    }
    private resolveAngularObject(arg:any):any{
       return this.injector.get(arg)
        //* injector.get(arg hay Http)
    }
    public import(iocRegs: Array<IIocRegistration>): void {
        this.registrations = iocRegs;
    };
    public setInjector(injector:any){
        this.injector=injector;
    }
}