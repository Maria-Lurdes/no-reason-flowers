import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../shared/interfaces";
import {MatDialog} from "@angular/material/dialog";
import {DetailsCardComponent} from "../details-card/details-card.component";

@Component({
  selector: 'app-flower-card',
  templateUrl: './flower-card.component.html',
  styleUrls: ['./flower-card.component.css']
})
export class FlowerCardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input() flowerPost: Post | undefined

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DetailsCardComponent, {
      data: {...this.flowerPost},
    });
}

}
