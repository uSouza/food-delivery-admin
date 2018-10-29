(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/layout/dashboard/dashboard-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    <i class=\"fa fa-clock-o fa-fw\"></i> Pedidos pendentes</div>\n                <h5 *ngIf=\"orders.length == 0\">Não há pedidos para exibir</h5>\n                <table *ngIf=\"orders.length > 0\" class=\"card-body table\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>Cliente</th>\n                            <th>Endereço</th>\n                            <th>Bairro</th>\n                            <th>Preço</th>\n                            <th>Aberto às</th>\n                            <th>Ações</th>\n                        </tr>\n                    </thead>\n                    <tbody *ngFor=\"let order of orders | paginate: { itemsPerPage: 7, currentPage: page }\">\n                        <tr *ngIf=\"order.deliver && order.status_id==1\" class=\"table-warning\">\n                            <th>{{order.id}}</th>\n                            <td>{{order.client.name}}</td>\n                            <td>{{order.location.address}} - {{order.location.number}}</td>\n                            <td>{{order.location.district}}</td>\n                            <td>{{order.price | currency: 'BRL': true}}</td>\n                            <td>{{order.created_at | date: 'H:mm'}}</td>\n                            <td>\n                                <button (click)=\"showOrder(order)\" type=\"button\" class=\"btn btn-sm btn-success\">Visualizar</button>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"!order.deliver && order.status_id==1\" class=\"table-default\">\n                            <th>{{order.id}}</th>\n                            <td>{{order.client.name}}</td>\n                            <td>Retirar no balcão</td>\n                            <td>Retirar no balcão</td>\n                            <td>{{order.price | currency: 'BRL': true}}</td>\n                            <td>{{order.created_at | date: 'H:mm'}}</td>\n                            <td>\n                                <button (click)=\"showOrder(order)\" type=\"button\" class=\"btn btn-sm btn-success\">Visualizar</button>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"order.deliver && order.status_id==5\" class=\"table-danger\">\n                            <th>{{order.id}}</th>\n                            <td>{{order.client.name}}</td>\n                            <td>{{order.location.address}} - {{order.location.number}}</td>\n                            <td>{{order.location.district}}</td>\n                            <td>{{order.price | currency: 'BRL': true}}</td>\n                            <td>{{order.created_at | date: 'H:mm'}}</td>\n                            <td>\n                                <button (click)=\"cancelOrder(order)\" type=\"button\" class=\"btn btn-sm btn-danger\">Cancelar</button>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"!order.deliver && order.status_id==5\" class=\"table-danger\">\n                            <th>{{order.id}}</th>\n                            <td>{{order.client.name}}</td>\n                            <td>Retirar no balcão</td>\n                            <td>Retirar no balcão</td>\n                            <td>{{order.price | currency: 'BRL': true}}</td>\n                            <td>{{order.created_at | date: 'H:mm'}}</td>\n                            <td>\n                                <button (click)=\"cancelOrder(order)\" type=\"button\" class=\"btn btn-sm btn-danger\">Cancelar</button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <div class=\"has-text-centered\">\n                    <pagination-controls (pageChange)=\"page = $event\" previousLabel=\"Anterior\" nextLabel=\"Próximo\">\n                    </pagination-controls>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"row\">\n                    <div class=\"col-xl-12 text-right\">\n                        <a class=\"btn btn-lg btn-success\" href=\"#\">Atualizar</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin: 10px; }\n\n.fa-shopping-cart {\n  font-size: 50px;\n  margin-left: -30px; }\n\nbutton {\n  margin-left: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_orders_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/orders/orders.service */ "./src/app/services/orders/orders.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/login/login.service */ "./src/app/services/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, route, ordersService, modalService, loginService) {
        this.router = router;
        this.route = route;
        this.ordersService = ordersService;
        this.modalService = modalService;
        this.loginService = loginService;
        this.page = 1;
        this.alerts = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
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
    };
    DashboardComponent.prototype.setOneSignalUserID = function (id) {
        this.loginService
            .setOneSignalId(localStorage.getItem('access_token'), id)
            .subscribe(function (user) {
            console.log(user);
        });
    };
    DashboardComponent.prototype.getOrders = function () {
        var _this = this;
        this.ordersService
            .getOpenOrders(localStorage.getItem('access_token'))
            .subscribe(function (orders) {
            _this.orders = orders;
        });
    };
    DashboardComponent.prototype.showOrder = function (order) {
        console.log(order);
        this.router.navigate(['/orders', { id: order.id }]);
    };
    DashboardComponent.prototype.showAlert = function (type, err) {
        this.alerts.push({
            id: 1,
            type: type,
            message: err
        });
    };
    DashboardComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    DashboardComponent.prototype.cancelOrder = function (order) {
        var _this = this;
        this.ordersService
            .deleteOrder(localStorage.getItem('access_token'), order.id)
            .subscribe(function (order) {
            _this.getOrders();
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/layout/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/layout/dashboard/dashboard.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_orders_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _services_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.module.ts ***!
  \******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/layout/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["StatModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot(),
            ],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map