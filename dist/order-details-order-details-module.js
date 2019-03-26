(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-details-order-details-module"],{

/***/ "./src/app/layout/order-details/order-details-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/order-details/order-details-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: OrderDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsRoutingModule", function() { return OrderDetailsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-details.component */ "./src/app/layout/order-details/order-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _order_details_component__WEBPACK_IMPORTED_MODULE_2__["OrderDetailsComponent"]
    }
];
var OrderDetailsRoutingModule = /** @class */ (function () {
    function OrderDetailsRoutingModule() {
    }
    OrderDetailsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OrderDetailsRoutingModule);
    return OrderDetailsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/order-details/order-details.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/order-details/order-details.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Impressão do pedido</h4>\n    </div>\n    <div class=\"modal-body\">\n        <p>Deseja imprimir o pedido?</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('NoPrint')\">Não</button>\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Print')\">Sim</button>\n    </div>\n</ng-template>\n\n<ng-template #reject let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Rejeição do pedido</h4>\n    </div>\n    <div class=\"modal-body\">\n        <p>Deseja realmente rejeitar o pedido?</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('noReject')\">Não</button>\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('reject')\">Sim</button>\n    </div>\n</ng-template>\n\n<div class=\"content\">\n    <div class=\"row\">\n        <div class=\"col-xl-12\">\n            <h2>\n                Pedido nº {{order.id}}\n            </h2>\n            <h3 *ngIf=\"user.type=='admin'\">\n                <strong>Restaurante: </strong>{{ order.company.fantasy_name }}\n            </h3>\n        </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-xl-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Dados do cliente\n                </div>\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\"><strong>Nome: </strong>{{ order.client.name }}</h5>\n                    <p class=\"card-text\"><strong>Celular: </strong>{{ order.client.cell_phone }}</p>\n                    <p class=\"card-text\"><strong>Dispositivo: </strong>{{ order.platform }}</p>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"order.deliver\" class=\"col-xl-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Dados de entrega\n                </div>\n                <div class=\"card-body\">\n                    <p class=\"card-text\"><strong>Endereço: </strong>{{ order.location.address }} - {{\n                        order.location.number }}</p>\n                    <p class=\"card-text\"><strong>Bairro: </strong>{{ order.location.district.name }}</p>\n                    <p class=\"card-text\"><strong>Observações: </strong>{{ order.location.observation }}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Marmitas\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"row\" *ngFor=\"let product of order.products\">\n                        <div class=\"col-xl-6\">\n                            <div class=\"card\">\n                                <div class=\"card-header\">\n                                    {{ product.menu.description }}\n                                </div>\n                                <div class=\"card-body\">\n                                    <p class=\"card-text\"><strong>Marmita: </strong>{{ product.price.size }} - {{\n                                        product.price.price | currency: 'BRL': true }}</p>\n                                    <p class=\"card-text\"><strong>Data do cardápio: </strong>{{ product.menu.date |\n                                        date:'dd/MM/yyyy'}}</p>\n                                    <div class=\"card-text\">\n                                        <button class=\"btn btn-default\" (click)=\"seeIngredients(product)\">\n                                            {{ product.textIngredients }}\n                                        </button>\n                                        <div *ngIf=\"product.seeIngredients\">\n                                            <div style=\"margin-top: 10px\" class=\"card card-body\">\n                                                <ul>\n                                                    <li *ngFor=\"let ingredient of product.ingredients\">\n                                                        {{ ingredient.name }}\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div style=\"margin-top: 10px\" class=\"card-text\">\n                                        <button *ngIf=\"product.additionals.length > 0\" class=\"btn btn-default\"\n                                            (click)=\"seeAdditionals(product)\">\n                                            {{ product.textAdditionals }}\n                                        </button>\n                                        <div *ngIf=\"product.seeAdditionals\">\n                                            <div style=\"margin-top: 10px\" class=\"card card-body\">\n                                                <ul>\n                                                    <li *ngFor=\"let add of product.additionals\">\n                                                        <p>\n                                                            {{ add.name }}\n                                                        </p>\n                                                        <p style=\"font-size: small; margin-top: -20px\">\n                                                            quantidade: {{ add.pivot.quantity }}\n                                                        </p>\n                                                        <p style=\"font-size: small; margin-top: -20px\">\n                                                            preço unitário: {{ add.value | currency: 'BRL': true }}\n                                                        </p>\n                                                        <p style=\"font-size: small; margin-top: -20px\">\n                                                            total: {{ add.value * add.pivot.quantity | currency: 'BRL':\n                                                            true }}\n                                                        </p>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Dados gerais do pedido\n                </div>\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\"><strong>Preço: </strong>{{ order.price | currency: 'BRL': true}}</h5>\n                    <p class=\"card-text\"><strong>Forma de pagamento: </strong>{{ order.form_payment.description }}</p>\n                    <p *ngIf=\"order.status_id == 1 || order.status_id == 3\" class=\"card-text\"><strong>Status:\n                        </strong>pendente\n                        de confirmação</p>\n                    <p *ngIf=\"order.freight_id != null\" class=\"card-text\"><strong>Valor de entrega: </strong>{{\n                        order.freight.value | currency: 'BRL': true }}</p>\n                    <p *ngIf=\"order.deliver && order.time_delivery == null\" class=\"card-text\"><strong>Horário de\n                            entrega: </strong>{{ order.receive_at | date: 'dd/MM/yyy hh:mm' }}</p>\n                    <p *ngIf=\"!order.deliver && order.time_delivery == null\" class=\"card-text\"><strong>Horário de\n                            retirada: </strong>{{ order.receive_at | date: 'dd/MM/yyy hh:mm' }}</p>\n                    <p *ngIf=\"order.deliver && order.time_delivery != null\" class=\"card-text\"><strong>Entregar em:\n                        </strong>{{ order.time_delivery }}</p>\n                    <p *ngIf=\"!order.deliver && order.time_delivery != null\" class=\"card-text\"><strong>Retirar em:\n                        </strong>{{ order.time_delivery }}</p>\n                    <p class=\"card-text\"><strong>Observações: </strong>{{ order.observation }}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl-12 text-right\">\n            <button type=\"button\" class=\"btn btn-lg btn-default\" style=\"margin-right: 10px\"\n                routerLink=\"/dashboard\">Voltar</button>\n            <button type=\"button\" class=\"btn btn-lg btn-warning\" (click)=\"copyToclipboard()\"\n                style=\"margin-right: 10px\">Copiar</button>\n            <button type=\"button\" class=\"btn btn-lg btn-success\" (click)=\"sendWhatsApp()\"\n                style=\"margin-right: 10px\">WhatsApp</button>\n            <button *ngIf=\"order.status_id == 1\" type=\"button\" class=\"btn btn-lg btn-danger\"\n                (click)=\"refuseOrder(reject)\" style=\"margin-right:10px\">Rejeitar</button>\n            <button *ngIf=\"order.status_id == 1\" type=\"button\" class=\"btn btn-lg btn-success\"\n                (click)=\"confirm(content)\">Confirmar</button>\n            <button *ngIf=\"order.status_id == 2\" type=\"button\" class=\"btn btn-lg btn-success\"\n                (click)=\"printOrder()\">Imprimir</button>\n        </div>\n    </div>\n</div>\n\n<div style=\"display: none;\" id=\"print-section\">\n    <h2>Pedido nº {{order.id}}</h2>\n    <div>\n        <h3>Dados do cliente</h3>\n        <p style=\"font-size: small\"><strong>Nome: </strong>{{ order.client.name }}</p>\n        <p style=\"font-size: small\"><strong>Celular: </strong>{{ order.client.cell_phone }}</p>\n        <p style=\"font-size: small\"><strong>Dispositivo: </strong>{{ order.platform }}</p>\n    </div>\n    <div>\n        <h3>Dados de entrega</h3>\n        <p style=\"font-size: small\"><strong>Endereço: </strong>{{ order.location.address }} - {{ order.location.number\n            }}</p>\n        <p style=\"font-size: small\"><strong>Bairro: </strong>{{ order.location.district }}</p>\n        <p style=\"font-size: small\"><strong>Observações: </strong>{{ order.location.observation }}</p>\n    </div>\n    <div>\n        <h3>Marmitas</h3>\n        <div *ngFor=\"let product of order.products\">\n            <h4>{{ product.menu.description }}</h4>\n            <p style=\"font-size: small\"><strong>Marmita: </strong>{{ product.price.size }} - {{ product.price.price |\n                currency: 'BRL': true }}</p>\n            <p style=\"font-size: small\"><strong>Data do cardápio: </strong>{{ product.menu.date | date:'dd/MM/yyyy'}}\n            </p>\n            <p style=\"font-size: small\"><strong>Ingredientes: </strong></p>\n            <ul>\n                <li style=\"font-size: small\" *ngFor=\"let ingredient of product.ingredients\">\n                    {{ ingredient.name }}\n                </li>\n            </ul>\n            <div *ngIf=\"product.additionals.length > 0\">\n                <p style=\"font-size: small\"><strong>Adicionais: </strong></p>\n                <ul>\n                    <li style=\"font-size: small\" *ngFor=\"let add of product.additionals\">\n                        <p style=\"font-size: small\">\n                            {{ add.name }}\n                        </p>\n                        <p style=\"font-size: small; margin-top: -15px\">\n                            quantidade: {{ add.pivot.quantity }}\n                        </p>\n                        <p style=\"font-size: small; margin-top: -15px\">\n                            preço unitário: {{ add.value | currency: 'BRL': true }}\n                        </p>\n                        <p style=\"font-size: small; margin-top: -15px\">\n                            total: {{ add.value * add.pivot.quantity | currency: 'BRL': true }}\n                        </p>\n                    </li>\n                </ul>\n            </div>\n            <hr>\n        </div>\n    </div>\n    <div>\n        <h3>Dados gerais do pedido</h3>\n        <p style=\"font-size: small\"><strong>Preço: </strong>{{ order.price | currency: 'BRL': true}}</p>\n        <p style=\"font-size: small\"><strong>Forma de pagamento: </strong>{{ order.form_payment.description }}</p>\n        <p style=\"font-size: small\" *ngIf=\"order.deliver && order.company.delivery_value > 0\"><strong>Valor de entrega:\n            </strong>{{ order.company.delivery_value | currency: 'BRL': true }}</p>\n        <p style=\"font-size: small\" *ngIf=\"order.deliver\"><strong>Horário de entrega: </strong>{{ order.receive_at |\n            date: 'dd/MM/yyy hh:mm' }}</p>\n        <p style=\"font-size: small\" *ngIf=\"!order.deliver\"><strong>Horário de retirada: </strong>{{ order.receive_at |\n            date: 'dd/MM/yyy hh:mm' }}</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/order-details/order-details.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/order-details/order-details.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-top: 10px; }\n"

/***/ }),

