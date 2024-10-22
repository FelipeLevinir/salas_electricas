import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  private baseUrl: string = `https://graph.instagram.com/${environment.instagramUserId}/media`;
  private accessToken: string = environment.instagramAccessToken;

  constructor(private http: HttpClient) { }

  // Obtener los últimos 3 posts de Instagram
  getRecentPosts(): Observable<any> {
    const url = `${this.baseUrl}?fields=id,media_type,media_url,permalink,thumbnail_url,caption&access_token=${this.accessToken}`;
    return this.http.get(url).pipe(
      map((response: any) => response.data.slice(0, 12)) 
    );
  }
}
