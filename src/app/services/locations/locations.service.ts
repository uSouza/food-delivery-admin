import { Injectable } from '@angular/core';
import { url_api } from '../../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

    constructor(public http: HttpClient) { }

    getStates(access_token: any) {
        return this.http.get<any[]>(url_api + 'states',
          {headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + access_token
                  }
          });
    }

    getCities(access_token: any) {
        return this.http.get<any[]>(url_api + 'cities',
          {headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + access_token
                  }
          });
    }

    getDistrictsByCity(access_token: any, city_id) {
        return this.http.get<any[]>(url_api + 'districts/city/' + city_id,
          {headers: {
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
        return this.http.post<any>(url_api + 'cities', data, {
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
        return this.http.post<any>(url_api + 'district', data, {
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
        return this.http.put<any>(url_api + 'cities' + '/' + id, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }

    deleteCity(access_token: any, id: any) {
        return this.http.delete<any>(url_api + 'cities' + '/' + id, {
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
        return this.http.put<any>(url_api + 'districts' + '/' + id, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }

    deleteDistrict(access_token: any, id: any) {
        return this.http.delete<any>(url_api + 'districts' + '/' + id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }
}
