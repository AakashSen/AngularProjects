import { Product } from './product';

export class ShoppingcartItem {
 
    key : string;
    title: string;
    imageUrl: string;
    price: number;
    quantity: number;
    
    constructor(init?: Partial<ShoppingcartItem>){
        Object.assign(this, init);
    }

    get totalPrice(){
       return this.price * this.quantity;
    }
}