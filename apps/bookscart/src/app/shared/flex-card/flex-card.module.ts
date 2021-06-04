import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@a2zcart/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  exports: [CardComponent],
})
export class FlexCardModule {}
