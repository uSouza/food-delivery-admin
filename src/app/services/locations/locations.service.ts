import { Injectable } from '@angular/core';
import { url_api } from '../../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LocationsService {

    constructor(public http: HttpClient) { }

    getStates(access_token: any) {
        return this.http.get<any[]>(url_api + 'api/v1/states',
            {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + access_token
                }
            });
    }

    getCities(access_token: any) {
        return this.http.get<any[]>(url_api + 'api/v1/cities',
            {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + access_token
                }
            });
    }

    getDistrictsByCity(access_token: any, city_id) {
        return this.http.get<any[]>(url_api + 'api/v1/districts/city/' + city_id,
            {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + access_token
                }
            });
    }

    getDistricts(access_token: any) {
        return this.http.get<any[]>(url_api + 'api/v1/districts',
            {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + access_token
                }
            });
    }

    addCity(access_token: any, city: any) {
        const data = {
            name: city.name,
            state_id: city.state_id
        };
        return this.http.post<any>(url_api + 'api/v1/cities', data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }

    addDistrict(access_token: any, district: any) {
        const data = {
            name: district.name,
            city_id: district.city_id
        };
        return this.http.post<any>(url_api + 'api/v1/districts', data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }

    editCity(access_token: any, city: any, id: any) {
        const data = {
            name: city.name,
            state_id: city.state_id
        };
        return this.http.put<any>(url_api + 'api/v1/cities' + '/' + id, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }

    deleteCity(access_token: any, id: any) {
        return this.http.delete<any>(url_api + 'api/v1/cities' + '/' + id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }

    editDistrict(access_token: any, district: any, id: any) {
        const data = {
            name: district.name,
            city_id: district.city_id
        };
        return this.http.put<any>(url_api + 'api/v1/districts' + '/' + id, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }

    deleteDistrict(access_token: any, id: any) {
        return this.http.delete<any>(url_api + 'api/v1/districts' + '/' + id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }
}
