import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { bookI } from '../../../core/models/book.model';
import { UtilsService } from '../../../core/services/utils.service';

@Component({
  selector: 'app-my-collection-layout',
  templateUrl: './my-collection-layout.component.html',
  styleUrls: ['./my-collection-layout.component.scss'],
})
export class MyCollectionLayoutComponent implements OnInit {
  myCollectionList: Array<bookI> = [];
  constructor(private utilsSrvc: UtilsService, private router: Router) {
    this.updateCollectionItems();
  }

  ngOnInit(): void {}

  updateCollectionItems(): void {
    this.myCollectionList = [
      ...(this.utilsSrvc.modifybooksAppJson?.myCollection || []),
    ];
  }
}
