import { ICacheManager } from "./icacheManager";

export class SessionStrogeCachManager implements ICacheManager{
    public add(key: string, value: any): void {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    }
    public exist(key: string): boolean {
        return !!window.sessionStorage.getItem(key);
    }
    public get(key: string): any {
        return JSON.parse(window.sessionStorage.getItem(key));

    }
}