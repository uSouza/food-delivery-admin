import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { OrdersService } from '../../services/orders/orders.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

    orders: any[];

    constructor(public router: Router,
                private ordersService: OrdersService) {

    }

    ngOnInit() {
        if (localStorage.getItem('access_token') == null) {
            this.router.navigate(['/login']);
        }
        this.getOrders();
    }

    getOrders() {
        this.ordersService
            .getOpenOrders(localStorage.getItem('access_token'))
            .subscribe(
                orders => {
                    this.orders = orders
                }
            )
    }

    showOrder(order: any) {
        console.log(order);
        this.router.navigate(['/orders', { id: order.id }]);
    }
}
