import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Promise } from "../models/promise";
@Injectable()
export class UserService {
    private http: Http;
    constructor(http: Http) {
        this.http = http;
    }
    public getUsers(): Promise {
        let self = this;
        let def: Promise = new Promise();
        // def.resolve(
        //     [{ id: 14, fistName: "rtetwt", lastName: "wertwertw", userName: "wertwer" },
        //     { id: 15, fistName: "rtetwt", lastName: "wertwertw", userName: "wertwer" },
        //     { id: 16, fistName: "sdfsedf", lastName: "dsfgh", userName: "sdfgdfg" },
        //     { id: 17, fistName: "vbchbd", lastName: "dfgdfg", userName: "dfgdfg" },
        //     { id: 18, fistName: "sdfgsdf", lastName: "sdfsdf", userName: "sdfsdf" },
        //     { id: 19, fistName: "natdfssddu", lastName: "lsdssdffsdfe", userName: "nasdsdsdffftu.le" },
        //     { id: 20, fistName: "natdfssddu", lastName: "lsdssdffsdfe", userName: "nasdsdsdffftu.le" },
        //     { id: 21, fistName: "ds", lastName: "asd", userName: "asd" },
        //     { id: 22, fistName: "", lastName: "", userName: "" },
        //     { id: 23, fistName: "ccccccccc", lastName: "vvvvvvvvvvvvv", userName: "bbbbbbbbbbb" },
        //     { id: 24, fistName: "2452345235", lastName: "7687687", userName: "6778678968" },
        //     { id: 25, fistName: "11111111111111111", lastName: "777777777", userName: "22222222" }]
        // );
        let url: string = "rest/api/users";
        let http: Http = window.ioc.resolve(Http);
        http.get(url)
            .map((respone: any) => respone.json())
            .subscribe(users => def.resolve(users));
        return def;
    }
    public addNewUser(user: any): Promise {
        let self = this;
        let def: Promise = new Promise();
        let url: string = "rest/api/users";
        let http: Http = window.ioc.resolve(Http);
        http.post(url, user)
            .map(respone => respone.json())
            .subscribe(users => def.resolve(users))
        return def;


        // let def: Promise<any> = new Promise<any>((resolve: any, reject: any) => {
        //     let url:string="rest/api/users";
        //     self.http.post(url,user)//post
        //     .map((respone:any)=> respone.json())//.map((respone:any)=>{return respone.json();})
        //      .subscribe((users:any)=>{
        //          resolve(users);
        //      });// goi fucn co dau ;
        // });
        //  return def;

    };
}