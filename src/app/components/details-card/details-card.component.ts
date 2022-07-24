import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Post} from "../../shared/interfaces";
import {addProduct} from "../../card-state-store/cart.actions";
import {Store} from "@ngrx/store";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.css']
})
export class DetailsCardComponent implements OnInit {



  constructor(@Inject(MAT_DIALOG_DATA) public data: Post,
              public dialogRef: MatDialogRef<DetailsCardComponent>,
              private store: Store,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

  addToCart() {
    this.store.dispatch(addProduct(this.data));
    this.closeModal();
    this._snackBar.open('Product was successfuly added to shopping cart', 'Close', {
      duration: 3000, verticalPosition: 'top'
    });
  }

}
