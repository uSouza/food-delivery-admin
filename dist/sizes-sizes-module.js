(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sizes-sizes-module"],{

/***/ "./src/app/layout/sizes/sizes-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/sizes/sizes-routing.module.ts ***!
  \******************************************************/
/*! exports provided: SizesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizesRoutingModule", function() { return SizesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sizes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sizes.component */ "./src/app/layout/sizes/sizes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _sizes_component__WEBPACK_IMPORTED_MODULE_2__["SizesComponent"]
    }
];
var SizesRoutingModule = /** @class */ (function () {
    function SizesRoutingModule() {
    }
    SizesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SizesRoutingModule);
    return SizesRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/sizes/sizes.component.html":
/*!***************************************************!*\
  !*** ./src/app/layout/sizes/sizes.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Exclusão de tamanho</h4>\n    </div>\n    <div class=\"modal-body\">\n        <p>Tem certeza de que deseja excluir?</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('dismiss')\">Não</button>\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('delete')\">Sim</button>\n    </div>\n</ng-template>\n\n<div class=\"row\">\n    <div class=\"col-lg-3\">\n    </div>\n    <div class=\"col-lg-6\">\n        <h3>Gerenciamento de tamanhos de marmitas</h3>\n        <hr>\n        <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n        <form role=\"form\">\n            <div class=\"row\">\n                <div class=\"col-lg-8\">\n                    <div class=\"form-group\">\n                        <label>Descrição do tamanho</label>\n                        <input [(ngModel)]=\"size\" name=\"size\" class=\"form-control\" >\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                        <label>Valor</label>\n                        <input currencyMask [(ngModel)]=\"price\" name=\"price\" class=\"form-control\" [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',' }\" >\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"row\">\n                    <div class=\"col-xl-12 text-right\">\n                        <button type=\"button\" class=\"btn btn btn-success\" (click)=\"addSize()\">Adicionar</button>\n                    </div>\n                </div>\n            </div>\n        </form>\n        <hr>\n        <table *ngIf=\"sizes.length > 0\" class=\"card-body table\">\n            <thead>\n               <tr>\n                  <th>Tamanho</th>\n                  <th>Valor</th>\n                  <th>Ações</th>\n               </tr>\n            </thead>\n            <tbody *ngFor=\"let size of sizes  | paginate: { itemsPerPage: 4, currentPage: page }\">\n               <tr class=\"table-default\">\n                  <td>{{size.size}}</td>\n                  <td>{{size.price | currency: 'BRL': true}}</td>\n                  <td>\n                     <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"editSize(size)\">Editar</button>\n                     <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"deleteSize(content, size)\">Deletar</button>\n                  </td>\n               </tr>\n            </tbody>\n         </table>\n         <div class=\"has-text-centered\">\n            <pagination-controls (pageChange)=\"page = $event\" previousLabel=\"Anterior\" nextLabel=\"Próximo\"></pagination-controls>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/sizes/sizes.component.scss":
/*!***************************************************!*\
  !*** ./src/app/layout/sizes/sizes.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-sm {\n  margin-left: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/sizes/sizes.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/sizes/sizes.component.ts ***!
  \*************************************************/
/*! exports provided: SizesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizesComponent", function() { return SizesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_sizes_sizes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sizes/sizes.service */ "./src/app/services/sizes/sizes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SizesComponent = /** @class */ (function () {
    function SizesComponent(route, router, sizesService, modalService) {
        this.route = route;
        this.router = router;
        this.sizesService = sizesService;
        this.modalService = modalService;
        this.size = '';
        this.price = null;
        this.size_edit = null;
        this.alerts = [];
    }
    SizesComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('access_token') != null) {
            this.load();
            this.sizes_available = [
                { name: '' },
                { name: 'P' },
                { name: 'M' },
                { name: 'G' },
                { name: 'GG' },
                { name: 'Fitness' },
                { name: 'Especial' }
            ];
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    SizesComponent.prototype.load = function () {
        var _this = this;
        this.sizesService
            .getSizes(localStorage.getItem('access_token'))
            .subscribe(function (sizes) {
            _this.sizes = sizes;
        });
    };
    SizesComponent.prototype.addSize = function () {
        var _this = this;
        if (this.validate()) {
            var size = {
                size: this.size,
                price: this.price
            };
            if (this.size_edit == null) {
                this.sizesService
                    .addSize(localStorage.getItem('access_token'), size)
                    .subscribe(function (size) {
                    _this.updateSizes(size, false);
                });
            }
            else {
                this.sizesService
                    .editSize(localStorage.getItem('access_token'), size, this.size_edit.id)
                    .subscribe(function (size) {
                    _this.updateSizes(size, true);
                });
            }
        }
    };
    SizesComponent.prototype.editSize = function (size) {
        this.size = size.size;
        this.price = size.price;
        this.size_edit = size;
    };
    SizesComponent.prototype.deleteSize = function (content, size) {
        var _this = this;
        this.modalService
            .open(content, { size: 'lg' })
            .result.then(function (result) {
            if (result == 'delete') {
                _this.sizesService
                    .deleteSize(localStorage.getItem('access_token'), size.id)
                    .subscribe(function (res) {
                    _this.load();
                });
            }
        });
    };
    SizesComponent.prototype.updateSizes = function (additional, edit) {
        this.size = '';
        this.price = null;
        this.load();
        if (edit) {
            this.showAlert('success', 'Tamanho atualizado com sucesso!');
            this.size_edit = null;
        }
        else {
            this.showAlert('success', 'Tamanho inserido com sucesso!');
        }
    };
    SizesComponent.prototype.validate = function () {
        if (this.size == '') {
            this.showAlert('danger', 'Informe o tamanho a ser cadastrado!');
            return false;
        }
        else if (this.price == null) {
            this.showAlert('danger', 'Informe o valor do tamanho!');
            return false;
        }
        else if (this.price <= 0) {
            this.showAlert('danger', 'O valor do tamanho deve ser maior que zero!');
            return false;
        }
        else {
            return true;
        }
    };
    SizesComponent.prototype.showAlert = function (type, err) {
        this.alerts.push({
            id: 1,
            type: type,
            message: err
        });
    };
    SizesComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    SizesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sizes',
            template: __webpack_require__(/*! ./sizes.component.html */ "./src/app/layout/sizes/sizes.component.html"),
            styles: [__webpack_require__(/*! ./sizes.component.scss */ "./src/app/layout/sizes/sizes.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_sizes_sizes_service__WEBPACK_IMPORTED_MODULE_3__["SizesService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], SizesComponent);
    return SizesComponent;
}());



/***/ }),

/***/ "./src/app/layout/sizes/sizes.module.ts":
/*!**********************************************!*\
  !*** ./src/app/layout/sizes/sizes.module.ts ***!
  \**********************************************/
/*! exports provided: SizesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizesModule", function() { return SizesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _sizes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sizes-routing.module */ "./src/app/layout/sizes/sizes-routing.module.ts");
/* harmony import */ var _sizes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sizes.component */ "./src/app/layout/sizes/sizes.component.ts");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-currency-mask */ "./node_modules/ng2-currency-mask/index.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SizesModule = /** @class */ (function () {
    function SizesModule() {
    }
    SizesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _sizes_routing_module__WEBPACK_IMPORTED_MODULE_5__["SizesRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"].forRoot(),
                ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__["CurrencyMaskModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"]
            ],
            declarations: [_sizes_component__WEBPACK_IMPORTED_MODULE_6__["SizesComponent"]]
        })
    ], SizesModule);
    return SizesModule;
}());



/***/ })

}]);
//# sourceMappingURL=sizes-sizes-module.js.map