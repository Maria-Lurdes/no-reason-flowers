import {Subject} from "rxjs";
import {Post} from "../interfaces";
import {Injectable} from "@angular/core";
import posts from '../db.json';

@Injectable({providedIn:'root'})
export class PostService {
    constructor() {
    }

    public flowersPostsArray = new Subject<Post[]>();

    getAllFlowersPosts(){
      this.flowersPostsArray.next(posts);
    }

}
