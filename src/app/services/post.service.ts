import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { tap, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:5000/api/posts');
  }

  addPost(data: Post): Observable<Post> {
    return this.http.post<Post>('http://localhost:5000/api/posts', data);
  }

  updatePost(data: Post): Observable<Post> {
    return this.http.put<Post>(
      `http://localhost:5000/api/posts/${data.id}`,
      data
    );
  }

  deletePost(postId: string): Observable<any> {
    return this.http.delete(`http://localhost:5000/api/posts/${postId}`);
  }
}
