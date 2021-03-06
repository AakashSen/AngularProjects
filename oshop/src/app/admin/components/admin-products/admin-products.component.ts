import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'shared/services/product.service';
import { Subscription } from 'rxjs';
//import { DataTableResource } from 'angular7-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent  implements OnDestroy{

  products : any[];
  filteredProducts : any[];
  subscription : Subscription; 

  constructor(private productService: ProductService) { 
    
    this.subscription = this.productService.getAll().subscribe( 
      products => {
        this.filteredProducts = this.products  = products;
      }
      );
  }

  ngOnDestroy(){
     this.subscription.unsubscribe(); 
  }

  /*
  filter(query:string){
    this.filteredProducts = (query)? this.products.filter(p=> p.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) : this.products;
  }
  */

}
