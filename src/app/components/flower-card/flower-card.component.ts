import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../shared/interfaces";

@Component({
  selector: 'app-flower-card',
  templateUrl: './flower-card.component.html',
  styleUrls: ['./flower-card.component.css']
})
export class FlowerCardComponent implements OnInit {

  constructor() { }

  @Input() flowerPost: Post | undefined

  ngOnInit(): void {
  }

}
