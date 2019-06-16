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
    };
}