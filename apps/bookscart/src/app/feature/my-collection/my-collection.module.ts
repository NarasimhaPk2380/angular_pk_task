import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@a2zcart/material';
import { FlexCardModule } from '../../shared/flex-card/flex-card.module';
import { MyCollectionLayoutComponent } from './my-collection-layout/my-collection-layout.component';
import { MyCollectionRoutingModule } from './my-collection-routing.module';

@NgModule({
  declarations: [MyCollectionLayoutComponent],
  imports: [
    CommonModule,
    MyCollectionRoutingModule,
    MaterialModule,
    FlexCardModule,
  ],
})
export class MyCollectionModule {}
