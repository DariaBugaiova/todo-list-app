import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { UserInfo } from '../model/user';

export const AuthGuard: CanActivateFn = (route, state) => {
    const service = inject(UserService)
    const router = inject(Router)
    let menuname = '';
     
    if(route.url.length>0) {
      menuname=route.url[0].path;
    }
       
  const userinfo: UserInfo = service.getUserDataFromStorage();
  if (userinfo.username != '' && userinfo.username != null) {
    if (menuname != '') {
      service.haveMenuAccess(userinfo.role, menuname).subscribe(item => {
        const _menudata = item;
        console.log(_menudata);
        if (_menudata.length > 0) {
          return true
        } else {
          alert('Unautorized access.')
          router.navigate(['']);
          return false;
        }
      })
    } else {
      return true;
    }

    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};