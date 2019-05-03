import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { take, map } from 'rxjs/operators';
import { Item } from 'shared/models/items';
import { Product } from 'shared/models/product';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingcartItem } from 'shared/models/shopping-cart-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }
  
  async clearCart(){
    let cartId = await this.getORCreateCartId();
    this.db.object('/shopping-carts/'+cartId+'/items').remove();
  }
  
  async getCart():Promise<Observable<ShoppingCart>> {
    let cartId = await this.getORCreateCartId();
     return this.db.object<ShoppingCart>('/shopping-carts/' + cartId).valueChanges()
           .pipe(map( x =>  new ShoppingCart( x.items )));         
  }

  async addToCart(product){
    this.updateItem(product, 1);
  }

  removeFromCart(product){
    this.updateItem(product, -1);
  }

  private getItem(cartId:String, productId:String): AngularFireObject<ShoppingcartItem> {
    return this.db.object<ShoppingcartItem>('/shopping-carts/'+cartId+'/items/'+productId);
  }

  private async getORCreateCartId():Promise<String> {
    let cartId = localStorage.getItem('cartId');

    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;

  }; 

  private async updateItem(product:Product, change:number) {
    let cartId = await this.getORCreateCartId();    
    let items = this.getItem(cartId, product.key);        
    let items$ = items.valueChanges();    
   
    items$.pipe(take(1)).subscribe(item => {
      let quantity = item ?((item.quantity || 0) + change) : change;     
      if (quantity === 0) items.remove();
      else  items.update({         
        title : product.title,
        imageUrl: product.imageUrl,
        price: product.price,
        quantity: quantity
      });            
    })
  }

}
