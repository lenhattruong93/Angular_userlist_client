import { IIoCBuilder } from "./iioiCBuilder";
import { IoCLifeCycle } from "../../enum";
import { TransientIocBuilder } from "./transientIocBuilder";
import { SingletonIocBuilder } from "./singletonIocBuilder";

export class IoCBuilderFactory {
    public static create(item: IIocRegistration): IIoCBuilder {
        switch (item.lifecycle) {
            case IoCLifeCycle.Transient:
                return new TransientIocBuilder(item);
            case IoCLifeCycle.Singleton:
                return new SingletonIocBuilder(item)
        }
    }
}