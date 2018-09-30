import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../services/orders/orders.service';

@Component({
  selector: 'app-closed-orders',
  templateUrl: './closed-orders.component.html',
  styleUrls: ['./closed-orders.component.scss']
})
export class ClosedOrdersComponent implements OnInit {

    orders: any[] = [];
    page: number = 1;
    public alerts: Array<any> = [];

    constructor(public router: Router,
        public route: ActivatedRoute,
        private ordersService: OrdersService) { }

    ngOnInit() {
        if (localStorage.getItem('access_token') == null) {
            this.router.navigate(['/login']);
        }
        this.getOrders();
    }

    getOrders() {
        this.ordersService
            .getClosedOrders(localStorage.getItem('access_token'))
            .subscribe(
                orders => this.orders = orders
            )
    }

    showOrder(order: any) {
        this.router.navigate(['/orders', { id: order.id }]);
    }

}
