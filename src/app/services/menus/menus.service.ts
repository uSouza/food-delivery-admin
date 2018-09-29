import { Injectable } from '@angular/core';
import { url_api } from '../../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

    endpoint = 'menus';

    constructor(public http: HttpClient) { }

    getMenus(access_token: any) {
      return this.http.get<any[]>(url_api + this.endpoint,
        {headers: {
                  'Accept': 'application/json',
                  'Authorization': 'Bearer ' + access_token
                }
        });
      }

    getMenu(access_token: any, id: any) {
        return this.http.get<any>(url_api + this.endpoint + '/' + id,
          {headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + access_token
                  }
          });
    }

      addMenu(access_token: any, menu: any) {
            let data = {
                description: menu.description,
                observation: menu.observation,
                date: menu.date,
                ingredients_ids: menu.ingredients_ids,
                prices_ids: menu.prices_ids
            };
            return this.http.post<any>(url_api + this.endpoint, data, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + access_token,
                    'Content-Type': 'application/json'
                }
            });
      }

      editMenu(access_token: any, menu: any, id: any) {
            let data = {
                description: menu.description,
                observation: menu.observation,
                date: menu.date,
                ingredients_ids: menu.ingredients_ids,
                prices_ids: menu.prices_ids
            };
            return this.http.put<any>(url_api + this.endpoint + '/' + id, data, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + access_token,
                    'Content-Type': 'application/json'
                }
            });
      }

      deleteMenu(access_token: any, id: any) {
          return this.http.delete<any>(url_api + this.endpoint + '/' + id, {
              headers: {
                  'Accept': 'application/json',
                  'Authorization': 'Bearer ' + access_token,
                  'Content-Type': 'application/json'
              }
          });
      }
}
