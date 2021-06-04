import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'search',
    loadChildren: () =>
      import('./feature/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./feature/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'my-collection',
    loadChildren: () =>
      import('./feature/my-collection/my-collection.module').then(
        (m) => m.MyCollectionModule
      ),
  },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/search',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
