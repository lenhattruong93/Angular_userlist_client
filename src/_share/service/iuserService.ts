import {Promise} from "../models/promise"
export interface IUserService{
    getUsers():Promise;
    addNewUser(item:any):Promise;
}
