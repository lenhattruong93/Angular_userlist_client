enum PromiseStatus{
    None=0,
    Success=1,
}
export class Promise {

    private successCallback: any;
    private status: PromiseStatus=PromiseStatus.None;
    private data: any;
    public then(callBackFunc: any): Promise {
        this.successCallback = callBackFunc;
        this.processCallback();
        // if(this.status=="ss"){
        //   this.successCallback(this.data);
        //   }
        return this;
    }
    public resolve(data: any): Promise {
        this.status=PromiseStatus.Success;
        // this.status = "ss";
        this.data = data;
        
        this.processCallback()
        // if (!!this.successCallback) {
        //   this.successCallback(data);
        //}
        return this;
    }
    private processCallback(): void {
        if (this.status==PromiseStatus.Success && !!this.successCallback) {
            this.successCallback(this.data);
        }
    }
}