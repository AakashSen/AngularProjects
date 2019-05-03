import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
  ],
  imports: [
    CommonModule,   
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    CustomFormsModule
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    CommonModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,  
    NgbModule.forRoot().ngModule,
    CustomFormsModule
  ], 
  providers: [
    AuthService, 
    AuthGuard,     
    CategoryService, 
    ProductService, 
    ShoppingCartService
  ]
})
export class SharedModule { }
