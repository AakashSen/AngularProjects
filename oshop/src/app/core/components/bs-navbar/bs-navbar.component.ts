import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'shared/services/auth.service';
import { AppUser } from 'shared/models/app-user';
import  { map } from 'rxjs/operators';
import { UserService } from 'shared/services/user.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser : AppUser ;
  shoppingCartItemCount: number;
  cart$: Observable<ShoppingCart>;
  constructor(
    private auth : AuthService, 
    private userS: UserService,
    private cartService: ShoppingCartService) {
       auth.appUser$().subscribe(appUser => this.appUser = appUser);
  }

  logout(){
     this.auth.logout();
  }

  async ngOnInit() {
     this.cart$ = (await this.cartService.getCart());          
  }

}
