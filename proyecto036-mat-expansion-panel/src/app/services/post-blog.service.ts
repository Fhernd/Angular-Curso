import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostBlogService {

  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
