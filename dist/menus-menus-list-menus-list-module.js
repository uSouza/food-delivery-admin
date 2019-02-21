(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menus-menus-list-menus-list-module"],{

/***/ "./src/app/layout/menus/menus-list/menus-list-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/menus/menus-list/menus-list-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: MenusListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusListRoutingModule", function() { return MenusListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menus_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menus-list.component */ "./src/app/layout/menus/menus-list/menus-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _menus_list_component__WEBPACK_IMPORTED_MODULE_2__["MenusListComponent"]
    }
];
var MenusListRoutingModule = /** @class */ (function () {
    function MenusListRoutingModule() {
    }
    MenusListRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MenusListRoutingModule);
    return MenusListRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/menus/menus-list/menus-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/menus/menus-list/menus-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n   <div class=\"row\">\n      <div class=\"col-lg-12\">\n         <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}\n         </ngb-alert>\n         <div class=\"card mb-3\">\n            <div class=\"card-header\">Listagem de cardápios</div>\n            <h5 *ngIf=\"data.data.length == 0\">Não há cardápios para exibir</h5>\n            <table *ngIf=\"data.data.length > 0\" class=\"card-body table\">\n               <thead>\n                  <tr>\n                     <th>#</th>\n                     <th>Descrição</th>\n                     <th>Restaurante</th>\n                     <th>Observação</th>\n                     <th>Data</th>\n                     <th>Status</th>\n                     <th>Ação</th>\n                  </tr>\n               </thead>\n               <tbody\n                  *ngFor=\"let menu of data.data | paginate: { itemsPerPage: data.per_page, currentPage: data.current_page, totalItems: data.total }\">\n                  <tr *ngIf=\"menu.deleted_at == null\" class=\"table-default\">\n                     <th>{{menu.id}}</th>\n                     <td>{{menu.description}}</td>\n                     <td>{{menu.company.fantasy_name}}</td>\n                     <td>{{menu.observation}}</td>\n                     <td *ngIf=\"! menu.fixed_menu || menu.fixed_menu == null\">{{menu.date | date: 'dd/MM/yyyy'}}</td>\n                     <td *ngIf=\"menu.fixed_menu\">Fixo</td>\n                     <td>Ativo</td>\n                     <td>\n                        <button (click)=\"showMenu(menu)\" type=\"button\"\n                           class=\"btn btn-sm btn-success\">Visualizar</button>\n                     </td>\n                  </tr>\n                  <tr *ngIf=\"menu.deleted_at != null\" class=\"table-warning\">\n                     <th>{{menu.id}}</th>\n                     <td>{{menu.description}}</td>\n                     <td>{{menu.observation}}</td>\n                     <td *ngIf=\"! menu.fixed_menu || menu.fixed_menu == null\">{{menu.date | date: 'dd/MM/yyyy'}}</td>\n                     <td *ngIf=\"menu.fixed_menu\">Fixo</td>\n                     <td>Inativo</td>\n                     <td>\n                        <button (click)=\"showMenu(menu)\" type=\"button\"\n                           class=\"btn btn-sm btn-success\">Visualizar</button>\n                     </td>\n                  </tr>\n               </tbody>\n            </table>\n            <div class=\"has-text-centered\">\n               <pagination-controls (pageChange)=\"pageChanged($event)\" previousLabel=\"Anterior\" nextLabel=\"Próximo\">\n               </pagination-controls>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/menus/menus-list/menus-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/menus/menus-list/menus-list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/menus/menus-list/menus-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/menus/menus-list/menus-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: MenusListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusListComponent", function() { return MenusListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_menus_menus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/menus/menus.service */ "./src/app/services/menus/menus.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenusListComponent = /** @class */ (function () {
    function MenusListComponent(router, route, menusService) {
        this.router = router;
        this.route = route;
        this.menusService = menusService;
        this.alerts = [];
    }
    MenusListComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.paramMap.get('message') != null) {
            this.showAlert('success', this.route.snapshot.paramMap.get('message'));
        }
        if (localStorage.getItem('access_token') == null) {
            this.router.navigate(['/login']);
        }
        this.getMenus();
    };
    MenusListComponent.prototype.getMenus = function () {
        var _this = this;
        this.menusService
            .getMenus(localStorage.getItem('access_token'))
            .subscribe(function (data) { return _this.data = data; });
    };
    MenusListComponent.prototype.showMenu = function (menu) {
        this.router.navigate(['/menus-show', { id: menu.id }]);
    };
    MenusListComponent.prototype.showAlert = function (type, err) {
        this.alerts.push({
            id: 1,
            type: type,
            message: err
        });
    };
    MenusListComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    MenusListComponent.prototype.pageChanged = function (page) {
        var _this = this;
        this.menusService
            .getMenusPaginate(localStorage.getItem('access_token'), page)
            .subscribe(function (data) { return _this.data = data; });
    };
    MenusListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menus-list',
            template: __webpack_require__(/*! ./menus-list.component.html */ "./src/app/layout/menus/menus-list/menus-list.component.html"),
            styles: [__webpack_require__(/*! ./menus-list.component.scss */ "./src/app/layout/menus/menus-list/menus-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_menus_menus_service__WEBPACK_IMPORTED_MODULE_2__["MenusService"]])
    ], MenusListComponent);
    return MenusListComponent;
}());



/***/ }),

/***/ "./src/app/layout/menus/menus-list/menus-list.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/menus/menus-list/menus-list.module.ts ***!
  \**************************************************************/
/*! exports provided: MenusListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusListModule", function() { return MenusListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _menus_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menus-list-routing.module */ "./src/app/layout/menus/menus-list/menus-list-routing.module.ts");
/* harmony import */ var _menus_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menus-list.component */ "./src/app/layout/menus/menus-list/menus-list.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var MenusListModule = /** @class */ (function () {
    function MenusListModule() {
    }
    MenusListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _menus_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenusListRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"].forRoot()
            ],
            declarations: [_menus_list_component__WEBPACK_IMPORTED_MODULE_6__["MenusListComponent"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        })
    ], MenusListModule);
    return MenusListModule;
}());



/***/ })

}]);
//# sourceMappingURL=menus-menus-list-menus-list-module.js.map