import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url_api = 'http://api.pandeco.com.br/';
  endpoint = 'oauth/token';

  constructor(public http: HttpClient) { }

  authenticate(user: any) {
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    let data = {
      grant_type: 'password',
      client_id: 1,
      client_secret: 'kss5gCVZ2wQyRuwf5AvfPbGbwo4AjCJ8DsXidza8',
      username: user.email,
      password: user.password,
      scope: ''
    };
    return this.http.post(this.url_api + this.endpoint, data, {headers: headers});
  }

  user_me(access_token: any) {
    return this.http.get(this.url_api + 'api/v1/users/me',
    {headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + access_token
            }
    });
  }
}
