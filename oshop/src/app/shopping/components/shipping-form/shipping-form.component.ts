import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Order } from 'shared/models/order';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { OrderService } from 'shared/services/order.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'shared/services/auth.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy{

  shipping = {} ;

  @Input('cart') cart: ShoppingCart;
  userId: string;
  userSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private orderService: OrderService) { }

    async ngOnInit(){      
      this.userSubscription =  this.authService.user$.subscribe(user => this.userId = user.uid);
     }
   
     ngOnDestroy(){       
       this.userSubscription.unsubscribe();
     }
   

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);    
    let result = await this.orderService.placeOrder(order);    
    this.router.navigate(['order-success',result.key]);    
  }

}
