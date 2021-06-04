import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@a2zcart/material';
import { FlexCardModule } from '../../shared/flex-card/flex-card.module';

import { SearchLayoutComponent } from './search-layout/search-layout.component';
import { BookDetailsComponent } from './book-details/book-details.component';

import { SearchRoutingModule } from './search-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    SearchLayoutComponent,
    BookDetailsComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexCardModule,
  ],
})
export class SearchModule {}
