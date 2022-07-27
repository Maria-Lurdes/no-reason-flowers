import {Component, OnInit, ViewChild} from '@angular/core';
import {Post} from "../../shared/interfaces";
import {PostService} from "../../shared/services/post.service";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-flowers-list',
  templateUrl: './flowers-list.component.html',
  styleUrls: ['./flowers-list.component.css']
})
export class FlowersListComponent implements OnInit {

  @ViewChild('paginator') paginator: MatPaginator | undefined;

  initialPosts: Post[] = []
  posts: Post[] = []
  filterFlowerByType: string = 'all'
  sortMode: string = 'default'
  pageIndex: number = 0
  pageSize: number = 9
  lowValue: number = 0
  highValue: number = 9

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.getAllFlowersPosts();
  }

  getAllFlowersPosts() {
    this.postService.getAll().subscribe((data: Post[]) => {
      this.initialPosts = [...data];
      this.handleSortModeChange(this.sortMode);
    });
  }

  handleSortModeChange(value: string) {
    if (value === 'default') {
      this.posts = [...this.initialPosts];
    } else if (value === 'ascending') {
      this.posts = [...this.initialPosts];
      this.posts = this.posts.sort(function (a, b) {
        return a.price - b.price;
      });
    } else {
      this.posts = [...this.initialPosts];
      this.posts = this.posts.sort(function (a, b) {
        return b.price - a.price;
      });
    }
  }

  getPaginatorData(event: { pageIndex: number }) {
    if (event.pageIndex === this.pageIndex + 1) {
      this.lowValue = this.lowValue + this.pageSize;
      this.highValue = this.highValue + this.pageSize;
    } else if (event.pageIndex === this.pageIndex - 1 && this.lowValue > 0) {
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue = this.highValue - this.pageSize;
    }
    this.pageIndex = event.pageIndex;
  }

  handleFilterAndPagination(type: string) {
    this.lowValue = 0
    this.highValue = 9
    this.paginator?.firstPage()
    this.filterFlowerByType = type
  }
}
