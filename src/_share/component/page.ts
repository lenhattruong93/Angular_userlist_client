import { Component, Input } from "@angular/core";

@Component({
    selector: "page",
    templateUrl: "src/_share/component/page.html"
})
export class Page {
    @Input() title: string;
}