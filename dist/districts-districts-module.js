(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["districts-districts-module"],{

/***/ "./src/app/layout/districts/districts-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/districts/districts-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DistrictsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictsRoutingModule", function() { return DistrictsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _districts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./districts.component */ "./src/app/layout/districts/districts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _districts_component__WEBPACK_IMPORTED_MODULE_2__["DistrictsComponent"]
    }
];
var DistrictsRoutingModule = /** @class */ (function () {
    function DistrictsRoutingModule() {
    }
    DistrictsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DistrictsRoutingModule);
    return DistrictsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/districts/districts.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/districts/districts.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Exclusão de bairro</h4>\n        </div>\n        <div class=\"modal-body\">\n            <p>Tem certeza de que deseja excluir?</p>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-light\" (click)=\"c('dismiss')\">Não</button>\n            <button type=\"button\" class=\"btn btn-light\" (click)=\"c('delete')\">Sim</button>\n        </div>\n    </ng-template>\n\n    <div class=\"row\">\n        <div class=\"col-lg-3\">\n        </div>\n        <div class=\"col-lg-6\">\n            <h3>Gerenciamento de bairros</h3>\n            <hr>\n            <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n            <form role=\"form\">\n                <div class=\"row\">\n                    <div class=\"col-lg-8\">\n                        <div class=\"form-group\">\n                            <label>Nome do bairro</label>\n                            <input [(ngModel)]=\"districtName\" name=\"districtName\" class=\"form-control\" >\n                        </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n                        <div class=\"form-group\">\n                            <label>Cidade</label>\n                            <select class=\"form-control\" [(ngModel)]=\"city\" name=\"city\">\n                                    <option value=\"-1\">Selecione...</option>\n                                <option *ngFor=\"let c of cities\" [ngValue]=\"c.id\">{{ c.name }} - {{ c.state.nomenclature }}</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"row\">\n                        <div class=\"col-xl-12 text-right\">\n                            <button type=\"button\" class=\"btn btn btn-success\" (click)=\"addDistrict()\">Adicionar</button>\n                        </div>\n                    </div>\n                </div>\n            </form>\n            <hr>\n            <table *ngIf=\"districts.length > 0\" class=\"card-body table\">\n                <thead>\n                   <tr>\n                      <th>Nome</th>\n                      <th>Cidade</th>\n                      <th>Estado</th>\n                      <th>Ações</th>\n                   </tr>\n                </thead>\n                <tbody *ngFor=\"let district of districts  | paginate: { itemsPerPage: 4, currentPage: page }\">\n                   <tr class=\"table-default\">\n                      <td>{{ district.name }}</td>\n                      <td>{{ district.city.name }}</td>\n                      <td>{{ district.city.state.nomenclature }}</td>\n                      <td>\n                         <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"editDistrict(district)\">Editar</button>\n                         <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"deleteDistrict(content, district)\">Deletar</button>\n                      </td>\n                   </tr>\n                </tbody>\n             </table>\n             <div class=\"has-text-centered\">\n                <pagination-controls (pageChange)=\"page = $event\" previousLabel=\"Anterior\" nextLabel=\"Próximo\"></pagination-controls>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/layout/districts/districts.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/districts/districts.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-sm {\n  margin-left: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/districts/districts.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/districts/districts.component.ts ***!
  \*********************************************************/
/*! exports provided: DistrictsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictsComponent", function() { return DistrictsComponent; });
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




var DistrictsComponent = /** @class */ (function () {
    function DistrictsComponent(route, router, locationsService, modalService) {
        this.route = route;
        this.router = router;
        this.locationsService = locationsService;
        this.modalService = modalService;
        this.cities = [];
        this.districts = [];
        this.districtName = null;
        this.city = -1;
        this.district_edit = null;
        this.alerts = [];
    }
    DistrictsComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('access_token') != null) {
            this.load();
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    DistrictsComponent.prototype.load = function () {
        var _this = this;
        this.locationsService
            .getCities(localStorage.getItem('access_token'))
            .subscribe(function (cities) { return _this.cities = cities; });
        this.locationsService
            .getDistricts(localStorage.getItem('access_token'))
            .subscribe(function (districts) { return _this.districts = districts; });
    };
    DistrictsComponent.prototype.addDistrict = function () {
        var _this = this;
        if (this.validate()) {
            var district = {
                name: this.districtName,
                city_id: this.city
            };
            if (this.district_edit == null) {
                this.locationsService
                    .addDistrict(localStorage.getItem('access_token'), district)
                    .subscribe(function () {
                    _this.updateDistricts(false);
                });
            }
            else {
                this.locationsService
                    .editDistrict(localStorage.getItem('access_token'), district, this.district_edit.id)
                    .subscribe(function () {
                    _this.updateDistricts(true);
                });
            }
        }
    };
    DistrictsComponent.prototype.editDistrict = function (district) {
        this.districtName = district.name;
        this.city = district.city_id;
        this.district_edit = district;
    };
    DistrictsComponent.prototype.deleteDistrict = function (content, district) {
        var _this = this;
        this.modalService
            .open(content, { size: 'lg' })
            .result.then(function (result) {
            if (result === 'delete') {
                _this.locationsService
                    .deleteDistrict(localStorage.getItem('access_token'), district.id)
                    .subscribe(function () {
                    _this.load();
                });
            }
        });
    };
    DistrictsComponent.prototype.updateDistricts = function (edit) {
        this.districtName = '';
        this.city = -1;
        this.load();
        if (edit) {
            this.showAlert('success', 'Bairro atualizado com sucesso!');
            this.district_edit = null;
        }
        else {
            this.showAlert('success', 'Bairro inserido com sucesso!');
        }
    };
    DistrictsComponent.prototype.validate = function () {
        if (this.districtName == null) {
            this.showAlert('danger', 'Informe o nome da cidade!');
            return false;
        }
        else if (this.city == null) {
            this.showAlert('danger', 'Informe o estado da cidade!');
            return false;
        }
        else {
            return true;
        }
    };
    DistrictsComponent.prototype.showAlert = function (type, err) {
        this.alerts.push({
            id: 1,
            type: type,
            message: err
        });
    };
    DistrictsComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    DistrictsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-districts',
            template: __webpack_require__(/*! ./districts.component.html */ "./src/app/layout/districts/districts.component.html"),
            styles: [__webpack_require__(/*! ./districts.component.scss */ "./src/app/layout/districts/districts.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_locations_locations_service__WEBPACK_IMPORTED_MODULE_2__["LocationsService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], DistrictsComponent);
    return DistrictsComponent;
}());



/***/ }),

/***/ "./src/app/layout/districts/districts.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/districts/districts.module.ts ***!
  \******************************************************/
/*! exports provided: DistrictsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictsModule", function() { return DistrictsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _districts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./districts-routing.module */ "./src/app/layout/districts/districts-routing.module.ts");
/* harmony import */ var _districts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./districts.component */ "./src/app/layout/districts/districts.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DistrictsModule = /** @class */ (function () {
    function DistrictsModule() {
    }
    DistrictsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _districts_routing_module__WEBPACK_IMPORTED_MODULE_5__["DistrictsRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"].forRoot()
            ],
            declarations: [_districts_component__WEBPACK_IMPORTED_MODULE_6__["DistrictsComponent"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        })
    ], DistrictsModule);
    return DistrictsModule;
}());



/***/ })

}]);
//# sourceMappingURL=districts-districts-module.js.map