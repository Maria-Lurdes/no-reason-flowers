import { Pipe, PipeTransform } from '@angular/core';
import {Post} from "./interfaces";

@Pipe({
  name: 'filterType'
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], type = ''): Post[] {
    if (!type || type === 'all') {
      return posts
    }

    return posts.filter(post => {
      return post.flowerType === type
    })
  }

}
