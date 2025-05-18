import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from './models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl = 'http://localhost:8081/api/blog';

  constructor(private http : HttpClient){ }

  getAllBlogs(): Observable<Blog[]>{
   return this.http.get<Blog[]>('http://localhost:8081/api/blog/getBlogs');
  }

  getBlogsById(Id : number): Observable<Blog>{
   return this.http.get<Blog>(`${this.baseUrl}/${Id}`);
  }

  createBlogs(blog: Blog) :Observable<Blog>{
    return this.http.post<Blog>(this.baseUrl,blog);
  }
}
