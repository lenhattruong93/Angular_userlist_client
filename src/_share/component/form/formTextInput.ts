import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:"form-text-input",
    templateUrl:"src/_share/component/form/formTextInput.html"
})
export class FormTextInput{
    @Input() lable:string;
    @Input() model:string;
    // @Output() onValueChanged:EventEmitter<any>=new EventEmitter();
    @Output() modelChange:EventEmitter<any>=new EventEmitter();
    // public onChanged():void{
    //     this.onValueChanged.emit(this.model);
    // }
    public onChanged():void{
        this.modelChange.emit(this.model);
         }
}