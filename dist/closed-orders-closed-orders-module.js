(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["closed-orders-closed-orders-module"],{

/***/ "./src/app/layout/closed-orders/closed-orders-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/closed-orders/closed-orders-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ClosedOrdersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosedOrdersRoutingModule", function() { return ClosedOrdersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _closed_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./closed-orders.component */ "./src/app/layout/closed-orders/closed-orders.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _closed_orders_component__WEBPACK_IMPORTED_MODULE_2__["ClosedOrdersComponent"]
    }
];
var ClosedOrdersRoutingModule = /** @class */ (function () {
    function ClosedOrdersRoutingModule() {
    }
    ClosedOrdersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ClosedOrdersRoutingModule);
    return ClosedOrdersRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/closed-orders/closed-orders.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/closed-orders/closed-orders.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n   <div class=\"row\">\n      <div class=\"col-lg-12\">\n         <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}\n         </ngb-alert>\n         <div class=\"card mb-3\">\n            <div class=\"card-header\"> Pedidos encerrados</div>\n            <h5 *ngIf=\"data.data.length == 0\">Não há pedidos para exibir</h5>\n            <table *ngIf=\"data.data.length > 0\" class=\"card-body table\">\n               <thead>\n                  <tr>\n                     <th>Cliente</th>\n                     <th>Restaurante</th>\n                     <th>Preço</th>\n                     <th>Qtde. Marmitas</th>\n                     <th>Aberto em</th>\n                     <th>Confirmado em</th>\n                     <th>Ação</th>\n                  </tr>\n               </thead>\n               <tbody\n                  *ngFor=\"let order of data.data | paginate: { itemsPerPage: data.per_page, currentPage: data.current_page, totalItems: data.total }\">\n                  <tr class=\"table-default\">\n                     <td>{{order.client.name}}</td>\n                     <td>{{ order.company.fantasy_name }}</td>\n                     <td>{{order.price | currency: 'BRL': true}}</td>\n                     <td>{{ order.products.length }}</td>\n                     <td>{{order.created_at | date: 'dd/MM/yyyy H:mm'}}</td>\n                     <td>{{order.updated_at | date: 'dd/MM/yyyy H:mm'}}</td>\n                     <td>\n                        <button (click)=\"showOrder(order)\" type=\"button\"\n                           class=\"btn btn-sm btn-success\">Visualizar</button>\n                     </td>\n                  </tr>\n               </tbody>\n            </table>\n            <div class=\"has-text-centered\">\n               <pagination-controls (pageChange)=\"pageChanged($event)\" previousLabel=\"Anterior\" nextLabel=\"Próximo\">\n               </pagination-controls>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/closed-orders/closed-orders.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/closed-orders/closed-orders.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/closed-orders/closed-orders.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/closed-orders/closed-orders.component.ts ***!
  \*****************************************************************/
/*! exports provided: ClosedOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosedOrdersComponent", function() { return ClosedOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_orders_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/orders/orders.service */ "./src/app/services/orders/orders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClosedOrdersComponent = /** @class */ (function () {
    function ClosedOrdersComponent(router, route, ordersService) {
        this.router = router;
        this.route = route;
        this.ordersService = ordersService;
        this.alerts = [];
    }
    ClosedOrdersComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('access_token') == null) {
            this.router.navigate(['/login']);
        }
        this.getOrders();
    };
    ClosedOrdersComponent.prototype.getOrders = function () {
        var _this = this;
        this.ordersService
            .getClosedOrders(localStorage.getItem('access_token'))
            .subscribe(function (data) {
            _this.setData(data);
        });
    };
    ClosedOrdersComponent.prototype.setData = function (data) {
        this.data = data;
    };
    ClosedOrdersComponent.prototype.showOrder = function (order) {
        this.router.navigate(['/orders', { id: order.id }]);
    };
    ClosedOrdersComponent.prototype.pageChanged = function (page) {
        var _this = this;
        this.ordersService
            .getClosedOrdersPaginate(localStorage.getItem('access_token'), page)
            .subscribe(function (data) {
            _this.setData(data);
        });
    };
    ClosedOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-closed-orders',
            template: __webpack_require__(/*! ./closed-orders.component.html */ "./src/app/layout/closed-orders/closed-orders.component.html"),
            styles: [__webpack_require__(/*! ./closed-orders.component.scss */ "./src/app/layout/closed-orders/closed-orders.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_orders_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]])
    ], ClosedOrdersComponent);
    return ClosedOrdersComponent;
}());



/***/ }),

/***/ "./src/app/layout/closed-orders/closed-orders.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/closed-orders/closed-orders.module.ts ***!
  \**************************************************************/
/*! exports provided: ClosedOrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosedOrdersModule", function() { return ClosedOrdersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _closed_orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./closed-orders-routing.module */ "./src/app/layout/closed-orders/closed-orders-routing.module.ts");
/* harmony import */ var _closed_orders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./closed-orders.component */ "./src/app/layout/closed-orders/closed-orders.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ClosedOrdersModule = /** @class */ (function () {
    function ClosedOrdersModule() {
    }
    ClosedOrdersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _closed_orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClosedOrdersRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"].forRoot()
            ],
            declarations: [_closed_orders_component__WEBPACK_IMPORTED_MODULE_6__["ClosedOrdersComponent"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        })
    ], ClosedOrdersModule);
    return ClosedOrdersModule;
}());



/***/ })

}]);
//# sourceMappingURL=closed-orders-closed-orders-module.js.map