/***/ "./src/app/layout/order-details/order-details.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/order-details/order-details.component.ts ***!
  \*****************************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_orders_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/orders/orders.service */ "./src/app/services/orders/orders.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/login/login.service */ "./src/app/services/login/login.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OrderDetailsComponent = /** @class */ (function () {
    function OrderDetailsComponent(route, router, ordersService, loginService, _clipboardService, datepipe, modalService) {
        this.route = route;
        this.router = router;
        this.ordersService = ordersService;
        this.loginService = loginService;
        this._clipboardService = _clipboardService;
        this.datepipe = datepipe;
        this.modalService = modalService;
    }
    OrderDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('access_token') != null) {
            this.loginService
                .user_me(localStorage.getItem('access_token'))
                .subscribe(function (user) {
                _this.user = user;
            });
            this.getOrder();
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    OrderDetailsComponent.prototype.getOrder = function () {
        var _this = this;
        this.ordersService
            .getOrder(localStorage.getItem('access_token'), this.route.snapshot.paramMap.get('id'))
            .subscribe(function (order) {
            _this.setOrder(order);
            console.log(order);
        });
    };
    OrderDetailsComponent.prototype.setOrder = function (order) {
        order.products.forEach(function (p) {
            p.textIngredients = 'Ver ingredientes';
            p.textAdditionals = 'Ver adicionais';
        });
        console.log(order);
        this.order = order;
    };
    OrderDetailsComponent.prototype.seeIngredients = function (product) {
        if (product.seeIngredients) {
            product.seeIngredients = false;
            product.textIngredients = 'Ver ingredientes';
        }
        else {
            product.seeIngredients = true;
            product.textIngredients = 'Ocultar ingredientes';
        }
    };
    OrderDetailsComponent.prototype.seeAdditionals = function (product) {
        if (product.seeAdditionals) {
            product.seeAdditionals = false;
            product.textAdditionals = 'Ver adicionais';
        }
        else {
            product.seeAdditionals = true;
            product.textAdditionals = 'Ocultar adicionais';
        }
    };
    OrderDetailsComponent.prototype.confirm = function (content) {
        var _this = this;
        console.log(content);
        this.modalService
            .open(content, { size: 'lg' })
            .result.then(function (result) {
            if (result === 'Print') {
                _this.printOrder();
            }
            else {
                _this.confirmOrder();
            }
        });
    };
    OrderDetailsComponent.prototype.printOrder = function () {
        var printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n            <html>\n                <head>\n                    <title>Impress\u00E3o do pedido " + this.order.id + "</title>\n                    <style>\n                    </style>\n                </head>\n                <body onload=\"window.print();window.close()\">" + printContents + "</body>\n            </html>");
        popupWin.document.close();
        this.confirmOrder();
    };
    OrderDetailsComponent.prototype.confirmOrder = function () {
        var _this = this;
        if (this.order.status_id === 1) {
            this.order.status_id = 2;
            this.ordersService
                .updateOrder(localStorage.getItem('access_token'), this.order)
                .subscribe(function () {
                _this.router.navigate(['/dashboard', { message: 'Pedido confirmado com sucesso!' }]);
            });
        }
    };
    OrderDetailsComponent.prototype.refuseOrder = function (content) {
        var _this = this;
        this.modalService
            .open(content, { size: 'lg' })
            .result.then(function (result) {
            if (result === 'reject') {
                _this.order.status_id = 4;
                _this.ordersService
                    .updateOrder(localStorage.getItem('access_token'), _this.order)
                    .subscribe(function () {
                    _this.router.navigate(['/dashboard', { message: 'Pedido rejeitado com sucesso!' }]);
                });
            }
        });
    };
    OrderDetailsComponent.prototype.sendWhatsApp = function () {
        window.location.href = "https://api.whatsapp.com/send?phone=55" + this.order.company.cell_phone + "&text=" + this.getOrderFormat();
    };
    OrderDetailsComponent.prototype.copyToclipboard = function () {
        this._clipboardService.copyFromContent(this.getOrderFormat());
    };
    OrderDetailsComponent.prototype.getOrderFormat = function () {
        var dadosCliente = '*DADOS DO CLIENTE* \n' + 'NOME: ' + this.order.client.name
            + '\nCELULAR: ' + this.order.client.cell_phone;
        var dadosEntrega = null;
        if (this.order.location.observation == null) {
            this.order.location.observation = '';
        }
        if (this.order.deliver) {
            dadosEntrega = '\n\n*DADOS PARA ENTREGA* \n' + 'ENDEREÇO: '
                + this.order.location.address + ' - ' + this.order.location.number
                + '\nBAIRRO: ' + this.order.location.district.name + '\nCOMPLEMENTO: '
                + this.order.location.observation + '\n';
        }
        else {
            dadosEntrega = '\n\n*CLIENTE VEM BUSCAR O PEDIDO*\n';
        }
        var dadosMarmita = '';
        var count = 1;
        this.order.products.forEach(function (p) {
            dadosMarmita = dadosMarmita + '\n*MARMITA (' + count + '):*' + '\nTAMANHO: ' + p.price.size
                + ' - R$' + p.price.price + '\nINGREDIENTES: ';
            p.ingredients.forEach(function (i) {
                dadosMarmita = dadosMarmita + i.name + ';';
            });
            if (p.additionals.length > 0) {
                dadosMarmita = dadosMarmita + '\nADICIONAIS ';
                p.additionals.forEach(function (add) {
                    dadosMarmita = dadosMarmita + '\n' + add.name
                        + ' - Qtd: ' + add.pivot.quantity + ' - Total: R$'
                        + (add.value * add.pivot.quantity) + '\n';
                });
            }
            ++count;
        });
        var freight = null;
        if (this.order.freight == null || this.order.freight.value === 0) {
            freight = 'gratuito';
        }
        else {
            freight = "R$ " + this.order.freight.value;
        }
        var dadosGerais = '\n*DADOS GERAIS DO PEDIDO*\n' + 'PREÇO: R$' + this.order.price
            + '\nFORMA PAGAMENTO: ' + this.order.form_payment.description
            + '\nVALOR ENTREGA: ' + freight
            + '\nHORÁRIO DE ENTREGA: ' + this.datepipe.transform(this.order.receive_at, 'HH:mm')
            + '\nOBSERVAÇÕES: ' + this.order.observation;
        return '*PEDIDO REALIZADO PELO PANDECO!* 🚀🚀🚀🚀\n\n'
            + dadosCliente + dadosEntrega + dadosMarmita
            + dadosGerais;
    };
    OrderDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-details',
            template: __webpack_require__(/*! ./order-details.component.html */ "./src/app/layout/order-details/order-details.component.html"),
            styles: [__webpack_require__(/*! ./order-details.component.scss */ "./src/app/layout/order-details/order-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_orders_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"],
            _services_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_4__["ClipboardService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/layout/order-details/order-details.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/order-details/order-details.module.ts ***!
  \**************************************************************/
/*! exports provided: OrderDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsModule", function() { return OrderDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _order_details_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-details-routing.module */ "./src/app/layout/order-details/order-details-routing.module.ts");
/* harmony import */ var _order_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-details.component */ "./src/app/layout/order-details/order-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var OrderDetailsModule = /** @class */ (function () {
    function OrderDetailsModule() {
    }
    OrderDetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _order_details_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrderDetailsRoutingModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"]
            ],
            declarations: [_order_details_component__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsComponent"]]
        })
    ], OrderDetailsModule);
    return OrderDetailsModule;
}());



/***/ })

}]);
//# sourceMappingURL=order-details-order-details-module.js.map