(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restaurants-restaurants-form-restaurants-form-module"],{

/***/ "./src/app/layout/restaurants/restaurant.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/restaurants/restaurant.ts ***!
  \**************************************************/
/*! exports provided: Restaurant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Restaurant", function() { return Restaurant; });
var Restaurant = /** @class */ (function () {
    function Restaurant() {
    }
    return Restaurant;
}());



/***/ }),

/***/ "./src/app/layout/restaurants/restaurants-form/restaurants-form-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/restaurants/restaurants-form/restaurants-form-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: RestaurantsFormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsFormRoutingModule", function() { return RestaurantsFormRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _restaurants_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurants-form.component */ "./src/app/layout/restaurants/restaurants-form/restaurants-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _restaurants_form_component__WEBPACK_IMPORTED_MODULE_2__["RestaurantsFormComponent"]
    }
];
var RestaurantsFormRoutingModule = /** @class */ (function () {
    function RestaurantsFormRoutingModule() {
    }
    RestaurantsFormRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RestaurantsFormRoutingModule);
    return RestaurantsFormRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/restaurants/restaurants-form/restaurants-form.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/restaurants/restaurants-form/restaurants-form.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-3\">\n    </div>\n    <div class=\"col-lg-6\">\n       <h3 *ngIf=\"edit\">Edição de restaurante</h3>\n       <h3 *ngIf=\"!edit\">Novo restaurante</h3>\n       <span class=\"badge badge-success\">Etapa {{ step }} de {{ step_number }}</span>\n       <span style=\"margin-left: 5px\" *ngIf=\"step == 1\" class=\"badge badge-secondary\">Cadastro do usuário</span>\n       <span style=\"margin-left: 5px\" *ngIf=\"step == 2\" class=\"badge badge-secondary\">Dados gerais do restaurante</span>\n       <span style=\"margin-left: 5px\" *ngIf=\"step == 3\" class=\"badge badge-secondary\">Dados do responsável</span>\n       <span style=\"margin-left: 5px\" *ngIf=\"step == 4\" class=\"badge badge-secondary\">Configurações do restaurante</span>\n       <span style=\"margin-left: 5px\" *ngIf=\"step == 5\" class=\"badge badge-secondary\">Dados de endereço</span>\n       <span style=\"margin-left: 5px\" *ngIf=\"step == 6\" class=\"badge badge-secondary\">Dados de atendimento</span>\n       <hr>\n       <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n       <form *ngIf=\"step == 1\" role=\"form\">\n          <div class=\"row\">\n             <div class=\"col-lg-12\">\n                <div class=\"form-group\">\n                   <h5>Email</h5>\n                   <input [(ngModel)]=\"restaurant.email\" name=\"email\" class=\"form-control\" type=\"email\">\n                </div>\n             </div>\n             <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                   <h5>Senha</h5>\n                   <input [(ngModel)]=\"restaurant.password\" name=\"password\" class=\"form-control\" type=\"password\">\n                </div>\n             </div>\n             <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                   <h5>Confirmação de senha</h5>\n                   <input [(ngModel)]=\"password_confirmation\" name=\"password_confirmation\" class=\"form-control\" type=\"password\">\n                </div>\n             </div>\n          </div>\n          <div class=\"form-group\">\n             <div class=\"row\">\n                <div class=\"col-xl-12 text-right\">\n                   <button type=\"button\" class=\"btn btn-lg btn-success\" (click)=\"nextStep()\">Avançar</button>\n                </div>\n             </div>\n          </div>\n       </form>\n       <form *ngIf=\"step == 2\" role=\"form\">\n          <div class=\"row\">\n             <div class=\"col-lg-12\">\n                <div class=\"form-group\">\n                   <h5>Razão social</h5>\n                   <input [(ngModel)]=\"restaurant.social_name\" name=\"social_name\" class=\"form-control\" type=\"text\">\n                </div>\n             </div>\n             <div class=\"col-lg-12\">\n                <div class=\"form-group\">\n                   <h5>Nome fantasia</h5>\n                   <input [(ngModel)]=\"restaurant.fantasy_name\" name=\"fantasy_name\" class=\"form-control\" type=\"text\">\n                </div>\n             </div>\n             <div class=\"col-lg-12\">\n                <div class=\"form-group\">\n                   <h5>CNPJ</h5>\n                   <input [(ngModel)]=\"restaurant.cnpj\" name=\"cnpj\" mask='99.999.999/9999-99' class=\"form-control\" type=\"text\">\n                </div>\n             </div>\n             <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                   <h5>Celular</h5>\n                   <input [(ngModel)]=\"restaurant.cell_phone\" name=\"cell_phone\" mask='(99)99999-9999' class=\"form-control\" type=\"text\">\n                </div>\n             </div>\n             <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                   <h5>Telefone fixo</h5>\n                   <input [(ngModel)]=\"restaurant.phone\" name=\"phone\" mask='(99)9999-9999' class=\"form-control\" type=\"text\">\n                </div>\n             </div>\n          </div>\n          <div class=\"form-group\">\n             <div class=\"row\">\n                <div class=\"col-xl-12 text-right\">\n                   <button type=\"button\" class=\"btn btn-lg btn-default\" (click)=\"backStep()\" style=\"margin-right: 10px\">Voltar</button>\n                   <button type=\"button\" class=\"btn btn-lg btn-success\" (click)=\"nextStep()\">Avançar</button>\n                </div>\n             </div>\n          </div>\n       </form>\n       <form *ngIf=\"step == 3\" role=\"form\">\n          <div class=\"row\">\n             <div class=\"col-lg-12\">\n                <div class=\"form-group\">\n                   <h5>Nome do responsável</h5>\n                   <input [(ngModel)]=\"restaurant.responsible_name\" name=\"responsible_name\" class=\"form-control\" type=\"text\">\n                </div>\n             </div>\n             <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                   <h5>Celular do responsável</h5>\n                   <input [(ngModel)]=\"restaurant.responsible_phone\" name=\"responsible_phone\" mask='(99)99999-9999' class=\"form-control\" type=\"text\">\n                </div>\n             </div>\n          </div>\n          <div class=\"form-group\">\n             <div class=\"row\">\n                <div class=\"col-xl-12 text-right\">\n                   <button type=\"button\" class=\"btn btn-lg btn-default\" (click)=\"backStep()\" style=\"margin-right: 10px\">Voltar</button>\n                   <button type=\"button\" class=\"btn btn-lg btn-success\" (click)=\"nextStep()\">Avançar</button>\n                </div>\n             </div>\n          </div>\n       </form>\n       <form *ngIf=\"step == 4\" role=\"form\">\n          <div class=\"row\">\n             <div class=\"col-lg-12\">\n                <div class=\"tags\" style=\"margin-bottom: 10px;\">\n                   <h5>Tags</h5>\n                   <ng-select\n                   name=\"tags\"\n                   [items]=\"tags | async\"\n                   [multiple]=\"true\"\n                   [closeOnSelect]=\"false\"\n                   [hideSelected]=\"true\"\n                   (add)=\"addTagItem($event)\"\n                   (remove)=\"removeTagItem($event)\"\n                   bindLabel=\"name\"\n                   placeholder=\"Selecione as tags\"\n                   [(ngModel)]=\"selected_tags\">\n                   </ng-select>\n                </div>\n             </div>\n             <div class=\"col-lg-12\">\n                <div class=\"form-group\">\n                   <h5>Imagem do restaurante</h5>\n                   <input type=\"file\" (change)=\"fileChange($event)\" class=\"form-control\" name=\"image\" [(ngModel)]=\"restaurant.image\" placeholder=\"Selecione a imagem\" accept=\".png,.jpg,.jpeg\">\n                </div>\n             </div>\n             <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                   <h5>Pedidos por dia</h5>\n                   <input type=\"number\" class=\"form-control\" name=\"order_limit\" [(ngModel)]=\"restaurant.order_limit\">\n                </div>\n             </div>\n             <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                   <h5>Taxa de entrega</h5>\n                   <input currencyMask [(ngModel)]=\"restaurant.delivery_value\" name=\"delivery_value\" class=\"form-control\" [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',' }\" >\n                </div>\n             </div>\n             <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                   <h5>Tempo médio de entrega</h5>\n                   <input class=\"form-control\" placeholder=\"hh:mm:ss\" name=\"avg_delivery_time\" [(ngModel)]=\"restaurant.avg_delivery_time\" type=\"text\" mask='99:99:99'>\n                </div>\n             </div>\n          </div>\n          <div class=\"form-group\">\n             <div class=\"row\">\n                <div class=\"col-xl-12 text-right\">\n                   <button type=\"button\" class=\"btn btn-lg btn-default\" (click)=\"backStep()\" style=\"margin-right: 10px\">Voltar</button>\n                   <button type=\"button\" class=\"btn btn-lg btn-success\" (click)=\"nextStep()\">Avançar</button>\n                </div>\n             </div>\n          </div>\n       </form>\n       <form *ngIf=\"step == 5\" role=\"form\">\n          <div class=\"row\">\n             <div class=\"col-lg-9\">\n                <div class=\"form-group\">\n                   <h5>Endereço</h5>\n                   <input [(ngModel)]=\"restaurant.address\" name=\"address\" class=\"form-control\" type=\"text\">\n                </div>\n             </div>\n             <div class=\"col-lg-3\">\n                <div class=\"form-group\">\n                   <h5>Número</h5>\n                   <input [(ngModel)]=\"restaurant.number\" name=\"number\" class=\"form-control\" type=\"text\">\n                </div>\n             </div>\n             <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                   <h5>CEP</h5>\n                   <input class=\"form-control\" name=\"postal_code\" [(ngModel)]=\"restaurant.postal_code\" type=\"text\" mask='99999-999'>\n                </div>\n             </div>\n             <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                   <h5>Estado</h5>\n                   <input class=\"form-control\" name=\"state\" [(ngModel)]=\"restaurant.state\" type=\"text\">\n                </div>\n             </div>\n             <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                   <h5>Cidade</h5>\n                   <input class=\"form-control\" name=\"city\" [(ngModel)]=\"restaurant.city\" type=\"text\">\n                </div>\n             </div>\n             <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                   <h5>Bairro</h5>\n                   <input class=\"form-control\" name=\"district\" [(ngModel)]=\"restaurant.district\" type=\"text\">\n                </div>\n             </div>\n             <div class=\"col-lg-12\">\n                <div class=\"form-group\">\n                   <h5>Complemento</h5>\n                   <input class=\"form-control\" name=\"observation\" [(ngModel)]=\"restaurant.observation\" type=\"text\">\n                </div>\n             </div>\n          </div>\n          <div class=\"form-group\">\n             <div class=\"row\">\n                <div class=\"col-xl-12 text-right\">\n                   <button type=\"button\" class=\"btn btn-lg btn-default\" (click)=\"backStep()\" style=\"margin-right: 10px\">Voltar</button>\n                   <button type=\"button\" class=\"btn btn-lg btn-success\" (click)=\"nextStep()\">Avançar</button>\n                </div>\n             </div>\n          </div>\n       </form>\n       <form *ngIf=\"step == 6\" role=\"form\">\n          <div class=\"row\">\n             <div class=\"col-lg-5\">\n                <div class=\"form-group\">\n                   <h5>Hora de abertura</h5>\n                   <input class=\"form-control\" placeholder=\"hh:mm:ss\" name=\"openning\" [(ngModel)]=\"opening\" type=\"text\" mask='99:99:99'>\n                </div>\n             </div>\n             <div class=\"col-lg-5\">\n                <div class=\"form-group\">\n                   <h5>Hora de fechamento</h5>\n                   <input class=\"form-control\" placeholder=\"hh:mm:ss\" name=\"closure\" [(ngModel)]=\"closure\" type=\"text\" mask='99:99:99'>\n                </div>\n             </div>\n             <div class=\"col-lg-2\">\n                <div class=\"form-group\">\n                   <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"addServiceHour()\" style=\"margin-top: 35px; margin-left: -15px\">Adicionar</button>\n                </div>\n             </div>\n             <div class=\"col-lg-12\">\n                <table *ngIf=\"service_hours.length > 0\" class=\"card-body table\">\n                   <thead>\n                      <tr>\n                         <th>Abertura</th>\n                         <th>Fechamento</th>\n                         <th>Ações</th>\n                      </tr>\n                   </thead>\n                   <tbody *ngFor=\"let hour of service_hours  | paginate: { itemsPerPage: 2, currentPage: page }\">\n                      <tr class=\"table-default\">\n                         <td>{{hour.opening}}</td>\n                         <td>{{hour.closure}}</td>\n                         <td>\n                            <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"deleteServiceHour(hour)\">Deletar</button>\n                         </td>\n                      </tr>\n                   </tbody>\n                </table>\n             </div>\n             <div class=\"col-lg-12\">\n                <div class=\"days_of_week\" style=\"margin-bottom: 10px;\">\n                   <h5>Dias de trabalho</h5>\n                   <ng-select\n                   [items]=\"days_of_week\"\n                   [multiple]=\"true\"\n                   name=\"selected_days_of_week\"\n                   [closeOnSelect]=\"false\"\n                   [hideSelected]=\"true\"\n                   (add) = \"addWorkDayItem($event)\"\n                   (remove) = \"removeWorkItem($vent)\"\n                   bindLabel=\"name\"\n                   placeholder=\"Selecione os dias\"\n                   dropdownPosition=\"top\"\n                   [(ngModel)]=\"selected_days_of_week\">\n                   </ng-select>\n                </div>\n             </div>\n          </div>\n          <div class=\"form-group\">\n             <div class=\"row\">\n                <div class=\"col-xl-12 text-right\">\n                   <button type=\"button\" class=\"btn btn-lg btn-default\" (click)=\"backStep()\" style=\"margin-right: 10px\">Voltar</button>\n                   <button type=\"button\" class=\"btn btn-lg btn-success\" (click)=\"save()\">Concluir</button>\n                </div>\n             </div>\n          </div>\n       </form>\n    </div>\n </div>\n"

/***/ }),

