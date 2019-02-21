import { Injectable } from '@angular/core';
import { url_api } from '../../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SizesService {

    endpoint = 'api/v1/prices';

    constructor(public http: HttpClient) { }

    getSizes(access_token: any) {
        return this.http.get<any[]>(url_api + this.endpoint,
            {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + access_token
                }
            });
    }

    addSize(access_token: any, size: any) {
        const data = {
            size: size.size,
            price: size.price
        };

        return this.http.post<any>(url_api + this.endpoint, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }

    editSize(access_token: any, size: any, id: any) {
        const data = {
            size: size.size,
            price: size.price
        };
        return this.http.put<any>(url_api + this.endpoint + '/' + id, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }

    deleteSize(access_token: any, id: any) {
        return this.http.delete<any>(url_api + this.endpoint + '/' + id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }
}
