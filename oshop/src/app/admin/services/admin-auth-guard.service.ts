import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { UserService } from 'shared/services/user.service';
import { switchMap, map } from 'rxjs/operators';
import { AppUser } from 'shared/models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

  constructor(private auth : AuthService, private userService : UserService) { }
   
  appUser : AppUser;

  canActivate(_route, state: RouterStateSnapshot) {
     return this.auth.user$.pipe(
       switchMap(user => this.userService.get(user.uid)
       .pipe(map(appUser => {
         return appUser.isAdmin;
       } )))
     );
  }
}
