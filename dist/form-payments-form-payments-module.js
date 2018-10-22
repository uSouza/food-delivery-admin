(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-payments-form-payments-module"],{

/***/ "./src/app/layout/form-payments/form-payments-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/form-payments/form-payments-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: FormPaymentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPaymentsRoutingModule", function() { return FormPaymentsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_payments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-payments.component */ "./src/app/layout/form-payments/form-payments.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _form_payments_component__WEBPACK_IMPORTED_MODULE_2__["FormPaymentsComponent"]
    }
];
var FormPaymentsRoutingModule = /** @class */ (function () {
    function FormPaymentsRoutingModule() {
    }
    FormPaymentsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FormPaymentsRoutingModule);
    return FormPaymentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/form-payments/form-payments.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/form-payments/form-payments.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Exclusão de forma de pagamento</h4>\n        </div>\n        <div class=\"modal-body\">\n            <p>Tem certeza de que deseja excluir a forma de pagamento?</p>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-light\" (click)=\"c('dismiss')\">Não</button>\n            <button type=\"button\" class=\"btn btn-light\" (click)=\"c('delete')\">Sim</button>\n        </div>\n    </ng-template>\n\n    <div class=\"row\">\n        <div class=\"col-lg-3\">\n        </div>\n        <div class=\"col-lg-6\">\n            <h3>Gerenciamento de forma de pagamentos</h3>\n            <hr>\n            <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n            <form role=\"form\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"form-group\">\n                            <label>Nome da forma</label>\n                            <input [(ngModel)]=\"description\" name=\"description\" class=\"form-control\" type=\"text\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"row\">\n                        <div class=\"col-xl-12 text-right\">\n                            <button type=\"button\" class=\"btn btn btn-success\" (click)=\"addFormPayment()\">Adicionar</button>\n                        </div>\n                    </div>\n                </div>\n            </form>\n            <table *ngIf=\"form_payments.length > 0\" class=\"card-body table\">\n                <thead>\n                   <tr>\n                      <th>Descrição</th>\n                      <th>Ações</th>\n                   </tr>\n                </thead>\n                <tbody *ngFor=\"let form of form_payments  | paginate: { itemsPerPage: 4, currentPage: page }\">\n                   <tr class=\"table-default\">\n                      <td>{{form.description}}</td>\n                      <td>\n                         <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"editFormPayment(form)\">Editar</button>\n                         <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"deleteFormPayment(content, form)\">Deletar</button>\n                      </td>\n                   </tr>\n                </tbody>\n             </table>\n             <div class=\"has-text-centered\">\n                <pagination-controls (pageChange)=\"page = $event\" previousLabel=\"Anterior\" nextLabel=\"Próximo\"></pagination-controls>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/layout/form-payments/form-payments.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/form-payments/form-payments.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin-top: 20px; }\n\n.btn-sm {\n  margin-left: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/form-payments/form-payments.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/form-payments/form-payments.component.ts ***!
  \*****************************************************************/
/*! exports provided: FormPaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPaymentsComponent", function() { return FormPaymentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_form_payments_form_payments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/form-payments/form-payments.service */ "./src/app/services/form-payments/form-payments.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormPaymentsComponent = /** @class */ (function () {
    function FormPaymentsComponent(route, router, formPaymentsService, modalService) {
        this.route = route;
        this.router = router;
        this.formPaymentsService = formPaymentsService;
        this.modalService = modalService;
        this.alerts = [];
        this.description = null;
        this.form_payment_edit = null;
        this.form_payments = [];
        this.page = 1;
    }
    FormPaymentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('access_token') != null) {
            this.formPaymentsService
                .getFormPayments(localStorage.getItem('access_token'))
                .subscribe(function (form_payments) {
                _this.form_payments = form_payments;
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    FormPaymentsComponent.prototype.addFormPayment = function () {
        var _this = this;
        if (this.validate()) {
            var form_payment = {
                description: this.description
            };
            if (this.form_payment_edit == null) {
                this.formPaymentsService
                    .addFormPayment(localStorage.getItem('access_token'), form_payment)
                    .subscribe(function (form_payment) {
                    _this.updateFormPayments(form_payment, false);
                });
            }
            else {
                this.formPaymentsService
                    .editFormPayment(localStorage.getItem('access_token'), form_payment, this.form_payment_edit.id)
                    .subscribe(function (form_payment) {
                    _this.updateFormPayments(form_payment, true);
                });
            }
        }
    };
    FormPaymentsComponent.prototype.updateFormPayments = function (form_payment, edit) {
        this.description = null;
        this.form_payments.push(form_payment);
        if (edit) {
            this.showAlert('success', 'Forma de pagamento atualizada com sucesso!');
            var index = this.form_payments.indexOf(this.form_payment_edit);
            this.form_payments.splice(index, 1);
            this.form_payment_edit = null;
        }
        else {
            this.showAlert('success', 'Forma de pagamento atualizada com sucesso!');
        }
    };
    FormPaymentsComponent.prototype.validate = function () {
        if (this.description == null) {
            this.showAlert('danger', 'Informe a descrição da forma de pagamento!');
            return false;
        }
        else {
            return true;
        }
    };
    FormPaymentsComponent.prototype.showAlert = function (type, err) {
        this.alerts.push({
            id: 1,
            type: type,
            message: err
        });
    };
    FormPaymentsComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    FormPaymentsComponent.prototype.editFormPayment = function (form_payment) {
        this.description = form_payment.description;
        this.form_payment_edit = form_payment;
    };
    FormPaymentsComponent.prototype.deleteFormPayment = function (content, form_payment) {
        var _this = this;
        this.modalService
            .open(content, { size: 'lg' })
            .result.then(function (result) {
            if (result == 'delete') {
                var index = _this.form_payments.indexOf(form_payment);
                _this.form_payments.splice(index, 1);
                _this.formPaymentsService
                    .deleteFormPayment(localStorage.getItem('access_token'), form_payment.id)
                    .subscribe(function (res) {
                    console.log(res);
                });
            }
        });
    };
    FormPaymentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-payments',
            template: __webpack_require__(/*! ./form-payments.component.html */ "./src/app/layout/form-payments/form-payments.component.html"),
            styles: [__webpack_require__(/*! ./form-payments.component.scss */ "./src/app/layout/form-payments/form-payments.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_form_payments_form_payments_service__WEBPACK_IMPORTED_MODULE_2__["FormPaymentsService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], FormPaymentsComponent);
    return FormPaymentsComponent;
}());



/***/ }),

