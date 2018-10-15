import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  endpoint = 'oauth/token';
  url_api = 'http://api.pandeco.com.br/'

  constructor(public http: HttpClient) { }

  authenticate(user: any) {
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    let data = {
      grant_type: 'password',
      client_id: 1,
      client_secret: 'kss5gCVZ2wQyRuwf5AvfPbGbwo4AjCJ8DsXidza8',
      //client_id: 5,
      //client_secret: 'HEFwoBM8Z3bvZh6HyUtO2AVWArorUiKfwp7ToAzy',
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

  addUser(access_token: any, email: string, name: string, password: string): Observable<any> {
    let data = {
      email: email,
      type: 'company',
      name: name,
      password: password
    };
    return this.http.post<any>(this.url_api + 'api/v1/users', data, {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' +access_token,
        'Content-Type': 'application/json'
      }
    });
  }

}
