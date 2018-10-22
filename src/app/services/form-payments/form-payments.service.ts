import { Injectable } from '@angular/core';
import { url_api } from '../../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormPaymentsService {

    endpoint = 'form_payments';

    constructor(public http: HttpClient) { }

    getFormPayments(access_token: any) {
      return this.http.get<any[]>(url_api + this.endpoint,
        {headers: {
                  'Accept': 'application/json',
                  'Authorization': 'Bearer ' + access_token
                }
        });
      }

    addFormPayment(access_token: any, form_payment: any) {
          let data = {
              description: form_payment.description,
            };
          return this.http.post<any>(url_api + this.endpoint, data, {
              headers: {
                  'Accept': 'application/json',
                  'Authorization': 'Bearer ' + access_token,
                  'Content-Type': 'application/json'
              }
          });
    }

    editFormPayment(access_token: any, form_payment: any, id: any) {
        let data = {
            description: form_payment.description,
          };
          return this.http.put<any>(url_api + this.endpoint + '/' + id, data, {
              headers: {
                  'Accept': 'application/json',
                  'Authorization': 'Bearer ' + access_token,
                  'Content-Type': 'application/json'
              }
          });
      }

      deleteFormPayment(access_token: any, id: any) {
          return this.http.delete<any>(url_api + this.endpoint + '/' + id, {
              headers: {
                  'Accept': 'application/json',
                  'Authorization': 'Bearer ' + access_token,
                  'Content-Type': 'application/json'
              }
          });
      }
}
