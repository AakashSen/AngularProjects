import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductsComponent } from './components/products/products.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SharedModule } from 'shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';

@NgModule({
  declarations: [
    CheckOutComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    ProductsComponent,
    ProductFilterComponent,
    ShippingFormComponent,
    ShoppingCartComponent,
    ShoppingCartSummaryComponent
  ],
  imports: [
    SharedModule,    
    RouterModule.forChild([      
      // routes for annotnoums users      
      { path: 'products', component: ProductsComponent },
      { path: 'shoppping-cart', component: ShoppingCartComponent },      
      // routes for logged in user
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard] }     
    ]),
    SharedModule
  ]
})
export class ShoppingModule { }
