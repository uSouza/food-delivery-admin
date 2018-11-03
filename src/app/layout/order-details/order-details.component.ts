import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { OrdersService } from '../../services/orders/orders.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardService } from 'ngx-clipboard';

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
                private _clipboardService: ClipboardService,
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

    refuseOrder(content) {
        this.modalService
            .open(content, { size: 'lg' })
            .result.then((result) => {
                if (result == 'reject') {
                    this.order.status_id = 4;
                    this.ordersService
                        .updateOrder(localStorage.getItem('access_token'), this.order)
                        .subscribe(
                            order => {
                                this.router.navigate(['/dashboard', { message: 'Pedido rejeitado com sucesso!' }]);
                            }
                        )
                }
            });
    }

    copyToclipboard() {
        let dadosCliente = '*DADOS DO CLIENTE* \n' + 'NOME: ' + this.order.client.name + '\nCELULAR: ' + this.order.client.cell_phone;
        let dadosEntrega = null;
        if (this.order.location.observation == null) {
            this.order.location.observation = '';
        }
        if (this.order.deliver) {
            dadosEntrega = '\n\n*DADOS PARA ENTREGA* \n' + 'ENDEREÇO: ' + this.order.location.address + ' - ' + this.order.location.number
                + '\nBAIRRO: ' + this.order.location.district + '\nCOMPLEMENTO: ' + this.order.location.observation;
        } else {
            dadosEntrega = '\n\n*CLIENTE VEM BUSCAR O PEDIDO*';
        }
        let descricaoMarmita = '\n\n*MARMITAS*';
        let dadosMarmita = '';
        this.order.products.forEach(p => {
            dadosMarmita = dadosMarmita + '\nTAMANHO: ' + p.price.size + ' - R$' + p.price.price + '\nINGREDIENTES: ';
            p.ingredients.forEach(i => {
                dadosMarmita = dadosMarmita + i.name + ';';
            });
            if (p.additionals.length > 0) {
                dadosMarmita = dadosMarmita + '\nADICIONAIS '
                p.additionals.forEach(add => {
                    dadosMarmita = dadosMarmita + '\n' + add.name + ' - QTD: ' + add.pivot.quantity + ' - TOTAL: R$' + (add.value * add.pivot.quantity) + '\n'
                });
            }
            dadosMarmita = dadosMarmita + '__________________________________________\n'
        });

        if (this.order.company.delivery_value == 0) {
            this.order.company.delivery_value = 'gratuíta';
        }

        let dadosGerais = '\n*DADOS GERAIS DO PEDIDO*\n' + 'PREÇO: R$' + this.order.price + '\nFORMA PAGAMENTO: ' + this.order.form_payment.description
            + '\nVALOR ENTREGA: ' + this.order.company.delivery_value + '\nHORÁRIO DE ENTREGA: ' + this.order.receive_at + '\nOBSERVAÇÕES: ' + this.order.observation;

        this._clipboardService.copyFromContent('*PEDIDO REALIZADO PELO PANDECO!* 🚀🚀🚀🚀\n\n' + dadosCliente + dadosEntrega + descricaoMarmita + dadosMarmita
             + dadosGerais);
    }

}
