import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {clearCart, removeProduct} from "../store/cart.actions";
import {Post} from "../shared/interfaces";
import {Observable} from "rxjs";
import {ProductGroup, selectCountProducts, selectGroupedCartEntries, selectTotalPrice} from "../store/cart.selector";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  flowersToBuy$: Observable<ProductGroup[]>
  countProducts$: Observable<number>
  totalPrice$: Observable<number>

  constructor(private store: Store) {
    this.flowersToBuy$ = store.select(selectGroupedCartEntries);
    this.countProducts$ = store.select(selectCountProducts);
    this.totalPrice$ = store.select(selectTotalPrice);
  }

  ngOnInit(): void {
  }

  clearEntries() {
    this.store.dispatch(clearCart())
  }

  deleteFlowerFromCart(flower: Post) {
    this.store.dispatch(removeProduct(flower));
  }

}
