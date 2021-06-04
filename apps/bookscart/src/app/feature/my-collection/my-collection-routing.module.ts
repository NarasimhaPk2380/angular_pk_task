import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCollectionLayoutComponent } from './my-collection-layout/my-collection-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MyCollectionLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCollectionRoutingModule {}
