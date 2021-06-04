import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { appSubjectI } from './core/models/book.model';
import { UtilsService } from './core/services/utils.service';

@Component({
  selector: 'a2zcart-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'bookscart';
  availableCartItem: number = 0;
  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  constructor(private utilsSrvc: UtilsService) {}

  ngOnInit(): void {
    this.utilsSrvc.bookAppSubject$.subscribe((event: appSubjectI) => {
      if (event?.type === 'addToCart') {
        this.availableCartItem = this.utilsSrvc.modifybooksAppJson?.cartItems?.length;
      }
    });
  }
}
