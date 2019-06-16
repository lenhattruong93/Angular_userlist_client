import { Http } from "@angular/http";
import { Promise } from "../models/promise"
import { IResourceManager } from "../service/iresourceManager";
import { IoCNames } from "../enum";
export class BasePage {
    public i18n: any;
    constructor() {
let resource : IResourceManager = window.ioc.resolve(IoCNames.IResourceManager);
this.i18n=resource.getLocale();
    }
}

