export interface ICacheManager{
    add(key:string,value:any):void;
    exist(key:string):boolean;
    get(key:string):any;

}

