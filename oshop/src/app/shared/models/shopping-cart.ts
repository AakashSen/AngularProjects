import { ShoppingcartItem } from './shopping-cart-item';
import { Product } from './product';

 export class ShoppingCart {
    items: ShoppingcartItem[] = [];
    map: { [productId:string]:ShoppingcartItem };
    
    constructor(private itemsMap : { [productId:string]:ShoppingcartItem }){

        this.itemsMap = itemsMap || {};

        for(let productId in itemsMap) {
            let item = itemsMap[productId];                                                
            this.items.push(new ShoppingcartItem({...item,key : productId}));            
            // here "...item" is equavalent to 
            // "title : item.title, imageUrl: item.imageUrl" and so on ...
        }
    }

    getQuantity(product) {
        let item = this.itemsMap[product.key];
        return item ? item.quantity : 0;
    }

    get totalPrice(){
        let sum = 0;
        for (let productId in this.items){
            sum += this.items[productId].totalPrice;
        }
        return sum;
    }
    
    get totalItemsCount() {
       let count = 0;
        for (let productId in this.items){
             count += this.items[productId].quantity;
        }
        return count;    
    }
} 