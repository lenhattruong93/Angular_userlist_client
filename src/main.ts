///<preference path="extension.d.ts"/>
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { UserModule } from "./userModule";
import {IoCContainerFactory} from "./_share/common/ioc/iocContainerFactory"
window.ioc = IoCContainerFactory.create();
platformBrowserDynamic().bootstrapModule(UserModule);