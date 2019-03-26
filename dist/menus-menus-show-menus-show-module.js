(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menus-menus-show-menus-show-module"],{

/***/ "./src/app/layout/menus/menus-show/menus-show-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/menus/menus-show/menus-show-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: MenusShowRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusShowRoutingModule", function() { return MenusShowRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menus_show_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menus-show.component */ "./src/app/layout/menus/menus-show/menus-show.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _menus_show_component__WEBPACK_IMPORTED_MODULE_2__["MenusShowComponent"]
    }
];
var MenusShowRoutingModule = /** @class */ (function () {
    function MenusShowRoutingModule() {
    }
    MenusShowRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MenusShowRoutingModule);
    return MenusShowRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/menus/menus-show/menus-show.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/menus/menus-show/menus-show.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Inativação de cardápio</h4>\n    </div>\n    <div class=\"modal-body\">\n        <p>Deseja realmente inativar o cardápio?</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('noDelete')\">Não</button>\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('delete')\">Sim</button>\n    </div>\n</ng-template>\n\n<div class=\"content\">\n    <div class=\"row\">\n        <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}\n        </ngb-alert>\n        <div class=\"col-xl-12\">\n            <h2>\n                Cardápio nº {{menu.id}}\n            </h2>\n        </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-xl-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Dados do cardápio\n                </div>\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\"><strong>Descrição: </strong>{{ menu.description }}</h5>\n                    <p class=\"card-text\"><strong>Observação: </strong>{{ menu.observation }}</p>\n                    <p class=\"card-text\"><strong>Data do cardápio: </strong>{{ menu.date | date: 'dd/MM/yyyy' }}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Ingredientes\n                </div>\n                <div class=\"card-body\">\n                    <table *ngIf=\"menu.ingredients.length > 0\" class=\"card-body table\">\n                        <thead>\n                            <tr>\n                                <th>Ingrediente</th>\n                                <th>Grupo</th>\n                            </tr>\n                        </thead>\n                        <tbody\n                            *ngFor=\"let ingredient of menu.ingredients | paginate: { itemsPerPage: 7, currentPage: page }\">\n                            <tr class=\"table-default\">\n                                <th>{{ingredient.name}}</th>\n                                <td>{{ingredient.ingredient_group.name}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Tamanhos\n                </div>\n                <div class=\"card-body\">\n                    <table *ngIf=\"menu.prices.length > 0\" class=\"card-body table\">\n                        <thead>\n                            <tr>\n                                <th>Tamanho</th>\n                                <th>Valor</th>\n                            </tr>\n                        </thead>\n                        <tbody *ngFor=\"let price of menu.prices | paginate: { itemsPerPage: 7, currentPage: page }\">\n                            <tr class=\"table-default\">\n                                <th>{{price.size}}</th>\n                                <td>{{price.price | currency: 'BRL': true}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl-12 text-right\">\n            <button *ngIf=\"menu.deleted_at == null\" type=\"button\" class=\"btn btn-lg btn-danger\"\n                (click)=\"delete(content)\">Inativar</button>\n            <button *ngIf=\"menu.deleted_at != null\" type=\"button\" class=\"btn btn-lg btn-warning\"\n                (click)=\"restoreMenu(menu)\">Reativar</button>\n            <button type=\"button\" class=\"btn btn-lg btn-default\" (click)=\"copyToClipboard()\">Copiar</button>\n            <button type=\"button\" class=\"btn btn-lg btn-success\" (click)=\"edit()\">Editar</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/menus/menus-show/menus-show.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/menus/menus-show/menus-show.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-top: 10px; }\n\n.btn-lg {\n  margin-left: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/menus/menus-show/menus-show.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/menus/menus-show/menus-show.component.ts ***!
  \*****************************************************************/
/*! exports provided: MenusShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusShowComponent", function() { return MenusShowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _services_menus_menus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/menus/menus.service */ "./src/app/services/menus/menus.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_ingredient_groups_ingredient_groups_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/ingredient-groups/ingredient-groups.service */ "./src/app/services/ingredient-groups/ingredient-groups.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MenusShowComponent = /** @class */ (function () {
    function MenusShowComponent(route, router, _clipboardService, datepipe, menusService, ingredientGroupService, modalService) {
        this.route = route;
        this.router = router;
        this._clipboardService = _clipboardService;
        this.datepipe = datepipe;
        this.menusService = menusService;
        this.ingredientGroupService = ingredientGroupService;
        this.modalService = modalService;
        this.ingredientGroups = null;
        this.alerts = [];
    }
    MenusShowComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('access_token') != null) {
            this.getMenu();
            this.getIngredientsMenu();
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    MenusShowComponent.prototype.getIngredientsMenu = function () {
        var _this = this;
        this.ingredientGroupService
            .getIngredientesByMenu(localStorage.getItem('access_token'), this.route.snapshot.paramMap.get('id'))
            .subscribe(function (ingredient_groups) {
            _this.ingredientGroups = ingredient_groups;
        });
    };
    MenusShowComponent.prototype.getMenu = function () {
        var _this = this;
        this.menusService
            .getMenu(localStorage.getItem('access_token'), this.route.snapshot.paramMap.get('id'))
            .subscribe(function (menu) {
            _this.setMenu(menu);
        });
    };
    MenusShowComponent.prototype.setMenu = function (menu) {
        if (menu.date === '2000-01-01') {
            menu.date = Date.now();
        }
        this.menu = menu;
    };
    MenusShowComponent.prototype.edit = function () {
        localStorage.setItem('menu_edit', JSON.stringify(this.menu));
        this.router.navigate(['/menus-form', { id: this.menu.id }]);
    };
    MenusShowComponent.prototype.delete = function (content) {
        var _this = this;
        this.modalService
            .open(content, { size: 'lg' })
            .result.then(function (result) {
            if (result === 'delete') {
                _this.menusService
                    .deleteMenu(localStorage.getItem('access_token'), _this.menu.id)
                    .subscribe(function () { _this.router.navigate(['/menus-list', { message: 'Menu inativado com sucesso!' }]); }, function (err) { _this.showAlert('danger', err); });
            }
        });
    };
    MenusShowComponent.prototype.showAlert = function (type, err) {
        this.alerts.push({
            id: 1,
            type: type,
            message: err
        });
    };
    MenusShowComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    MenusShowComponent.prototype.restoreMenu = function (menu) {
        var _this = this;
        this.menusService
            .restoreMenu(localStorage.getItem('access_token'), menu.id)
            .subscribe(function () { return _this.router.navigate(['/menus-list', { message: 'Menu reativado com sucesso!' }]); });
    };
    MenusShowComponent.prototype.copyToClipboard = function () {
        this._clipboardService.copyFromContent(this.getMenuFormat());
    };
    MenusShowComponent.prototype.getMenuFormat = function () {
        var header = '*RESTAURANTE ' + this.menu.company.fantasy_name.toUpperCase() + '*' + '\n\n' +
            '*Refeição do dia:* ' + this.datepipe.transform(this.menu.date, 'dd/MM/yyyy') + '\n';
        var description = '\n*Refeição ' + this.menu.description + '*\n';
        var ingredients = '\n*Ingredientes*\n';
        this.ingredientGroups.forEach(function (group) {
            ingredients += '*' + group.name + '*\n';
            group.ingredients.forEach(function (i) {
                ingredients += '- ' + i.name + '\n';
            });
        });
        var prices = '\n*Valores*\n';
        this.menu.prices.forEach(function (p) {
            prices += '- ' + p.size + ' R$ ' + p.price + '\n';
        });
        var finalText = '\n*Peça sua refeição pelo site ou APP Pandeco* 🍝🍽' +
            '\n*Site:* pedido.pandeco.com.br\n*Google Play:* http://bit.do/pandeco';
        return header + description + ingredients + prices + finalText;
    };
    MenusShowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menus-show',
            template: __webpack_require__(/*! ./menus-show.component.html */ "./src/app/layout/menus/menus-show/menus-show.component.html"),
            styles: [__webpack_require__(/*! ./menus-show.component.scss */ "./src/app/layout/menus/menus-show/menus-show.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            _services_menus_menus_service__WEBPACK_IMPORTED_MODULE_3__["MenusService"],
            _services_ingredient_groups_ingredient_groups_service__WEBPACK_IMPORTED_MODULE_6__["IngredientGroupsService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], MenusShowComponent);
    return MenusShowComponent;
}());



/***/ }),

/***/ "./src/app/layout/menus/menus-show/menus-show.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/menus/menus-show/menus-show.module.ts ***!
  \**************************************************************/
/*! exports provided: MenusShowModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusShowModule", function() { return MenusShowModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _menus_show_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menus-show-routing.module */ "./src/app/layout/menus/menus-show/menus-show-routing.module.ts");
/* harmony import */ var _menus_show_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menus-show.component */ "./src/app/layout/menus/menus-show/menus-show.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var MenusShowModule = /** @class */ (function () {
    function MenusShowModule() {
    }
    MenusShowModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _menus_show_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenusShowRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_9__["ClipboardModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"].forRoot()
            ],
            declarations: [_menus_show_component__WEBPACK_IMPORTED_MODULE_6__["MenusShowComponent"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        })
    ], MenusShowModule);
    return MenusShowModule;
}());



/***/ })

}]);
//# sourceMappingURL=menus-menus-show-menus-show-module.js.map