/***/ "./src/app/layout/form-payments/form-payments.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/form-payments/form-payments.module.ts ***!
  \**************************************************************/
/*! exports provided: FormPaymentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPaymentsModule", function() { return FormPaymentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _form_payments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-payments-routing.module */ "./src/app/layout/form-payments/form-payments-routing.module.ts");
/* harmony import */ var _form_payments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-payments.component */ "./src/app/layout/form-payments/form-payments.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var FormPaymentsModule = /** @class */ (function () {
    function FormPaymentsModule() {
    }
    FormPaymentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _form_payments_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormPaymentsRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"].forRoot()
            ],
            declarations: [_form_payments_component__WEBPACK_IMPORTED_MODULE_6__["FormPaymentsComponent"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        })
    ], FormPaymentsModule);
    return FormPaymentsModule;
}());



/***/ }),

/***/ "./src/app/services/form-payments/form-payments.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/form-payments/form-payments.service.ts ***!
  \*****************************************************************/
/*! exports provided: FormPaymentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPaymentsService", function() { return FormPaymentsService; });
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



var FormPaymentsService = /** @class */ (function () {
    function FormPaymentsService(http) {
        this.http = http;
        this.endpoint = 'form_payments';
    }
    FormPaymentsService.prototype.getFormPayments = function (access_token) {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint, { headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        });
    };
    FormPaymentsService.prototype.addFormPayment = function (access_token, form_payment) {
        var data = {
            description: form_payment.description,
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    FormPaymentsService.prototype.editFormPayment = function (access_token, form_payment, id) {
        var data = {
            description: form_payment.description,
        };
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint + '/' + id, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    FormPaymentsService.prototype.deleteFormPayment = function (access_token, id) {
        return this.http.delete(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint + '/' + id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    FormPaymentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FormPaymentsService);
    return FormPaymentsService;
}());



/***/ })

}]);
//# sourceMappingURL=form-payments-form-payments-module.js.map