/***/ "./src/app/layout/restaurants/restaurants-form/restaurants-form.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/restaurants/restaurants-form/restaurants-form.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/restaurants/restaurants-form/restaurants-form.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/restaurants/restaurants-form/restaurants-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RestaurantsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsFormComponent", function() { return RestaurantsFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../restaurant */ "./src/app/layout/restaurants/restaurant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_restaurants_restaurants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/restaurants/restaurants.service */ "./src/app/services/restaurants/restaurants.service.ts");
/* harmony import */ var _services_tags_tags_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/tags/tags.service */ "./src/app/services/tags/tags.service.ts");
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/login/login.service */ "./src/app/services/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RestaurantsFormComponent = /** @class */ (function () {
    function RestaurantsFormComponent(route, router, datepipe, modalService, restaurantsService, tagsService, loginService) {
        this.route = route;
        this.router = router;
        this.datepipe = datepipe;
        this.modalService = modalService;
        this.restaurantsService = restaurantsService;
        this.tagsService = tagsService;
        this.loginService = loginService;
        this.alerts = [];
        this.edit = false;
        this.selected_tags = [];
        this.restaurant = new _restaurant__WEBPACK_IMPORTED_MODULE_1__["Restaurant"]();
        this.access_token = null;
        this.password_confirmation = null;
        this.step = 1;
        this.step_number = 6;
        this.service_hours = [];
        this.opening = null;
        this.closure = null;
        this.wdays = {
            sunday: false,
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false
        };
        this.days_of_week = [
            {
                name: 'Domingo',
                id: 0
            },
            {
                name: 'Segunda-Feira',
                id: 1
            },
            {
                name: 'Terça-Feira',
                id: 2
            },
            {
                name: 'Quarta-Feira',
                id: 3
            },
            {
                name: 'Quinta-Feira',
                id: 4
            },
            {
                name: 'Sexta-Feira',
                id: 5
            },
            {
                name: 'Sábado',
                id: 6
            }
        ];
        this.selected_days_of_week = [];
    }
    RestaurantsFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('access_token') != null) {
            this.access_token = localStorage.getItem('access_token');
            if (this.route.snapshot.paramMap.get('id') != null) {
                this.edit = true;
                var restaurant_edit = JSON.parse(localStorage.getItem('restaurant_edit'));
                this.restaurant_edit = restaurant_edit;
                restaurant_edit.tags.forEach(function (i) {
                    _this.selected_tags.push(i);
                });
                this.setWorkedDays(this.restaurant_edit.worked_days);
            }
            this.load();
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    RestaurantsFormComponent.prototype.load = function () {
        if (this.edit) {
            this.updateFields();
        }
        this.tags = this.tagsService.getTags(this.access_token);
    };
    RestaurantsFormComponent.prototype.updateFields = function () {
        console.log(this.restaurant_edit);
        this.restaurant.email = this.restaurant_edit.user.email;
        this.restaurant.social_name = this.restaurant_edit.social_name;
        this.restaurant.fantasy_name = this.restaurant_edit.fantasy_name;
        this.restaurant.responsible_name = this.restaurant_edit.responsible_name;
        this.restaurant.responsible_phone = this.restaurant_edit.responsible_phone;
        this.restaurant.cnpj = this.restaurant_edit.cnpj;
        this.restaurant.cell_phone = this.restaurant_edit.cell_phone;
        this.restaurant.phone = this.restaurant_edit.phone;
        this.restaurant.order_limit = this.restaurant_edit.order_limit;
        this.restaurant.delivery_value = this.restaurant_edit.delivery_value;
        this.restaurant.avg_delivery_time = this.restaurant_edit.avg_delivery_time;
        if (this.restaurant_edit.locations.length > 0) {
            this.restaurant.address = this.restaurant_edit.locations[0].address;
            this.restaurant.number = this.restaurant_edit.locations[0].number;
            this.restaurant.postal_code = this.restaurant_edit.locations[0].postal_code;
            this.restaurant.state = this.restaurant_edit.locations[0].state;
            this.restaurant.city = this.restaurant_edit.locations[0].city;
            this.restaurant.district = this.restaurant_edit.locations[0].district;
        }
        this.restaurant.observation = this.restaurant_edit.observation;
        this.service_hours = this.restaurant_edit.service_hours;
        this.restaurant.image = this.restaurant_edit.image_base64;
    };
    RestaurantsFormComponent.prototype.setWorkedDays = function (worked_days) {
        var _this = this;
        worked_days.forEach(function (wday) {
            console.log(wday);
            if (wday.sunday) {
                _this.selected_days_of_week.push(_this.days_of_week.find(function (d) { return d.id == 0; }));
            }
            if (wday.monday) {
                console.log(_this.days_of_week.find(function (d) { return d.id == 1; }));
                _this.selected_days_of_week.push(_this.days_of_week.find(function (d) { return d.id == 1; }));
            }
            if (wday.tuesday) {
                _this.selected_days_of_week.push(_this.days_of_week.find(function (d) { return d.id == 2; }));
            }
            if (wday.wednesday) {
                _this.selected_days_of_week.push(_this.days_of_week.find(function (d) { return d.id == 3; }));
            }
            if (wday.thursday) {
                _this.selected_days_of_week.push(_this.days_of_week.find(function (d) { return d.id == 4; }));
            }
            if (wday.friday) {
                _this.selected_days_of_week.push(_this.days_of_week.find(function (d) { return d.id == 5; }));
            }
            if (wday.saturday) {
                _this.selected_days_of_week.push(_this.days_of_week.find(function (d) { return d.id == 6; }));
            }
        });
        console.log(this.selected_days_of_week);
    };
    RestaurantsFormComponent.prototype.validate = function () {
        if (this.step == 1) {
            if (!this.edit) {
                if (this.restaurant.email == null) {
                    this.showAlert('danger', 'Informe um endereço de email!');
                    return false;
                }
                else if (this.restaurant.password == null) {
                    this.showAlert('danger', 'É necessário informar uma senha!');
                    return false;
                }
                else if (this.restaurant.password != this.password_confirmation) {
                    this.showAlert('danger', 'A senha informada não coincide com a confirmação!');
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                if (this.restaurant.email == null) {
                    this.showAlert('danger', 'Informe um endereço de email!');
                    return false;
                }
                else {
                    return true;
                }
            }
        }
        else if (this.step == 2) {
            if (this.restaurant.social_name == null) {
                this.showAlert('danger', 'Informe a razão social do restaurante!');
                return false;
            }
            else if (this.restaurant.fantasy_name == null) {
                this.showAlert('danger', 'Informe o nome fantasia do restaurante!');
                return false;
            }
            else if (this.restaurant.cell_phone == null) {
                this.showAlert('danger', 'Informe o celular do restaurante!');
                return false;
            }
            else if (this.restaurant.phone == null) {
                this.showAlert('danger', 'Informe o telefone do restaurante!');
                return false;
            }
            else if (this.restaurant.cnpj == null) {
                this.showAlert('danger', 'Informe o CNPJ do restaurante!');
                return false;
            }
            else {
                return true;
            }
        }
        else if (this.step == 3) {
            if (this.restaurant.responsible_name == null) {
                this.showAlert('danger', 'Informe o nome do responsável pelo restaurante!');
                return false;
            }
            else if (this.restaurant.responsible_phone == null) {
                this.showAlert('danger', 'Informe o telefone do responsável pelo restaurante!');
                return false;
            }
            else {
                return true;
            }
        }
        else if (this.step == 4) {
            console.log(this.restaurant.delivery_value);
            if (this.selected_tags.length < 1) {
                this.showAlert('danger', 'Selecione ao menos uma tag!');
                return false;
            }
            else if (this.selectedFile == null && !this.edit) {
                this.showAlert('danger', 'Selecione a imagem do restaurante!');
                return false;
            }
            else if (this.restaurant.delivery_value == null) {
                this.showAlert('danger', 'Informe a taxa de entrega!');
                return false;
            }
            else if (this.restaurant.avg_delivery_time == null) {
                this.showAlert('danger', 'Informe tempo médio de entrega!');
                return false;
            }
            else if (this.restaurant.order_limit == null) {
                this.showAlert('danger', 'Informe a quantidade máxima de pedidos por dia!');
                return false;
            }
            else if (parseInt(this.restaurant.avg_delivery_time.substr(0, 2)) > 23
                || parseInt(this.restaurant.avg_delivery_time.substr(2, 2)) > 59
                || parseInt(this.restaurant.avg_delivery_time.substr(4, 2)) > 59) {
                this.showAlert('danger', 'O tempo médio informado não é válido!');
                return false;
            }
            else if (this.restaurant.order_limit < 1) {
                this.showAlert('danger', 'O limite de pedidos não pode ser menor que 1!');
                return false;
            }
            else if (this.restaurant.delivery_value < 0) {
                this.showAlert('danger', 'A taxa de entrega não pode ser menor que zero!');
                return false;
            }
            else {
                this.restaurant.avg_delivery_time = this.restaurant.avg_delivery_time.substr(0, 2) + ':' + this.restaurant.avg_delivery_time.substr(2, 2) + ':' + this.restaurant.avg_delivery_time.substr(4, 2);
                return true;
            }
        }
        else if (this.step == 5) {
            if (this.restaurant.address == null) {
                this.showAlert('danger', 'Informe o endereço!');
                return false;
            }
            else if (this.restaurant.number == null) {
                this.showAlert('danger', 'Informe o número do endereço!');
                return false;
            }
            else if (this.restaurant.postal_code == null) {
                this.showAlert('danger', 'Informe o código postal!');
                return false;
            }
            else if (this.restaurant.state == null) {
                this.showAlert('danger', 'Informe o estado!');
                return false;
            }
            else if (this.restaurant.city == null) {
                this.showAlert('danger', 'Informe a cidade!');
                return false;
            }
            else if (this.restaurant.city == null) {
                this.showAlert('danger', 'Informe o bairro!');
                return false;
            }
            else {
                return true;
            }
        }
        else {
            console.log(this.selected_days_of_week);
            if (this.service_hours.length < 1) {
                this.showAlert('danger', 'Informe os dados de atendimento!');
                return false;
            }
            else if (this.selected_days_of_week.length < 1) {
                this.showAlert('danger', 'Selecione os dias de atendimento!');
                return false;
            }
            else {
                return true;
            }
        }
    };
    RestaurantsFormComponent.prototype.addWorkDayItem = function (item) {
        this.selected_days_of_week.push(item);
        console.log(this.selected_days_of_week);
    };
    RestaurantsFormComponent.prototype.removeWorkItem = function (item) {
        var index = this.selected_days_of_week.indexOf(item);
        this.selected_days_of_week.splice(index, 1);
    };
    RestaurantsFormComponent.prototype.addTagItem = function (item) {
        this.selected_tags.push(item);
    };
    RestaurantsFormComponent.prototype.removeTagItem = function (item) {
        var index = this.selected_tags.indexOf(item);
        this.selected_tags.splice(index, 1);
    };
    RestaurantsFormComponent.prototype.prepare = function () {
        var _this = this;
        this.restaurant.tags_ids = [];
        this.selected_tags.forEach(function (i) {
            _this.restaurant.tags_ids.push(i.id);
        });
        this.selected_days_of_week.forEach(function (wday) {
            if (wday.id == 0) {
                _this.wdays.sunday = true;
            }
            else if (wday.id == 1) {
                _this.wdays.monday = true;
            }
            else if (wday.id == 2) {
                _this.wdays.tuesday = true;
            }
            else if (wday.id == 3) {
                _this.wdays.wednesday = true;
            }
            else if (wday.id == 4) {
                _this.wdays.thursday = true;
            }
            else if (wday.id == 5) {
                _this.wdays.friday = true;
            }
            else {
                _this.wdays.saturday = true;
            }
        });
    };
    RestaurantsFormComponent.prototype.showAlert = function (type, err) {
        this.alerts.push({
            id: 1,
            type: type,
            message: err
        });
    };
    RestaurantsFormComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    RestaurantsFormComponent.prototype.addServiceHour = function () {
        if (this.opening != null && this.closure != null) {
            if (parseInt(this.opening.substr(0, 2)) > 23
                || parseInt(this.opening.substr(2, 2)) > 59
                || parseInt(this.opening.substr(4, 2)) > 59
                || parseInt(this.closure.substr(0, 2)) > 23
                || parseInt(this.closure.substr(2, 2)) > 59
                || parseInt(this.closure.substr(4, 2)) > 59) {
                this.showAlert('danger', 'Os horários informados para o atendimento não são válidos!');
                this.opening = null;
                this.closure = null;
                return false;
            }
            else {
                this.opening = this.opening.substr(0, 2) + ':' + this.opening.substr(2, 2) + ':' + this.opening.substr(4, 2);
                this.closure = this.closure.substr(0, 2) + ':' + this.closure.substr(2, 2) + ':' + this.closure.substr(4, 2);
                var service_hour = {
                    opening: this.opening,
                    closure: this.closure
                };
                this.service_hours.push(service_hour);
            }
            this.opening = null;
            this.closure = null;
        }
        else {
            this.showAlert('danger', 'Informe os dados de atendimento!');
        }
    };
    RestaurantsFormComponent.prototype.deleteServiceHour = function (hour) {
        var index = this.service_hours.indexOf(hour);
        this.service_hours.splice(index, 1);
    };
    RestaurantsFormComponent.prototype.nextStep = function () {
        if (this.validate()) {
            if (this.step < this.step_number) {
                this.step = this.step + 1;
            }
        }
    };
    RestaurantsFormComponent.prototype.backStep = function () {
        if (this.step > 1) {
            this.step = this.step - 1;
        }
    };
    RestaurantsFormComponent.prototype.fileChange = function (event) {
        this.selectedFile = event.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(this.selectedFile);
    };
    RestaurantsFormComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        var header = 'data:' + this.selectedFile.type + ';base64,';
        this.restaurant.image = header + '' + btoa(binaryString);
    };
    RestaurantsFormComponent.prototype.save = function () {
        var _this = this;
        if (this.validate()) {
            if (!this.edit) {
                this.loginService
                    .addUser(this.access_token, this.restaurant.email, this.restaurant.fantasy_name, this.restaurant.password)
                    .subscribe(function (user) {
                    _this.saveRestaurant(user);
                });
            }
            else {
                this.loginService
                    .updateUser(this.access_token, this.restaurant.email, this.restaurant.fantasy_name, this.restaurant.password, this.restaurant_edit.user.id)
                    .subscribe(function (user) {
                    _this.saveRestaurant(user);
                });
            }
        }
    };
    RestaurantsFormComponent.prototype.saveRestaurant = function (user) {
        var _this = this;
        var location = {
            city: this.restaurant.city,
            state: this.restaurant.state,
            address: this.restaurant.address,
            number: this.restaurant.number,
            postal_code: this.restaurant.postal_code.substr(0, 5) + '-' + this.restaurant.postal_code.substr(5, 3),
            district: this.restaurant.district,
            observation: this.restaurant.complement
        };
        this.prepare();
        if (!this.edit) {
            this.restaurant.user_id = user.id;
            this.restaurantsService
                .addRestaurant(this.access_token, this.restaurant)
                .subscribe(function (restaurant) {
                _this.restaurantsService
                    .addLocation(_this.access_token, location, restaurant)
                    .subscribe(function (location) {
                    _this.restaurantsService
                        .addWorkedDays(_this.access_token, _this.wdays, restaurant)
                        .subscribe(function (wdays) {
                        _this.addServiceHours(restaurant);
                    });
                });
            });
            this.router.navigate(['/restaurants-list', { message: 'Restaurante cadastrado com sucesso!' }]);
        }
        else {
            this.restaurantsService
                .editRestaurant(this.access_token, this.restaurant, this.restaurant_edit.id)
                .subscribe(function (restaurant) {
                _this.restaurantsService
                    .editLocation(_this.access_token, location, restaurant, _this.restaurant_edit.locations[0].id)
                    .subscribe(function (location) {
                    _this.restaurantsService
                        .editWorkedDays(_this.access_token, _this.wdays, restaurant, _this.restaurant_edit.worked_days[0].id)
                        .subscribe(function (wdays) {
                        _this.addServiceHours(restaurant);
                    });
                });
            });
            this.router.navigate(['/restaurants-list', { message: 'Restaurante cadastrado com sucesso!' }]);
        }
    };
    //encerrar -> falta verificar se o service hour de fato continuou ou se foi adicionado :/
    RestaurantsFormComponent.prototype.addServiceHours = function (restaurant) {
        var _this = this;
        this.service_hours.forEach(function (s) {
            var service_hour = {
                company_id: restaurant.id,
                opening: s.opening,
                closure: s.closure
            };
            _this.restaurantsService
                .addServiceHours(_this.access_token, service_hour, restaurant)
                .subscribe(function (service_hour) { return console.log(service_hour); });
        });
    };
    RestaurantsFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-restaurants-form',
            template: __webpack_require__(/*! ./restaurants-form.component.html */ "./src/app/layout/restaurants/restaurants-form/restaurants-form.component.html"),
            styles: [__webpack_require__(/*! ./restaurants-form.component.scss */ "./src/app/layout/restaurants/restaurants-form/restaurants-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _services_restaurants_restaurants_service__WEBPACK_IMPORTED_MODULE_5__["RestaurantsService"],
            _services_tags_tags_service__WEBPACK_IMPORTED_MODULE_6__["TagsService"],
            _services_login_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]])
    ], RestaurantsFormComponent);
    return RestaurantsFormComponent;
}());



/***/ }),

/***/ "./src/app/layout/restaurants/restaurants-form/restaurants-form.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/restaurants/restaurants-form/restaurants-form.module.ts ***!
  \********************************************************************************/
/*! exports provided: RestaurantsFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsFormModule", function() { return RestaurantsFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _restaurants_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restaurants-form-routing.module */ "./src/app/layout/restaurants/restaurants-form/restaurants-form-routing.module.ts");
/* harmony import */ var _restaurants_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./restaurants-form.component */ "./src/app/layout/restaurants/restaurants-form/restaurants-form.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-currency-mask */ "./node_modules/ng2-currency-mask/index.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var RestaurantsFormModule = /** @class */ (function () {
    function RestaurantsFormModule() {
    }
    RestaurantsFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _restaurants_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["RestaurantsFormRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__["CurrencyMaskModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"].forRoot()
            ],
            declarations: [_restaurants_form_component__WEBPACK_IMPORTED_MODULE_6__["RestaurantsFormComponent"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        })
    ], RestaurantsFormModule);
    return RestaurantsFormModule;
}());



/***/ })

}]);
//# sourceMappingURL=restaurants-restaurants-form-restaurants-form-module.js.map