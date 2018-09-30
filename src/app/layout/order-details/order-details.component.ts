import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { OrdersService } from '../../services/orders/orders.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

    order: any;
    closeResult: string;

    constructor(public route: ActivatedRoute,
                private router: Router,
                private ordersService: OrdersService,
                private modalService: NgbModal) { }

    ngOnInit() {
        if (localStorage.getItem('access_token') != null) {
            this.getOrder();
        } else {
            this.router.navigate(['/login']);
        }

    }

    getOrder() {
        this.ordersService
        .getOrder(localStorage.getItem('access_token'), this.route.snapshot.paramMap.get('id'))
        .subscribe(
            order => {
                this.setOrder(order)
            }
        )
    }

    setOrder(order) {
        order.products.forEach((p) => {
            p.textIngredients = 'Ver ingredientes';
            p.textAdditionals = 'Ver adicionais';
        });
        console.log(order);
        this.order = order;
    }

    seeIngredients(product) {
        if (product.seeIngredients == true) {
            product.seeIngredients = false;
            product.textIngredients = 'Ver ingredientes'
        } else {
            product.seeIngredients = true;
            product.textIngredients = 'Ocultar ingredientes'
        }
    }

    seeAdditionals(product) {
        if (product.seeAdditionals == true) {
            product.seeAdditionals = false;
            product.textAdditionals = 'Ver adicionais'
        } else {
            product.seeAdditionals = true;
            product.textAdditionals = 'Ocultar adicionais'
        }
    }

    confirm(content) {
        this.modalService
            .open(content, { size: 'lg' })
            .result.then((result) => {
                if (result == 'Print') {
                    this.printOrder();
                } else {
                    this.confirmOrder();
                }
            });
    }

    printOrder() {
        let printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
            <html>
                <head>
                    <title>Impressão do pedido ${this.order.id}</title>
                    <style>
                    </style>
                </head>
                <body onload="window.print();window.close()">${printContents}</body>
            </html>`
        );
        popupWin.document.close();
        this.confirmOrder();
    }

    confirmOrder() {
        if (this.order.status_id == 1) {
            this.order.status_id = 2;
            this.ordersService
                .updateOrder(localStorage.getItem('access_token'), this.order)
                .subscribe(
                    order => {
                        this.router.navigate(['/dashboard', { message: 'Pedido confirmado com sucesso!' }]);
                    }
                )
        }

    }

}
