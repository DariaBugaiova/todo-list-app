import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { beginLogin, beginRegister, duplicateUser, duplicateUserSuccess, fetchmenu } from "../user/user.actions";
import { exhaustMap, map, catchError, of, switchMap } from 'rxjs'
import { Router } from "@angular/router";
import { UserInfo } from "../../model/user";
import { UserService } from "src/app/services/user.service";
import { showalert } from "../common/app.action";

@Injectable()
export class UserEffect {
    constructor(private action$: Actions, private service: UserService, private route: Router) {
    }

    userRegister = createEffect(() =>
        this.action$.pipe(
            ofType(beginRegister),
            exhaustMap((action) => {
                return this.service.userRegisteration(action.userdata).pipe(
                    map(() => {
                        this.route.navigate(['auth/login'])
                        return showalert({ message: 'Registered successfully.', resulttype: 'pass' })
                    }),
                    catchError((_error) => of(showalert({ message: 'Registerion Failed due to :.' + _error.message, resulttype: 'fail' })))
                )
            })
        )
    )

    duplicateUser = createEffect(() =>
        this.action$.pipe(
            ofType(duplicateUser),
            switchMap((action) => {
                return this.service.duplicateUserName(action.username).pipe(
                    switchMap((data) => {
                        if (data.length > 0) {
                            return of(duplicateUserSuccess({ isduplicate: true }),
                                showalert({ message: 'Username already exist.', resulttype: 'fail' }))
                        } else {
                            return of(duplicateUserSuccess({ isduplicate: false }))
                        }

                    }),
                    catchError((_error) => of(showalert({ message: 'Registerion Failed due to :.' + _error.message, resulttype: 'fail' })))
                )
            })
        )
    )

    userLogin = createEffect(() =>
        this.action$.pipe(
            ofType(beginLogin),
            switchMap((action) => {
                return this.service.userLogin(action.usercred).pipe(
                    switchMap((data: UserInfo[]) => {
                        if (data.length > 0) {
                            const _userdata = data[0];
                            console.log(data);
                            if (_userdata.status === true) {
                                this.service.setUserToLoaclStorage(_userdata);
                                this.route.navigate([''])
                                return of(fetchmenu({ userrole: _userdata.role }),
                                    showalert({ message: 'Login success.', resulttype: 'pass' }))
                            } else {
                                return of(showalert({ message: 'InActive User.', resulttype: 'fail' }))
                            }
                        } else {
                            return of(showalert({ message: 'Login Failed: Invalid credentials.', resulttype: 'fail' }))
                        }


                    }),
                    catchError((_error) => of(showalert({ message: 'Login Failed due to :.' + _error.message, resulttype: 'fail' })))
                )
            })
        )
    )
        }
