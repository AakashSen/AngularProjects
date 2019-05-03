import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'shared/services/product.service';
import { CategoryService } from 'shared/services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'shared/models/product';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Subscription, Observable } from 'rxjs';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  //products : Product[];
  products$;    
  category: string;
  cart$: Observable<ShoppingCart>;
  subscription: Subscription;

  constructor(
    private routes : ActivatedRoute,
    private productService: ProductService,
    private cartService: ShoppingCartService
    ) { }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();  
    this.populateProducts();
    this.populateCategory();
   //productService.getAll().subscribe(products => this.products = products);
  }
  
  private populateProducts(){
    this.products$ = this.productService.getAll();            
  }

  private populateCategory(){
    this.routes.queryParamMap.subscribe(query => {
    this.category = query.get('category');
  });
  }

}
