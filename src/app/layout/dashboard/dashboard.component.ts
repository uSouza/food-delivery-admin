import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { OrdersService } from '../../services/orders/orders.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

    orders: any[];
    page: number = 1;
    public alerts: Array<any> = [];

    constructor(public router: Router,
        public route: ActivatedRoute,
        private ordersService: OrdersService,
        private modalService: NgbModal,
        private loginService: LoginService) {

    }

    ngOnInit() {
        if (this.route.snapshot.paramMap.get('message') != null) {
            this.showAlert('success', this.route.snapshot.paramMap.get('message'));
        }
        if (localStorage.getItem('access_token') == null) {
            this.router.navigate(['/login']);
        }
        if (localStorage.getItem('player_id') != null) {
            this.setOneSignalUserID(localStorage.getItem('player_id'));
        }
        this.getOrders();
    }

    setOneSignalUserID(id) {
        this.loginService
            .setOneSignalId(localStorage.getItem('access_token'), id)
            .subscribe(
                user => {
                    console.log(user)
                }
            )
    }

    getOrders() {
        this.ordersService
            .getOpenOrders(localStorage.getItem('access_token'))
            .subscribe(
                orders => {
                    this.orders = orders;
                }
            )
    }

    showOrder(order: any) {
        console.log(order);
        this.router.navigate(['/orders', { id: order.id }]);
    }

    showAlert(type, err) {
        this.alerts.push(
            {
                id: 1,
                type: type,
                message: err
            }
        )
    }

    closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    cancelOrder(order) {
        this.ordersService
            .deleteOrder(localStorage.getItem('access_token'), order.id)
            .subscribe(
                order => {
                    this.getOrders()
                }
            )
    }

}
