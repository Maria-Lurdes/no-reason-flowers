import { Component, OnInit } from '@angular/core';
import {Post} from "../../shared/interfaces";
import {PostService} from "../../shared/services/post.service";

@Component({
  selector: 'app-flowers-list',
  templateUrl: './flowers-list.component.html',
  styleUrls: ['./flowers-list.component.css']
})
export class FlowersListComponent implements OnInit {

  posts: Post[] = [];
  filterFlowerByType = 'all'

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getAllFlowersPosts();
    this.getCurrentPosts();
  }

  getCurrentPosts() {
    this.postService.flowersPostsArray.subscribe(currentPosts => {
      this.posts = [...currentPosts];
    })
  }

  getAllFlowersPosts() {
    this.postService.getAll();
  }

}
