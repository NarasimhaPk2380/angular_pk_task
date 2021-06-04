import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsResolverService } from '../../core/services/app-resolver.service';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SearchLayoutComponent } from './search-layout/search-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SearchLayoutComponent,
  },
  {
    path: 'details/:bookId',
    component: BookDetailsComponent,
    resolve: [CartDetailsResolverService],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
