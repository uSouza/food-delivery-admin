import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  endpoint = 'oauth/token';
  url_api = 'http://api.pandeco.com.br/'; //'http://localhost:8000/';

  constructor(public http: HttpClient) { }

  authenticate(user: any) {
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    let data = {
      grant_type: 'password',
      client_id: 1,
      client_secret: 'kss5gCVZ2wQyRuwf5AvfPbGbwo4AjCJ8DsXidza8',
      //client_id: 7,
      //client_secret: 'ByFwhpPZlrEJH4JijXzGFXSt38jGn5ocjAR1NLt5',
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

  updateUser(access_token: any, email: string, name: string, password: string, id: any): Observable<any> {
    let data = null;

    if (password != null) {
        let data = {
            email: email,
            type: 'company',
            name: name,
            password: password
          };
    } else {
        let data = {
            email: email,
            type: 'company',
            name: name
          };
    }

    return this.http.put<any>(this.url_api + 'api/v1/users/' + id, data, {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' +access_token,
        'Content-Type': 'application/json'
      }
    });
  }

  setOneSignalId(access_token: any, player_id: any) {
    let data = {
      player_id: player_id
    };
    return this.http.post<any>(this.url_api + 'api/v1/users/one_signal', data, {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + access_token,
        'Content-Type': 'application/json'
      }
    });
  }

  sendPushNotification(title: any, content: any) {
    let data = {
      app_id: '18e4fb1f-4d47-4196-8ded-4883a763d9d7',
      included_segments: ['All'],
      data: {foo: 'bar'},
      contents: {en: content},
      headings: {en: title}
    }
    return this.http.post<any>('https://onesignal.com/api/v1/notifications', data, {
      headers: {
        'Authorization': 'Basic NjgxNTYxYzctN2FiMi00ZjlmLWE3ODItNmI1NTdmNDgxOGEy',
        'Content-Type': 'application/json'
      }
    });

  }

}
