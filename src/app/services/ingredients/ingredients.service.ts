import { Injectable } from '@angular/core';
import { url_api } from '../../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  endpoint = 'ingredients';

  constructor(public http: HttpClient) { }

  getIngredients(access_token: any) {
    return this.http.get<any[]>(url_api + this.endpoint,
      {headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token
              }
      });
    }

    addIngredient(access_token: any, ingredient: any) {
        let data = {
            name: ingredient.name,
            ingredient_group_id: ingredient.ingredient_group_id
            };
        return this.http.post<any>(url_api + this.endpoint, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }

    editIngredient(access_token: any, ingredient: any, id: any) {
        let data = {
            name: ingredient.name,
            ingredient_group_id: ingredient.ingredient_group_id
            };
        return this.http.put<any>(url_api + this.endpoint + '/' + id, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }

    deleteIngredient(access_token: any, id: any) {
        return this.http.delete<any>(url_api + this.endpoint + '/' + id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }
}
