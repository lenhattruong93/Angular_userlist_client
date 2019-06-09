import { UserService } from "../service/userService";
import { IoCNames, IoCLifeCycle } from "../enum";
import { LocalStrogeCachManager } from "../service/localStrogeCachManager"
import { SessionStrogeCachManager } from "../service/sessionStrogeCachManager"
import { MemoryStrogeCachManager } from "../service/memoryStrogeCachManager"

let ioc: Array<IIocRegistration> = [
    { name: IoCNames.IUserService, instanceOf: UserService, lifecycle: IoCLifeCycle.Transient },
    { name: IoCNames.ICachManager, instanceOf: MemoryStrogeCachManager, lifecycle: IoCLifeCycle.Singleton }
];
export default ioc;