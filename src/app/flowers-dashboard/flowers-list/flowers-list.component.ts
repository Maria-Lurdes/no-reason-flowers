import { Component, OnInit } from '@angular/core';
import {Post} from "../../shared/interfaces";

@Component({
  selector: 'app-flowers-list',
  templateUrl: './flowers-list.component.html',
  styleUrls: ['./flowers-list.component.css']
})
export class FlowersListComponent implements OnInit {

  posts: Post[] = []
  filterFlowerByType = 'all'

  constructor() { }

  ngOnInit(): void {
  }

}
