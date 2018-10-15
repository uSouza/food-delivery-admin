(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menus-menus-form-menus-form-module"],{

/***/ "./src/app/layout/menus/menu.ts":
/*!**************************************!*\
  !*** ./src/app/layout/menus/menu.ts ***!
  \**************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
var Menu = /** @class */ (function () {
    function Menu() {
    }
    return Menu;
}());



/***/ }),

/***/ "./src/app/layout/menus/menus-form/menus-form-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/menus/menus-form/menus-form-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: MenusFormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusFormRoutingModule", function() { return MenusFormRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menus_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menus-form.component */ "./src/app/layout/menus/menus-form/menus-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _menus_form_component__WEBPACK_IMPORTED_MODULE_2__["MenusFormComponent"]
    }
];
var MenusFormRoutingModule = /** @class */ (function () {
    function MenusFormRoutingModule() {
    }
    MenusFormRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MenusFormRoutingModule);
    return MenusFormRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/menus/menus-form/menus-form.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/menus/menus-form/menus-form.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-3\">\n    </div>\n    <div class=\"col-lg-6\">\n        <h3 *ngIf=\"edit\">Edição de cardápio</h3>\n        <h3 *ngIf=\"!edit\">Novo cardápio</h3>\n        <hr>\n        <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n        <div class=\"ingredients\">\n            <h5>Ingredientes</h5>\n            <ng-select\n                [items]=\"ingredients | async\"\n                [multiple]=\"true\"\n                [closeOnSelect]=\"false\"\n                [hideSelected]=\"true\"\n                bindLabel=\"name\"\n                placeholder=\"Selecione os ingredientes\"\n                [(ngModel)]=\"selected_ingredients\">\n            </ng-select>\n        </div>\n\n        <div class=\"ingredients\">\n                <h5>Tamanhos disponíveis</h5>\n                <ng-select\n                    [items]=\"sizes | async\"\n                    [multiple]=\"true\"\n                    [closeOnSelect]=\"false\"\n                    [hideSelected]=\"true\"\n                    bindLabel=\"size\"\n                    placeholder=\"Selecione os tamanhos\"\n                    [(ngModel)]=\"selected_sizes\">\n                </ng-select>\n            </div>\n\n        <form role=\"form\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"form-group\">\n                        <h5>Descrição</h5>\n                        <input [(ngModel)]=\"menu.description\" name=\"description\" class=\"form-control\" type=\"text\">\n                    </div>\n                </div>\n                <div class=\"col-lg-12\">\n                    <div class=\"form-group\">\n                        <h5>Observação</h5>\n                        <input [(ngModel)]=\"menu.observation\" name=\"observation\" class=\"form-control\" type=\"text\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-6\">\n                    <div class=\"form-group\">\n                        <h5>Data do cardápio</h5>\n                        <input class=\"form-control\" placeholder=\"dd/mm/yyyy\" name=\"date\" [(ngModel)]=\"date\" type=\"text\" mask='99/99/9999'>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"row\">\n                    <div class=\"col-xl-12 text-right\">\n                        <button *ngIf=\"!edit\" type=\"button\" class=\"btn btn-lg btn-success\" (click)=\"addMenu()\">Adicionar</button>\n                        <button *ngIf=\"edit\" type=\"button\" class=\"btn btn-lg btn-success\" (click)=\"addMenu()\">Editar</button>\n                    </div>\n                </div>\n            </div>\n        </form>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/menus/menus-form/menus-form.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/menus/menus-form/menus-form.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .datepicker-input .custom-select {\n  width: 50%; }\n\n#multiselectingredient {\n  height: 200px !important; }\n\n.ingredients {\n  margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/layout/menus/menus-form/menus-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/menus/menus-form/menus-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: MenusFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusFormComponent", function() { return MenusFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_ingredients_ingredients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/ingredients/ingredients.service */ "./src/app/services/ingredients/ingredients.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_sizes_sizes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/sizes/sizes.service */ "./src/app/services/sizes/sizes.service.ts");
/* harmony import */ var _services_menus_menus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/menus/menus.service */ "./src/app/services/menus/menus.service.ts");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../menu */ "./src/app/layout/menus/menu.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MenusFormComponent = /** @class */ (function () {
    function MenusFormComponent(route, router, ingredientsService, sizesService, menusService, datepipe, modalService) {
        this.route = route;
        this.router = router;
        this.ingredientsService = ingredientsService;
        this.sizesService = sizesService;
        this.menusService = menusService;
        this.datepipe = datepipe;
        this.modalService = modalService;
        this.alerts = [];
        this.edit = false;
        this.selected_ingredients = [];
        this.date = null;
        this.selected_sizes = [];
        this.ingredients_ids = [];
        this.prices_ids = [];
        this.menu = new _menu__WEBPACK_IMPORTED_MODULE_6__["Menu"]();
        this.access_token = null;
    }
    MenusFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('access_token') != null) {
            this.access_token = localStorage.getItem('access_token');
            if (this.route.snapshot.paramMap.get('id') != null) {
                this.edit = true;
                var menu = JSON.parse(localStorage.getItem('menu_edit'));
                this.menu = menu;
                this.date = this.datepipe.transform(menu.date, 'dd/MM/yyyy');
                menu.ingredients.forEach(function (i) {
                    _this.selected_ingredients.push(i);
                });
                menu.prices.forEach(function (s) {
                    _this.selected_sizes.push(s);
                });
            }
            this.load();
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    MenusFormComponent.prototype.load = function () {
        this.ingredients = this.ingredientsService.getIngredients(this.access_token);
        this.sizes = this.sizesService.getSizes(this.access_token);
    };
    MenusFormComponent.prototype.addMenu = function () {
        var _this = this;
        if (this.validate()) {
            this.prepareIds();
            if (!this.edit) {
                this.menusService
                    .addMenu(this.access_token, this.menu)
                    .subscribe(function (menu) { return _this.router.navigate(['/menus-list', { message: 'Menu cadastrado com sucesso!' }]); });
            }
            else {
                this.menusService
                    .editMenu(this.access_token, this.menu, this.menu.id)
                    .subscribe(function (menu) { return _this.router.navigate(['/menus-list', { message: 'Menu alterado com sucesso!' }]); });
            }
        }
    };
    MenusFormComponent.prototype.validate = function () {
        var today = new Date();
        this.menu.date = this.date.substr(4, 4) + '-'
            + this.date.substr(2, 2) + '-'
            + this.date.substr(0, 2);
        if (this.selected_ingredients.length < 1) {
            this.showAlert('danger', 'Selecione os ingredientes da marmita!');
            return false;
        }
        else if (this.selected_sizes.length < 1) {
            this.showAlert('danger', 'Selecione os tamanhos da marmita!');
            return false;
        }
        else if (this.menu.description == null) {
            this.showAlert('danger', 'Informe a descrição da marmita!');
            return false;
        }
        else if (this.menu.date == null) {
            this.showAlert('danger', 'Informe a data da marmita!');
            return false;
        }
        else if (this.datepipe.transform(today, 'yyyy-MM-dd') > this.menu.date) {
            this.showAlert('danger', 'Informe uma data igual ou posterior a atual!');
            return false;
        }
        else {
            return true;
        }
    };
    MenusFormComponent.prototype.prepareIds = function () {
        var _this = this;
        this.selected_ingredients.forEach(function (i) {
            _this.ingredients_ids.push(i.id);
        });
        this.selected_sizes.forEach(function (s) {
            _this.prices_ids.push(s.id);
        });
        this.menu.ingredients_ids = this.ingredients_ids;
        this.menu.prices_ids = this.prices_ids;
    };
    MenusFormComponent.prototype.showAlert = function (type, err) {
        this.alerts.push({
            id: 1,
            type: type,
            message: err
        });
    };
    MenusFormComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    MenusFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menus-form',
            template: __webpack_require__(/*! ./menus-form.component.html */ "./src/app/layout/menus/menus-form/menus-form.component.html"),
            styles: [__webpack_require__(/*! ./menus-form.component.scss */ "./src/app/layout/menus/menus-form/menus-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_ingredients_ingredients_service__WEBPACK_IMPORTED_MODULE_2__["IngredientsService"],
            _services_sizes_sizes_service__WEBPACK_IMPORTED_MODULE_4__["SizesService"],
            _services_menus_menus_service__WEBPACK_IMPORTED_MODULE_5__["MenusService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], MenusFormComponent);
    return MenusFormComponent;
}());



/***/ }),

