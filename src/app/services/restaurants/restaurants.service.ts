import { Injectable } from '@angular/core';
import { url_api } from '../../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

    endpoint = 'companies';

    constructor(public http: HttpClient) { }

    getRestaurants(access_token: any) {
        return this.http.get<any[]>(url_api + this.endpoint, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        });
    }

    getRestaurant(access_token: any, id: any) {
        return this.http.get<any>(url_api + this.endpoint + '/' + id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        });
    }

    addRestaurant(access_token: any, restaurant: any) {
        let data = {
            image_base64: restaurant.image,
            social_name: restaurant.social_name,
            fantasy_name: restaurant.fantasy_name,
            cell_phone: restaurant.cell_phone,
            phone: restaurant.phone,
            responsible_name: restaurant.responsible_name,
            responsible_phone: restaurant.responsible_phone,
            user_id: restaurant.user_id,
            observation: restaurant.observation,
            cnpj: restaurant.cnpj,
            order_limit: restaurant.order_limit,
            tags_ids: restaurant.tags_ids,
            delivery_value: restaurant.delivery_value,
            avg_delivery_time: restaurant.avg_delivery_time
        };

        console.log(data.image_base64);

        return this.http.post<any>(url_api + this.endpoint, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            }
        });
    }

    editRestaurant(access_token: any, restaurant: any, id: any) {
        let data = {
            social_name: restaurant.social_name,
            fantasy_name: restaurant.fantasy_name,
            cell_phone: restaurant.cell_phone,
            responsible_name: restaurant.responsible_name,
            responsible_phone: restaurant.responsible_phone,
            user_id: restaurant.user_id,
            observation: restaurant.observation,
            image_base64: restaurant.image,
            order_limit: restaurant.order_limit,
            tags_ids: restaurant.tags_ids,
            delivery_value: restaurant.delivery_value,
            avg_delivery_time: restaurant.avg_delivery_time
        };
        return this.http.put<any>(url_api + this.endpoint + '/' + id, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            }
        });
      }

    deleteRestaurant(access_token: any, id: any) {
        return this.http.delete<any>(url_api + this.endpoint + '/' + id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    }

    restoreRestaurant(access_token: any, id: any) {
        return this.http.get<any>(url_api + this.endpoint + '/restore/' + id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        });
    }

    addLocation(access_token: any, location: any, restaurant: any) {
        let data = {
          address: location.address,
          number: location.number,
          district_id: location.district,
          postal_code: location.postal_code,
          observation: location.observation,
          company_id: restaurant.id
        };
        return this.http.post<any>(url_api + 'companies_locations', data, {
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + access_token,
            'Content-Type': 'application/json'
          }
        });
    }

    getLocations(access_token: any, id) {
        return this.http.get<any>(url_api + 'companies_locations/company/' + id, {
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + access_token,
            'Content-Type': 'application/json'
          }
        });
    }

    getCities(access_token: any) {
        return this.http.get<any[]>(url_api + 'cities',
          {
            headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + access_token
            }
          });
      }

      getDistricts(access_token: any, city_id: any) {
        return this.http.get<any[]>(url_api + 'districts/city/' + city_id,
          {
            headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + access_token
            }
          });
      }

    editLocation(access_token: any, location: any, restaurant: any, id: any) {
        let data = {
          address: location.address,
          number: location.number,
          district_id: location.district,
          postal_code: location.postal_code,
          observation: location.observation
        };
        return this.http.put<any>(url_api + 'companies_locations/' + id, data, {
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + access_token,
            'Content-Type': 'application/json'
          }
        });
    }

    addWorkedDays(access_token: any, wdays: any, restaurant: any) {
        let data = {
            company_id: restaurant.id,
            sunday: wdays.sunday,
            monday: wdays.monday,
            tuesday: wdays.tuesday,
            wednesday: wdays.wednesday,
            thursday: wdays.thursday,
            friday: wdays.friday,
            saturday: wdays.saturday
          };
          return this.http.post<any>(url_api + 'worked_days', data, {
            headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + access_token,
              'Content-Type': 'application/json'
            }
          });
    }

    editWorkedDays(access_token: any, wdays: any, restaurant: any, id: any) {
        let data = {
            company_id: restaurant.id,
            sunday: wdays.sunday,
            monday: wdays.monday,
            tuesday: wdays.tuesday,
            wednesday: wdays.wednesday,
            thursday: wdays.thursday,
            friday: wdays.friday,
            saturday: wdays.saturday
          };
          return this.http.put<any>(url_api + 'worked_days/' + id, data, {
            headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + access_token,
              'Content-Type': 'application/json'
            }
          });
    }

    addServiceHours(access_token: any, service_hours: any, restaurant: any) {
        let data = {
            company_id: restaurant.id,
            opening: service_hours.opening,
            closure: service_hours.closure
          };
          return this.http.post<any>(url_api + 'service_hours', data, {
            headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + access_token,
              'Content-Type': 'application/json'
            }
          });
    }

    addFreights(access_token: any, freight: any) {
        let data = {
            company_id: freight.company_id,
            district_id: freight.district_id,
            value: freight.value
          };
          return this.http.post<any>(url_api + 'freights', data, {
            headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + access_token,
              'Content-Type': 'application/json'
            }
          });
    }

    destroyFreights(access_token: any, restaurant: any) {
        return this.http.delete<any>(url_api + 'freights/company/' + restaurant.id, {
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + access_token,
            'Content-Type': 'application/json'
          }
        });
  }

    destroyServiceHours(access_token: any, restaurant: any) {
          return this.http.delete<any>(url_api + 'service_hours/company/' + restaurant.id, {
            headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + access_token,
              'Content-Type': 'application/json'
            }
          });
    }

    editServiceHours(access_token: any, service_hours: any, restaurant: any, id: any) {
        let data = {
            company_id: restaurant.id,
            opening: service_hours.opening,
            closure: service_hours.closure
          };
          return this.http.put<any>(url_api + 'service_hours/' + id, data, {
            headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + access_token,
              'Content-Type': 'application/json'
            }
          });
    }
}
