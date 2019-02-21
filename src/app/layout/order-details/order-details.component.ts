import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { OrdersService } from '../../services/orders/orders.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardService } from 'ngx-clipboard';
import { LoginService } from '../../services/login/login.service';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-order-details',
    templateUrl: './order-details.component.html',
    styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

    order: any;
    closeResult: string;
    user: any;

    constructor(public route: ActivatedRoute,
        private router: Router,
        private ordersService: OrdersService,
        private loginService: LoginService,
        private _clipboardService: ClipboardService,
        public datepipe: DatePipe,
        private modalService: NgbModal) { }

    ngOnInit() {
        if (localStorage.getItem('access_token') != null) {
            this.loginService
                .user_me(localStorage.getItem('access_token'))
                .subscribe(
                    user => {
                        this.user = user;
                    }
                );
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
                    this.setOrder(order);
                    console.log(order);
                }
            );
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
        if (product.seeIngredients) {
            product.seeIngredients = false;
            product.textIngredients = 'Ver ingredientes';
        } else {
            product.seeIngredients = true;
            product.textIngredients = 'Ocultar ingredientes';
        }
    }

    seeAdditionals(product) {
        if (product.seeAdditionals) {
            product.seeAdditionals = false;
            product.textAdditionals = 'Ver adicionais';
        } else {
            product.seeAdditionals = true;
            product.textAdditionals = 'Ocultar adicionais';
        }
    }

    confirm(content) {
        console.log(content);
        this.modalService
            .open(content, { size: 'lg' })
            .result.then((result) => {
                if (result === 'Print') {
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
        if (this.order.status_id === 1) {
            this.order.status_id = 2;
            this.ordersService
                .updateOrder(localStorage.getItem('access_token'), this.order)
                .subscribe(
                    () => {
                        this.router.navigate(['/dashboard', { message: 'Pedido confirmado com sucesso!' }]);
                    }
                );
        }

    }

    refuseOrder(content) {
        this.modalService
            .open(content, { size: 'lg' })
            .result.then((result) => {
                if (result === 'reject') {
                    this.order.status_id = 4;
                    this.ordersService
                        .updateOrder(localStorage.getItem('access_token'), this.order)
                        .subscribe(
                            () => {
                                this.router.navigate(['/dashboard', { message: 'Pedido rejeitado com sucesso!' }]);
                            }
                        );
                }
            });
    }

    sendWhatsApp() {
        window.location.href = `https://api.whatsapp.com/send?phone=55${this.order.company.cell_phone}&text=${this.getOrderFormat()}`;
    }

    copyToclipboard() {
        this._clipboardService.copyFromContent(this.getOrderFormat());
    }

    getOrderFormat() {
        const dadosCliente = '*DADOS DO CLIENTE* \n' + 'NOME: ' + this.order.client.name
            + '\nCELULAR: ' + this.order.client.cell_phone;
        let dadosEntrega = null;
        if (this.order.location.observation == null) {
            this.order.location.observation = '';
        }
        if (this.order.deliver) {
            dadosEntrega = '\n\n*DADOS PARA ENTREGA* \n' + 'ENDEREÇO: '
                + this.order.location.address + ' - ' + this.order.location.number
                + '\nBAIRRO: ' + this.order.location.district.name + '\nCOMPLEMENTO: '
                + this.order.location.observation + '\n';
        } else {
            dadosEntrega = '\n\n*CLIENTE VEM BUSCAR O PEDIDO*\n';
        }
        let dadosMarmita = '';
        let count = 1;
        this.order.products.forEach((p) => {
            dadosMarmita = dadosMarmita + '\n*MARMITA (' + count + '):*' + '\nTAMANHO: ' + p.price.size
                + ' - R$' + p.price.price + '\nINGREDIENTES: ';
            p.ingredients.forEach(i => {
                dadosMarmita = dadosMarmita + i.name + ';';
            });
            if (p.additionals.length > 0) {
                dadosMarmita = dadosMarmita + '\nADICIONAIS ';
                p.additionals.forEach(add => {
                    dadosMarmita = dadosMarmita + '\n' + add.name
                        + ' - Qtd: ' + add.pivot.quantity + ' - Total: R$'
                        + (add.value * add.pivot.quantity) + '\n';
                });
            }
            ++count;
        });

        let freight = null;

        if (this.order.freight == null || this.order.freight.value === 0) {
            freight = 'gratuito';
        } else {
            freight = `R$ ${this.order.freight.value}`;
        }

        const dadosGerais = '\n*DADOS GERAIS DO PEDIDO*\n' + 'PREÇO: R$' + this.order.price
            + '\nFORMA PAGAMENTO: ' + this.order.form_payment.description
            + '\nVALOR ENTREGA: ' + freight
            + '\nHORÁRIO DE ENTREGA: ' + this.datepipe.transform(this.order.receive_at, 'HH:mm')
            + '\nOBSERVAÇÕES: ' + this.order.observation;
        return '*PEDIDO REALIZADO PELO PANDECO!* 🚀🚀🚀🚀\n\n'
            + dadosCliente + dadosEntrega + dadosMarmita
            + dadosGerais;
    }

}
