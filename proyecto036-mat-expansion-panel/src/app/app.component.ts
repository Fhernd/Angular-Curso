import { Component, OnInit } from '@angular/core';
import { PostBlogService } from './services/post-blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  post: any;

  constructor(private postBlogServie: PostBlogService) {

  }

  ngOnInit(): void {
      this.postBlogServie.retornar().subscribe(resultado => this.post = resultado);
  }
}
