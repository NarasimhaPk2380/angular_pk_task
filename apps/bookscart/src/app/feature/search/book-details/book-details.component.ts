import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { bookI } from '../../../core/models/book.model';
import { UtilsService } from '../../../core/services/utils.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  bookDetailsJson!: bookI;
  ratingArr: Array<number> = [];
  constructor(
    private acRoute: ActivatedRoute,
    private utilsSrvc: UtilsService
  ) {}

  ngOnInit(): void {
    this.acRoute.data.subscribe((booksData) => {
      this.bookDetailsJson = { ...booksData[0] };
    });
    for (let index = 0; index < 5; index++) {
      this.ratingArr.push(index);
    }
  }

  addToCart(): void {
    this.utilsSrvc.addItemToCart(this.bookDetailsJson);
  }

  showIcon(index: number): string {
    if ((this.bookDetailsJson?.volumeInfo?.rating || 0) >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
