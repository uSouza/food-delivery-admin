import { Injectable } from '@angular/core';
import { url_api } from '../../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TagsService {

    endpoint = 'api/v1/tags';

    constructor(public http: HttpClient) { }

    getTags(access_token: any) {
        return this.http.get<any[]>(url_api + this.endpoint, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        });
    }

    addTag(access_token: any, tag: any) {
        const data = {
            name: tag
        };
        return this.http.post<any>(url_api + this.endpoint, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }

    editTag(access_token: any, tag: any, id: any) {
        const data = {
            name: tag
        };
        return this.http.put<any>(url_api + this.endpoint + '/' + id, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }

    deleteTag(access_token: any, id: any) {
        return this.http.delete<any>(url_api + this.endpoint + '/' + id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }
}
