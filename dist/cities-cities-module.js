(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cities-cities-module"],{

/***/ "./src/app/layout/cities/cities-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/cities/cities-routing.module.ts ***!
  \********************************************************/
/*! exports provided: CitiesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesRoutingModule", function() { return CitiesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cities_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cities.component */ "./src/app/layout/cities/cities.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _cities_component__WEBPACK_IMPORTED_MODULE_2__["CitiesComponent"]
    }
];
var CitiesRoutingModule = /** @class */ (function () {
    function CitiesRoutingModule() {
    }
    CitiesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CitiesRoutingModule);
    return CitiesRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/cities/cities.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/cities/cities.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Exclusão de cidade</h4>\n    </div>\n    <div class=\"modal-body\">\n        <p>Tem certeza de que deseja excluir?</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('dismiss')\">Não</button>\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('delete')\">Sim</button>\n    </div>\n</ng-template>\n\n<div class=\"row\">\n    <div class=\"col-lg-3\">\n    </div>\n    <div class=\"col-lg-6\">\n        <h3>Gerenciamento de cidades</h3>\n        <hr>\n        <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n        <form role=\"form\">\n            <div class=\"row\">\n                <div class=\"col-lg-8\">\n                    <div class=\"form-group\">\n                        <label>Nome da cidade</label>\n                        <input [(ngModel)]=\"cityName\" name=\"cityName\" class=\"form-control\" >\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                        <label>Estado</label>\n                        <select class=\"form-control\" [(ngModel)]=\"state\" name=\"state\">\n                                <option value=\"-1\">Selecione...</option>\n                            <option *ngFor=\"let s of states\" [ngValue]=\"s.id\">{{s.nomenclature}}</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"row\">\n                    <div class=\"col-xl-12 text-right\">\n                        <button type=\"button\" class=\"btn btn btn-success\" (click)=\"addCity()\">Adicionar</button>\n                    </div>\n                </div>\n            </div>\n        </form>\n        <hr>\n        <table *ngIf=\"cities.length > 0\" class=\"card-body table\">\n            <thead>\n               <tr>\n                  <th>Nome</th>\n                  <th>Estado</th>\n                  <th>Ações</th>\n               </tr>\n            </thead>\n            <tbody *ngFor=\"let city of cities  | paginate: { itemsPerPage: 4, currentPage: page }\">\n               <tr class=\"table-default\">\n                  <td>{{ city.name }}</td>\n                  <td>{{ city.state.nomenclature }}</td>\n                  <td>\n                     <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"editCity(city)\">Editar</button>\n                     <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"deleteCity(content, city)\">Deletar</button>\n                  </td>\n               </tr>\n            </tbody>\n         </table>\n         <div class=\"has-text-centered\">\n            <pagination-controls (pageChange)=\"page = $event\" previousLabel=\"Anterior\" nextLabel=\"Próximo\"></pagination-controls>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/cities/cities.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/cities/cities.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-sm {\n  margin-left: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/cities/cities.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/cities/cities.component.ts ***!
  \***************************************************/
/*! exports provided: CitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesComponent", function() { return CitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_locations_locations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/locations/locations.service */ "./src/app/services/locations/locations.service.ts");
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




var CitiesComponent = /** @class */ (function () {
    function CitiesComponent(route, router, locationsService, modalService) {
        this.route = route;
        this.router = router;
        this.locationsService = locationsService;
        this.modalService = modalService;
        this.cities = [];
        this.states = [];
        this.cityName = null;
        this.state = -1;
        this.city_edit = null;
        this.alerts = [];
    }
    CitiesComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('access_token') != null) {
            this.load();
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    CitiesComponent.prototype.load = function () {
        var _this = this;
        this.locationsService
            .getStates(localStorage.getItem('access_token'))
            .subscribe(function (states) { return _this.states = states; });
        this.locationsService
            .getCities(localStorage.getItem('access_token'))
            .subscribe(function (cities) { return _this.cities = cities; });
    };
    CitiesComponent.prototype.addCity = function () {
        var _this = this;
        if (this.validate()) {
            var city = {
                name: this.cityName,
                state_id: this.state
            };
            if (this.city_edit == null) {
                this.locationsService
                    .addCity(localStorage.getItem('access_token'), city)
                    .subscribe(function () {
                    _this.updateCities(false);
                });
            }
            else {
                this.locationsService
                    .editCity(localStorage.getItem('access_token'), city, this.city_edit.id)
                    .subscribe(function () {
                    _this.updateCities(true);
                });
            }
        }
    };
    CitiesComponent.prototype.editCity = function (city) {
        console.log(city);
        this.cityName = city.name;
        this.state = city.state_id;
        this.city_edit = city;
    };
    CitiesComponent.prototype.deleteCity = function (content, city) {
        var _this = this;
        this.modalService
            .open(content, { size: 'lg' })
            .result.then(function (result) {
            if (result === 'delete') {
                _this.locationsService
                    .deleteCity(localStorage.getItem('access_token'), city.id)
                    .subscribe(function () {
                    _this.load();
                });
            }
        });
    };
    CitiesComponent.prototype.updateCities = function (edit) {
        this.cityName = '';
        this.state = -1;
        this.load();
        if (edit) {
            this.showAlert('success', 'Cidade atualizada com sucesso!');
            this.city_edit = null;
        }
        else {
            this.showAlert('success', 'Cidade inserida com sucesso!');
        }
    };
    CitiesComponent.prototype.validate = function () {
        if (this.cityName == null) {
            this.showAlert('danger', 'Informe o nome da cidade!');
            return false;
        }
        else if (this.state == null) {
            this.showAlert('danger', 'Informe o estado da cidade!');
            return false;
        }
        else {
            return true;
        }
    };
    CitiesComponent.prototype.showAlert = function (type, err) {
        this.alerts.push({
            id: 1,
            type: type,
            message: err
        });
    };
    CitiesComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    CitiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cities',
            template: __webpack_require__(/*! ./cities.component.html */ "./src/app/layout/cities/cities.component.html"),
            styles: [__webpack_require__(/*! ./cities.component.scss */ "./src/app/layout/cities/cities.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_locations_locations_service__WEBPACK_IMPORTED_MODULE_2__["LocationsService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], CitiesComponent);
    return CitiesComponent;
}());



/***/ }),

/***/ "./src/app/layout/cities/cities.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/cities/cities.module.ts ***!
  \************************************************/
/*! exports provided: CitiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesModule", function() { return CitiesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _cities_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cities-routing.module */ "./src/app/layout/cities/cities-routing.module.ts");
/* harmony import */ var _cities_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cities.component */ "./src/app/layout/cities/cities.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CitiesModule = /** @class */ (function () {
    function CitiesModule() {
    }
    CitiesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _cities_routing_module__WEBPACK_IMPORTED_MODULE_5__["CitiesRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"].forRoot()
            ],
            declarations: [_cities_component__WEBPACK_IMPORTED_MODULE_6__["CitiesComponent"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        })
    ], CitiesModule);
    return CitiesModule;
}());



/***/ })

}]);
//# sourceMappingURL=cities-cities-module.js.map