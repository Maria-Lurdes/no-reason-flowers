import { Component, OnInit } from '@angular/core';
import {Post} from "../../shared/interfaces";
import {PostService} from "../../shared/services/post.service";

@Component({
  selector: 'app-flowers-list',
  templateUrl: './flowers-list.component.html',
  styleUrls: ['./flowers-list.component.css']
})
export class FlowersListComponent implements OnInit {

  initialPosts: Post[] = []
  posts: Post[] = []
  filterFlowerByType: string = 'all'
  sortMode: string = 'default'

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getAllFlowersPosts();
    this.getCurrentPosts();
  }

  getCurrentPosts() {
    this.postService.flowersPostsArray.subscribe(currentPosts => {
      this.initialPosts = [...currentPosts];
        this.handleSortModeChange(this.sortMode);
    })
  }

  getAllFlowersPosts() {
    this.postService.getAll();
  }

  handleSortModeChange(value: string) {
    if(value === 'default') {
      this.posts = [...this.initialPosts];
    }else if(value === 'ascending') {
      this.posts = [...this.initialPosts];
      this.posts = this.posts.sort(function(a, b) {
        return a.price - b.price;
      });
    } else {
      this.posts = [...this.initialPosts];
      this.posts = this.posts.sort(function(a, b) {
        return b.price - a.price;
      });
    }
  }

}
