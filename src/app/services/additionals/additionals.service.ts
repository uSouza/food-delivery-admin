import { Injectable } from '@angular/core';
import { url_api } from '../../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AdditionalsService {

    endpoint = 'api/v1/additionals';

    constructor(public http: HttpClient) {

    }

    getAdditionals(access_token: any) {
        return this.http.get<any[]>(url_api + this.endpoint,
            {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + access_token
                }
            });
    }

    addAdditional(access_token: any, add: any) {
        let data = {
            name: add.name,
            value: add.value,
            isDrink: add.isDrink
        };
        return this.http.post<any>(url_api + this.endpoint, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }

    editAdditional(access_token: any, add: any, id: any) {
        let data = {
            name: add.name,
            value: add.value,
            isDrink: add.isDrink
        };
        return this.http.put<any>(url_api + this.endpoint + '/' + id, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }

    deleteAdditional(access_token: any, id: any) {
        return this.http.delete<any>(url_api + this.endpoint + '/' + id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }

    restoreAdditional(access_token: any, id: any) {
        return this.http.get<any>(url_api + this.endpoint + '/restore/' + id,
            {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + access_token
                }
            });
    }
}
