import { IIoCBuilder } from "./iioiCBuilder";
export class TransientIocBuilder implements IIoCBuilder {
    private item: IIocRegistration;
    constructor(item: IIocRegistration) {
        this.item = item;
    }
    public build(): any {
        return new this.item.instanceOf();
    }
}