/***/ "./src/app/layout/menus/menus-form/menus-form.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/menus/menus-form/menus-form.module.ts ***!
  \**************************************************************/
/*! exports provided: MenusFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusFormModule", function() { return MenusFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _menus_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menus-form-routing.module */ "./src/app/layout/menus/menus-form/menus-form-routing.module.ts");
/* harmony import */ var _menus_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menus-form.component */ "./src/app/layout/menus/menus-form/menus-form.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _providers_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../providers/menu */ "./src/app/providers/menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var MenusFormModule = /** @class */ (function () {
    function MenusFormModule() {
    }
    MenusFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _menus_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenusFormRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"].forRoot()
            ],
            declarations: [_menus_form_component__WEBPACK_IMPORTED_MODULE_6__["MenusFormComponent"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _providers_menu__WEBPACK_IMPORTED_MODULE_9__["MenuProvider"]],
        })
    ], MenusFormModule);
    return MenusFormModule;
}());



/***/ }),

/***/ "./src/app/providers/menu.ts":
/*!***********************************!*\
  !*** ./src/app/providers/menu.ts ***!
  \***********************************/
/*! exports provided: MenuProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuProvider", function() { return MenuProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuProvider = /** @class */ (function () {
    function MenuProvider() {
    }
    MenuProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MenuProvider);
    return MenuProvider;
}());



/***/ })

}]);
//# sourceMappingURL=menus-menus-form-menus-form-module.js.map