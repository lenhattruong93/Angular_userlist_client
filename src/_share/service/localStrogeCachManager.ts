import {ICacheManager} from "./icacheManager"
export class LocalStrogeCachManager implements ICacheManager{
    public add(key: string, value: any): void {
       window.localStorage.setItem(key,JSON.stringify(value));
    }
    public exist(key:string):boolean{
        return !!window.localStorage.getItem(key);
    }
    public get(key:string):any{
        return JSON.parse(window.localStorage.getItem(key));
   
}
}