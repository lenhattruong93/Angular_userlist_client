import { NgModule, Injector, ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { UserRoutes } from "./userRoutes";
import { Layout } from "./layout";
import { IResourceManager } from "./_share/service/iresourceManager";
import { IoCNames } from "./_share/enum";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        UserRoutes
    ],
    declarations: [Layout],
    entryComponents: [Layout]
    // bootstrap: [Layout]
})
export class UserModule {
    private appRef: ApplicationRef;
    constructor(injector: Injector, appRef: ApplicationRef) {
        this.appRef = appRef;
        window.ioc.setInjector(injector);
    }
    ngDoBootstrap(): void {
        let self=this;
        let resource: IResourceManager = window.ioc.resolve(IoCNames.IResourceManager);
        resource.loadLocale("users").then((json: any) => {
            resource.import(json);
        self.appRef.bootstrap(Layout) /// Se hoi lai luc offline
        })
    }
} 