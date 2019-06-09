import { UserService } from "../../service/userService";

export class IoCContainer {
    private registrations: Array<IIocRegistration> = [];
    public resolve(name: string): any {
            let instance: any;
        this.registrations.forEach((item: IIocRegistration) => {
            {
                if (item.name != name) { return; }
                instance = new item.instanceOf();
            }
            
        });
        return instance;
        // if (name == "IUserService") {
        //   return new UserService();
        // }
        // return null;
    }
    public import(iocRegs: Array<IIocRegistration>): void {
        this.registrations = iocRegs;
    };
}