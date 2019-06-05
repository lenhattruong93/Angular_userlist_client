import { UserService } from "../service/userService";
import { IoCNames } from "../enum";
import { LocalStrogeCachManager } from "../service/localStrogeCachManager"

let ioc: Array<IIocRegistration> = [
    { name: IoCNames.IUserService, instanceOf: UserService },
    { name: IoCNames.ICachManager, instanceOf: LocalStrogeCachManager }
];
export default ioc;