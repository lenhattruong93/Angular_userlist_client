import { Injectable } from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
@Injectable()
export class UserService {
    private http:Http;
    constructor(http:Http){
        this.http=http;
    }
    public getUsers(): Promise<any> {
        let self=this;
        
        let def: Promise<any> = new Promise<any>((resolve: any, reject: any) => {
            let url:string="rest/api/users";
            self.http.get(url)
            .map((respone:any)=> respone.json())//.map((respone:any)=>{return respone.json();})
            .subscribe((users:any)=>{
                resolve(users);
            });// goi fucn co dau ;
        });
        return def;
    }
    public addNewUser(user:any):Promise<any>{
        let self=this;
        
        let def: Promise<any> = new Promise<any>((resolve: any, reject: any) => {
            let url:string="rest/api/users";
            self.http.post(url,user)//post
            .map((respone:any)=> respone.json())//.map((respone:any)=>{return respone.json();})
            .subscribe((users:any)=>{
                resolve(users);
            });// goi fucn co dau ;
        });
        return def;

    };
}