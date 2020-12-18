import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MainComponent} from './main.component';

@Injectable({providedIn: 'root'})
export class MainComponentGuard implements CanDeactivate<MainComponent> {

  canDeactivate(component: MainComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> {
    return component.canDeactivate();
  }

}
