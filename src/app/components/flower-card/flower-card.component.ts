import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../shared/interfaces";
import {MatDialog} from "@angular/material/dialog";
import {DetailsCardComponent} from "../details-card/details-card.component";
import {Store} from "@ngrx/store";
import {addProduct} from "../../card-state-store/cart.actions";

@Component({
  selector: 'app-flower-card',
  templateUrl: './flower-card.component.html',
  styleUrls: ['./flower-card.component.css']
})
export class FlowerCardComponent implements OnInit {

  constructor(public dialog: MatDialog, private store: Store) { }

  @Input() flowerPost: Post = {name: '', description: '', price : 0, image: '', id: '', flowerType: ''}

  ngOnInit(): void {
  }

  addToCart() {
    this.store.dispatch(addProduct(this.flowerPost));
  }

  openDialog() {
    this.dialog.open(DetailsCardComponent, {
      data: {...this.flowerPost},
    });
}

}
