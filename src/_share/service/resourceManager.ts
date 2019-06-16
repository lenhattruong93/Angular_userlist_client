import { IResourceManager } from "./iresourceManager";
import { Promise } from "../models/promise";
import { Http } from "@angular/http";
import objectHelper from "../helper/objectHelper"
export class ResourceManager implements IResourceManager {
    private locale: any;
    private localeName: any;
    private lng: any = "en";
    public loadLocale(locale: string): Promise {
        let self=this;
        this.localeName=locale;
        let def: Promise = new Promise();
        let uri = "/src/resources/locale/" +this.localeName+"."+self.lng+".json";
        let http: Http = window.ioc.resolve(Http);
        http.get(uri)
            .map(respone => respone.json())
            .subscribe(json => def.resolve(json));
        return def;
    };
    public import(json: any): void {
        this.locale = json;
    };
    public getLocale(): any {
        return this.locale;
    }
    public reload(lng: string): Promise {
        let self = this;
        self.lng = lng;
        let def: Promise = new Promise();
        let uri = "/src/resources/locale/"+this.localeName+"."+self.lng+".json";
        let http: Http = window.ioc.resolve(Http);
        http.get(uri)
            .map(respone => respone.json())
            .subscribe(json => {
                objectHelper.extend(self.locale, json);
                def.resolve(json)
            });
        return def;
    }
}