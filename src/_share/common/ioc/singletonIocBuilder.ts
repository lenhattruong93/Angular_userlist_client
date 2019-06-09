import { IIoCBuilder } from "./iioiCBuilder";
export class SingletonIocBuilder implements IIoCBuilder {
    private item: IIocRegistration;
    constructor(item: IIocRegistration) {
        this.item = item;
    }
    public build(): any {
        if (!this.item["instance"]) {
            this.item["instance"] = new this.item.instanceOf();
        }
        return this.item["instance"];
    }
}
