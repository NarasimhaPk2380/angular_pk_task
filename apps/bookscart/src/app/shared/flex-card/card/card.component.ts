import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { bookI } from '../../../core/models/book.model';
import { UtilsService } from '../../../core/services/utils.service';

@Component({
  selector: 'a2zcart-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cardsList: Array<bookI> = [];
  @Input() showDelete: string = 'false';
  @Output() getEventFromCard = new EventEmitter();

  constructor(private router: Router, private utilsSrvc: UtilsService) {}

  ngOnInit(): void {}

  goToDetailsPage(bookId: string) {
    this.router.navigate([`/search/details/${bookId}`]);
  }

  deleteCartItem(bookId: string) {
    this.utilsSrvc.deleteItemFromCart(bookId);
    this.getEventFromCard.emit('');
  }

  trackByMethod(index: number, el: any): string {
    return el.id;
  }
}
