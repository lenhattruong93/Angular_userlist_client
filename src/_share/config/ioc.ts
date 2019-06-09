import { UserService } from "../service/userService";
import { IoCNames } from "../enum";
import { LocalStrogeCachManager } from "../service/localStrogeCachManager"
import { SessionStrogeCachManager } from "../service/sessionStrogeCachManager"
import { MemoryStrogeCachManager } from "../service/memoryStrogeCachManager"

let ioc: Array<IIocRegistration> = [
    { name: IoCNames.IUserService, instanceOf: UserService },
    { name: IoCNames.ICachManager, instanceOf: MemoryStrogeCachManager }
];
export default ioc;