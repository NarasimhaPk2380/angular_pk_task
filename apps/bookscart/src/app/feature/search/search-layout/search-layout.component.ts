import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { appSubjectI, bookI } from '../../../core/models/book.model';
import { AppService } from '../../../core/services/app.service';
import { UtilsService } from '../../../core/services/utils.service';

@Component({
  selector: 'app-search-layout',
  templateUrl: './search-layout.component.html',
  styleUrls: ['./search-layout.component.scss'],
})
export class SearchLayoutComponent implements OnInit, OnDestroy {
  booksList: Array<bookI> = [];
  bookSearchText$ = new Subject<string>();
  booksSubscription: Subscription = new Subscription();
  spinner!: Observable<boolean>;
  constructor(
    private appSrvc: AppService,
    private utilsSrvc: UtilsService,
    private router: Router
  ) {
    this.booksSubscription = this.appSrvc
      .searchBooks(this.bookSearchText$)
      .subscribe((booksResponse: Array<bookI>) => {
        this.booksList = booksResponse;
      });
    this.utilsSrvc.bookAppSubject$.subscribe((event: appSubjectI) => {
      if (event?.type === 'spinner') {
        this.spinner = event.value;
      }
    });
  }
  ngOnInit(): void {}

  goToDetailsPage(bookId: string) {
    this.router.navigate([`/search/details/${bookId}`]);
  }

  ngOnDestroy(): void {
    if (this.booksSubscription) {
      this.booksSubscription.unsubscribe();
    }
  }
}
