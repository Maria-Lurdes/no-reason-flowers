import {Subject, Subscription} from "rxjs";
import {Post} from "../interfaces";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn:'root'})
export class PostService {
    constructor(private http: HttpClient) {}

    public flowersPostsArray = new Subject<Post[]>();

      getAll(): Subscription{
        return this.http.get<Post[]>(` http://localhost:3000/posts`).subscribe((data: Post[]) => {
            this.flowersPostsArray.next(data);
          })
      }

}
