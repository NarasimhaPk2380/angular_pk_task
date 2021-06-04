import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { bookI } from '../../../core/models/book.model';
import { UtilsService } from '../../../core/services/utils.service';

@Component({
  selector: 'app-cart-layout',
  templateUrl: './cart-layout.component.html',
  styleUrls: ['./cart-layout.component.scss'],
})
export class CartLayoutComponent implements OnInit {
  cartItemsList: Array<bookI> = [];
  constructor(private utilsSrvc: UtilsService, private router: Router) {
    this.updateCartItems();
  }

  ngOnInit(): void {}

  updateCartItems(): void {
    this.cartItemsList = [
      ...(this.utilsSrvc.modifybooksAppJson?.cartItems || []),
    ];
  }
}
