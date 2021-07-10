import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { CartItems } from 'src/app/models/cartItems';
import { CartObject } from 'src/app/models/cart';
import { DrawerService } from '../drawer/drawer.service';
import { DrawerState, DrawerType } from 'src/app/models/drawerState';
import { MenuItem } from 'src/app/models/menuItem';
import { RestaurantService } from '../restaurant/restaurant.service';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnDestroy {

  cartSubscription: Subscription;
  cartItemsUpdated = new Subject<CartObject>();
  cartItems: CartItems = {};
  cartTotal: number;

  constructor(
    private drawerService: DrawerService, 
    private restaurantService: RestaurantService
  ) {
    this.initCartSubscription();
  }

  initCartSubscription(): void {
    this.cartSubscription = this.restaurantService.cartPublish.subscribe((cart) => {
      this.setDrawerState(cart.cartItems);
      const cartItems = cart.cartItems.reduce((items, next) => {
        if (items[next.userAdded]) {
          items[next.userAdded].items.push(next);
          items[next.userAdded].quantity += 1;
        } else {
          items[next.userAdded] = { items: [next], quantity: 1, userAdded: next.userAdded, userEmail: next.userEmail }
        }        
        return items;
      }, {});
      this.cartItems = cartItems;
      this.cartTotal = cart.cartTotal;
      this.cartItemsUpdated.next({ cartItems: cartItems, cartTotal: cart.cartTotal });
    });
  }
  
  // REVIEW Should this be skipped and restaurantService be called directly?
  addItem(item: MenuItem) {
    this.restaurantService.addCartItem(item);
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

  setDrawerState(cart: MenuItem[]): void {
    if (cart.length && this.drawerService.drawerState === DrawerState.Closed) {
      this.drawerService.setType(DrawerType.Cart);
      this.drawerService.setState(DrawerState.Preview);
    } else if (!cart.length) {
      this.drawerService.setState(DrawerState.Closed);
    }
  }
  
}
