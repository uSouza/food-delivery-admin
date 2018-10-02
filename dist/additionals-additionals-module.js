(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["additionals-additionals-module"],{

/***/ "./src/app/layout/additionals/additionals-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/additionals/additionals-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: AdditionalsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalsRoutingModule", function() { return AdditionalsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _additionals_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./additionals.component */ "./src/app/layout/additionals/additionals.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _additionals_component__WEBPACK_IMPORTED_MODULE_2__["AdditionalsComponent"]
    }
];
var AdditionalsRoutingModule = /** @class */ (function () {
    function AdditionalsRoutingModule() {
    }
    AdditionalsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdditionalsRoutingModule);
    return AdditionalsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/additionals/additionals.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/additionals/additionals.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Inativação de adicional/bebida</h4>\n    </div>\n    <div class=\"modal-body\">\n        <p>Tem certeza de que deseja inativar?</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('dismiss')\">Não</button>\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('delete')\">Sim</button>\n    </div>\n</ng-template>\n\n<div class=\"row\">\n    <div class=\"col-lg-3\">\n    </div>\n    <div class=\"col-lg-6\">\n        <h3>Gerenciamento de adicionais e bebidas</h3>\n        <hr>\n        <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n        <form role=\"form\">\n            <div class=\"row\">\n                <div class=\"col-lg-8\">\n                    <div class=\"form-group\">\n                        <label>Nome</label>\n                        <input [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" type=\"text\">\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                        <label>Valor</label>\n                        <input currencyMask [(ngModel)]=\"value\" name=\"value\" class=\"form-control\" [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',' }\" >\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                    <div class=\"col-lg-4\">\n                        <div class=\"form-group\">\n                            <label>Tipo</label>\n                            <select class=\"form-control\" [(ngModel)]=\"type\" name=\"type\">\n                                <option *ngFor=\"let t of types\" [ngValue]=\"t.id\">{{t.name}}</option>\n                            </select>\n                        </div>\n                    </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"row\">\n                    <div class=\"col-xl-12 text-right\">\n                        <button type=\"button\" class=\"btn btn btn-success\" (click)=\"addAdditional()\">Adicionar</button>\n                    </div>\n                </div>\n            </div>\n        </form>\n        <hr>\n        <table *ngIf=\"additionals.length > 0\" class=\"card-body table\">\n            <thead>\n               <tr>\n                  <th>Nome</th>\n                  <th>Valor</th>\n                  <th>Tipo</th>\n                  <th>Ações</th>\n               </tr>\n            </thead>\n            <tbody *ngFor=\"let additional of additionals  | paginate: { itemsPerPage: 3, currentPage: page }\">\n               <tr class=\"table-default\">\n                  <td>{{additional.name}}</td>\n                  <td>{{additional.value | currency: 'BRL': true}}</td>\n                  <td *ngIf=\"additional.isDrink\">Bebida</td>\n                  <td *ngIf=\"!additional.isDrink\">Adicional</td>\n                  <td>\n                     <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"editAdditional(additional)\">Editar</button>\n                     <button *ngIf=\"additional.deleted_at == null\" type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"deleteAdditional(content, additional)\">Inativar</button>\n                     <button *ngIf=\"additional.deleted_at != null\" type=\"button\" class=\"btn btn-sm btn-warning\" (click)=\"restoreAdditional(additional)\">Reativar</button>\n                  </td>\n               </tr>\n            </tbody>\n         </table>\n         <div class=\"has-text-centered\">\n            <pagination-controls (pageChange)=\"page = $event\" previousLabel=\"Anterior\" nextLabel=\"Próximo\"></pagination-controls>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/additionals/additionals.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/additionals/additionals.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-sm {\n  margin-left: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/additionals/additionals.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/additionals/additionals.component.ts ***!
  \*************************************************************/
/*! exports provided: AdditionalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalsComponent", function() { return AdditionalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_additionals_additionals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/additionals/additionals.service */ "./src/app/services/additionals/additionals.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdditionalsComponent = /** @class */ (function () {
    function AdditionalsComponent(route, router, additionalsService, modalService) {
        this.route = route;
        this.router = router;
        this.additionalsService = additionalsService;
        this.modalService = modalService;
        this.page = 1;
        this.name = null;
        this.value = null;
        this.type = 0;
        this.types = [];
        this.isDrink = false;
        this.additionals = [];
        this.additional_edit = null;
        this.alerts = [];
    }
    AdditionalsComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('access_token') != null) {
            this.load();
            this.types = [
                {
                    id: 0,
                    name: ''
                },
                {
                    id: 1,
                    name: 'Adicional'
                },
                {
                    id: 2,
                    name: 'Bebida'
                }
            ];
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AdditionalsComponent.prototype.load = function () {
        var _this = this;
        this.additionalsService
            .getAdditionals(localStorage.getItem('access_token'))
            .subscribe(function (adds) {
            _this.additionals = adds;
        });
    };
    AdditionalsComponent.prototype.addAdditional = function () {
        var _this = this;
        if (this.validate()) {
            if (this.type == 1) {
                this.isDrink = false;
            }
            else {
                this.isDrink = true;
            }
            var additional = {
                name: this.name,
                value: this.value,
                isDrink: this.isDrink
            };
            if (this.additional_edit == null) {
                this.additionalsService
                    .addAdditional(localStorage.getItem('access_token'), additional)
                    .subscribe(function (additional) {
                    _this.updateAdditionals(additional, false);
                });
            }
            else {
                this.additionalsService
                    .editAdditional(localStorage.getItem('access_token'), additional, this.additional_edit.id)
                    .subscribe(function (additional) {
                    _this.updateAdditionals(additional, true);
                });
            }
        }
    };
    AdditionalsComponent.prototype.updateAdditionals = function (additional, edit) {
        this.name = null;
        this.value = null;
        this.type = 0;
        this.isDrink = false;
        this.load();
        if (edit) {
            this.showAlert('success', 'Adicional atualizado com sucesso!');
            this.additional_edit = null;
        }
        else {
            this.showAlert('success', 'Adicional inserido com sucesso!');
        }
    };
    AdditionalsComponent.prototype.validate = function () {
        if (this.name == null) {
            this.showAlert('danger', 'Informe o nome do adicional!');
            return false;
        }
        else if (this.value == null) {
            this.showAlert('danger', 'Informe o valor do adicional!');
            return false;
        }
        else if (this.value <= 0) {
            this.showAlert('danger', 'O valor do adicional deve ser maior que zero!');
            return false;
        }
        else if (this.type == 0) {
            this.showAlert('danger', 'Selecione o tipo do item!');
            return false;
        }
        else {
            return true;
        }
    };
    AdditionalsComponent.prototype.showAlert = function (type, err) {
        this.alerts.push({
            id: 1,
            type: type,
            message: err
        });
    };
    AdditionalsComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    AdditionalsComponent.prototype.editAdditional = function (additional) {
        this.name = additional.name;
        this.value = additional.value;
        this.isDrink = additional.isDrink;
        if (additional.isDrink == false) {
            this.type = 1;
        }
        else {
            this.type = 2;
        }
        this.additional_edit = additional;
    };
    AdditionalsComponent.prototype.deleteAdditional = function (content, additional) {
        var _this = this;
        this.modalService
            .open(content, { size: 'lg' })
            .result.then(function (result) {
            if (result == 'delete') {
                _this.additionalsService
                    .deleteAdditional(localStorage.getItem('access_token'), additional.id)
                    .subscribe(function (res) {
                    _this.load();
                });
            }
        });
    };
    AdditionalsComponent.prototype.restoreAdditional = function (additional) {
        var _this = this;
        this.additionalsService
            .restoreAdditional(localStorage.getItem('access_token'), additional.id)
            .subscribe(function (res) { return _this.load(); });
    };
    AdditionalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-additionals',
            template: __webpack_require__(/*! ./additionals.component.html */ "./src/app/layout/additionals/additionals.component.html"),
            styles: [__webpack_require__(/*! ./additionals.component.scss */ "./src/app/layout/additionals/additionals.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_additionals_additionals_service__WEBPACK_IMPORTED_MODULE_3__["AdditionalsService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], AdditionalsComponent);
    return AdditionalsComponent;
}());



