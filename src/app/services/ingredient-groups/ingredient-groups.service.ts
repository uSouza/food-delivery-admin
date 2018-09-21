import { Injectable } from '@angular/core';
import { url_api } from '../../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredientGroupsService {

  endpoint = 'ingredient_groups';

  constructor(public http: HttpClient) { }

  getIngredientsGroups(access_token: any) {
    return this.http.get<any[]>(url_api + this.endpoint,
      {headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token
              }
      });
    }

    addIngredientGroup(access_token: any, ingredient_group: any) {
        let data = {
            name: ingredient_group.name,
            number_options: ingredient_group.number_options
            };
        return this.http.post<any>(url_api + this.endpoint, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }

    editIngredientGroup(access_token: any, ingredient_group: any, id: any) {
        let data = {
            name: ingredient_group.name,
            number_options: ingredient_group.number_options
            };
        return this.http.put<any>(url_api + this.endpoint + '/' + id, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }

    deleteIngredientGroup(access_token: any, id: any) {
        return this.http.delete<any>(url_api + this.endpoint + '/' + id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }
}
