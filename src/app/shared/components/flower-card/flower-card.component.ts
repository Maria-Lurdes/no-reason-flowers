import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DetailsCardComponent} from "../details-card/details-card.component";
import {Store} from "@ngrx/store";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Post} from "../../interfaces";
import {addProduct} from "../../../store/cart.actions";

@Component({
  selector: 'app-flower-card',
  templateUrl: './flower-card.component.html',
  styleUrls: ['./flower-card.component.css']
})
export class FlowerCardComponent implements OnInit {

  @Input() flowerPost: Post = {name: '', description: '', price: 0, image: '', id: '', flowerType: ''}

  constructor(public dialog: MatDialog, private store: Store, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  addToCart() {
    this.store.dispatch(addProduct(this.flowerPost));
    this._snackBar.open('Product was successfuly added to shopping cart', 'Close', {
      duration: 3000, verticalPosition: 'top'
    });
  }

  openDialog() {
    this.dialog.open(DetailsCardComponent, {
      data: {...this.flowerPost},
    });
  }

}
