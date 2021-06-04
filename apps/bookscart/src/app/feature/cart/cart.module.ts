import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@a2zcart/material';
import { FlexCardModule } from '../../shared/flex-card/flex-card.module';
import { CartLayoutComponent } from './cart-layout/cart-layout.component';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [CartLayoutComponent],
  imports: [CommonModule, CartRoutingModule, MaterialModule, FlexCardModule],
})
export class CartModule {}
