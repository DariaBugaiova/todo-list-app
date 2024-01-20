import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, switchMap } from "rxjs";
import { Roleaccess, UserCred, UserI, UserInfo } from "../model/user";

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient){}

    APIBaseUrl = 'http://localhost:3000/user'

  userRegisteration(userdata: UserI) {
    return this.http.post(this.APIBaseUrl, userdata);
  }

  userLogin(userdata: UserCred): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(this.APIBaseUrl + '?username=' + userdata.username + '&password=' + userdata.password);
  }

  duplicateUserName(username: string): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(this.APIBaseUrl + '?username=' + username);
  }

  getMenuByRole(userrole: string): Observable<Roleaccess[]> {
    return this.http.get<Roleaccess[]>('http://localhost:3000/roleaccess?role=' + userrole);
  }
  haveMenuAccess(userrole: string, menuname: string): Observable<Roleaccess[]> {
    return this.http.get<Roleaccess[]>('http://localhost:3000/roleaccess?role=' + userrole + '&menu=' + menuname);
  }

  getAllUsers(): Observable<UserI[]> {
    return this.http.get<UserI[]>(this.APIBaseUrl);
  }

//   GetAllRoles(): Observable<Roles[]> {
//     return this.http.get<Roles[]>('http://localhost:3000/role');
//   }

  setUserToLoaclStorage(userdata: UserInfo) {
    localStorage.setItem('userdata', JSON.stringify(userdata))
  }

  updateUser(userid: number, role: string) {
    return this.http.get<UserI>(this.APIBaseUrl+'/'+userid).pipe(
      switchMap((data: { role: string; })=>{
            data.role=role;
           return this.http.put(this.APIBaseUrl+'/'+userid,data)
      })
    )
  }

  getUserDataFromStorage() {
    let _obj: UserInfo = {
      id: 0,
      username: '',
      email: '',
      name: '',
      role: '',
      status: false
    }
    if (localStorage.getItem('userdata') != null) {
      let jsonstring = localStorage.getItem('userdata') as string;
      _obj = JSON.parse(jsonstring);
      return _obj;
    } else {
      return _obj;
    }

  }
}