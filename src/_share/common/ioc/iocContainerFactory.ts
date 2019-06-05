import { IoCContainer } from "./iocContainer";
import iocRegistrations from "../../config/ioc"
export class IoCContainerFactory{
    public static create():IoCContainer{
       let container: IoCContainer= new IoCContainer();
       container.import(iocRegistrations);
       return container;
    }
}