
import { Promise } from "../models/promise";
export interface IResourceManager {
    loadLocale(locale: string): Promise;
    import(json: any): void;
    getLocale(): any;
    reload(language: string): void;
}
