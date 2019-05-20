import "rxjs/add/operator/map"
import {Http} from "@angular/http";
import { Injectable } from "@angular/core";
@Injectable()
export class UserService{
    private http:Http;
    constructor(http:Http){
            this.http=http;
    }
    public getUsers():Promise<any>{
        let self=this;
        let def:Promise<any>= new Promise<any>((resolve:any,reject:any)=>{
            self.http.get("rest/api/users") // Server API;
            .map((respone:any)=>{return respone.json();})
            .subscribe((data:any)=>{return resolve(data);});
        });
        return def;        
    }
    public addUser(user:any):Promise<any>{
        let self=this;
        let def:Promise<any>= new Promise<any>((resolve:any,reject:any)=>{
            self.http.post("rest/api/users",user) // Server API;
            .map((respone:any)=>{return respone.json();})
            .subscribe((data:any)=>{return resolve(data);});
        });
        return def;    

    }
}