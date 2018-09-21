import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url_api } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
    endpoint = 'orders';

  constructor(public http: HttpClient) { }

  getOpenOrders(access_token: any) {
    return this.http.get<any[]>(url_api + this.endpoint + '/open',
    {headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + access_token
            }
    });
  }

  getOrder(access_token: any, id) {
      return this.http.get<any>(url_api + this.endpoint + '/' + id,
        {headers: {
                  'Accept': 'application/json',
                  'Authorization': 'Bearer ' + access_token
                }
        });
  }

  updateOrder(access_token: any, order: any) {
    let data = {
        status_id: 2,
        price: order.price,
        client_id: order.client_id,
        observation: order.observation,
        receive_at: order.receive_at,
        company_id: order.company_id,
        deliver: order.deliver,
        form_payment_id: order.form_payment_id,
        location_id: order.location_id
      };
    return this.http.put<any>(url_api + this.endpoint + '/' + order.id, data,{
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + access_token,
          'Content-Type': 'application/json'
        }
    });
  }
}
