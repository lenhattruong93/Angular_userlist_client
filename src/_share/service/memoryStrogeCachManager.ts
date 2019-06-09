import { ICacheManager } from "./icacheManager";

export class MemoryStrogeCachManager implements ICacheManager{
    private data:any={};

    public add(key: string, value: any): void {
        this.data[key]=value;
    }
    public exist(key: string): boolean {
        return this.data.hasOwnProperty(key);
    }
    public get(key: string): any {
        return this.data[key];

    }
}