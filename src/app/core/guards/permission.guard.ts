import { User } from './../../shared/models/user';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { hasPermission } from '../helpers/activate.helper';

@Injectable()
export class CanActivateRoute implements CanActivate {
    constructor(private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (!localStorage.getItem('user')) {
            this.router.navigate(['/auth/login']);
            return false;
        }
        return hasPermission(state.url);
    }
}
