import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { bookI } from '../models/book.model';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class CartDetailsResolverService {
  constructor(private appSrvc: AppService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<bookI> | Promise<bookI> | any {
    return this.appSrvc.retrieveBookId(route.params?.bookId);
  }
}
