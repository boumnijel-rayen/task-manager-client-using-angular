import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthadminService } from '../services/authadmin.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAdminGuard implements CanActivate {
  constructor(private authadminService: AuthadminService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      if (this.authadminService.connected()){
        resolve(true)
      }else{
        this.router.navigate(['/loginAdmin'])
        resolve(false)
      }
    })
  }
  
}
