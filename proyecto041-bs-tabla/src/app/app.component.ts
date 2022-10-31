import { Component, OnInit } from '@angular/core';
import { PostBlogService } from './services/post-blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: any;
  titulosColumnas = ['Código usuario', 'Código de post', 'Título', 'Descripción'];

  constructor(private postBlogService: PostBlogService) {

  }

  ngOnInit() {
    this.postBlogService.obtenerPosts().subscribe((resultado) => {
      this.posts = resultado;
    });
  }
}