/***/ }),

/***/ "./src/app/layout/additionals/additionals.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/additionals/additionals.module.ts ***!
  \**********************************************************/
/*! exports provided: AdditionalsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalsModule", function() { return AdditionalsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _additionals_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./additionals-routing.module */ "./src/app/layout/additionals/additionals-routing.module.ts");
/* harmony import */ var _additionals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./additionals.component */ "./src/app/layout/additionals/additionals.component.ts");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-currency-mask */ "./node_modules/ng2-currency-mask/index.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AdditionalsModule = /** @class */ (function () {
    function AdditionalsModule() {
    }
    AdditionalsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _additionals_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdditionalsRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"].forRoot(),
                ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__["CurrencyMaskModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"]
            ],
            declarations: [_additionals_component__WEBPACK_IMPORTED_MODULE_6__["AdditionalsComponent"]]
        })
    ], AdditionalsModule);
    return AdditionalsModule;
}());



/***/ }),

/***/ "./src/app/services/additionals/additionals.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/additionals/additionals.service.ts ***!
  \*************************************************************/
/*! exports provided: AdditionalsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalsService", function() { return AdditionalsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdditionalsService = /** @class */ (function () {
    function AdditionalsService(http) {
        this.http = http;
        this.endpoint = 'additionals';
    }
    AdditionalsService.prototype.getAdditionals = function (access_token) {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint, { headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        });
    };
    AdditionalsService.prototype.addAdditional = function (access_token, add) {
        var data = {
            name: add.name,
            value: add.value,
            isDrink: add.isDrink
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    AdditionalsService.prototype.editAdditional = function (access_token, add, id) {
        var data = {
            name: add.name,
            value: add.value,
            isDrink: add.isDrink
        };
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint + '/' + id, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    AdditionalsService.prototype.deleteAdditional = function (access_token, id) {
        return this.http.delete(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint + '/' + id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    AdditionalsService.prototype.restoreAdditional = function (access_token, id) {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint + '/restore/' + id, { headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        });
    };
    AdditionalsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdditionalsService);
    return AdditionalsService;
}());



/***/ })

}]);
//# sourceMappingURL=additionals-additionals-module.js.map