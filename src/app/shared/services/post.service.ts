import {Observable} from "rxjs";
import {Post} from "../interfaces";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class PostService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(` http://localhost:3000/posts`);
  }

}
