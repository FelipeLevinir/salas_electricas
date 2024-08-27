import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaServiceService {

  private facebookApiUrl = 'https://graph.facebook.com/v12.0/your_page_id/posts?access_token=your_access_token';
  private instagramApiUrl = 'https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=your_access_token';
  private linkedinApiUrl = 'https://api.linkedin.com/v2/shares?q=owners&owners=urn:li:organization:your_organization_id';

  constructor(private http: HttpClient) { }

  getFacebookPosts(): Observable<any> {
    return this.http.get(this.facebookApiUrl);
  }

  getInstagramPosts(): Observable<any> {
    return this.http.get(this.instagramApiUrl);
  }

  getLinkedInPosts(): Observable<any> {
    return this.http.get(this.linkedinApiUrl);
  }
}
