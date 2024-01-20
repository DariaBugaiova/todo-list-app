import { EntityState } from "@ngrx/entity";

export interface UserI {
    username: string,
    password: string,
    phone: string,
    role: string,
    status: boolean,
    email: string
}

export interface UserCred{
    username: string,
    password: string
}

export interface UserInfo{
    id: number,
    username: string,
    name: string,
    email: string,
    role: string,
    status: boolean
}

export interface Roles{
    code:string,
    name:string
}

export interface Menus{
    code:string,
    name:string
}

export interface Roleaccess{
    role:string,
    menu:string
}

export interface UserModel extends EntityState<UserI>{
   isDuplicate:boolean,
   menulist:Roleaccess[],
   roles:Roles[],
   userinfo:UserInfo
}