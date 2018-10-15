(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restaurants-restaurants-show-restaurants-show-module"],{

/***/ "./src/app/layout/restaurants/restaurants-show/restaurants-show-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/restaurants/restaurants-show/restaurants-show-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: RestaurantsShowRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsShowRoutingModule", function() { return RestaurantsShowRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _restaurants_show_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurants-show.component */ "./src/app/layout/restaurants/restaurants-show/restaurants-show.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _restaurants_show_component__WEBPACK_IMPORTED_MODULE_2__["RestaurantsShowComponent"]
    }
];
var RestaurantsShowRoutingModule = /** @class */ (function () {
    function RestaurantsShowRoutingModule() {
    }
    RestaurantsShowRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RestaurantsShowRoutingModule);
    return RestaurantsShowRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/restaurants/restaurants-show/restaurants-show.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/restaurants/restaurants-show/restaurants-show.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  restaurants-show works!\n</p>\n"

/***/ }),

/***/ "./src/app/layout/restaurants/restaurants-show/restaurants-show.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/restaurants/restaurants-show/restaurants-show.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/restaurants/restaurants-show/restaurants-show.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/restaurants/restaurants-show/restaurants-show.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RestaurantsShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsShowComponent", function() { return RestaurantsShowComponent; });
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

var RestaurantsShowComponent = /** @class */ (function () {
    function RestaurantsShowComponent() {
    }
    RestaurantsShowComponent.prototype.ngOnInit = function () {
    };
    RestaurantsShowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-restaurants-show',
            template: __webpack_require__(/*! ./restaurants-show.component.html */ "./src/app/layout/restaurants/restaurants-show/restaurants-show.component.html"),
            styles: [__webpack_require__(/*! ./restaurants-show.component.scss */ "./src/app/layout/restaurants/restaurants-show/restaurants-show.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RestaurantsShowComponent);
    return RestaurantsShowComponent;
}());



/***/ }),

/***/ "./src/app/layout/restaurants/restaurants-show/restaurants-show.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/restaurants/restaurants-show/restaurants-show.module.ts ***!
  \********************************************************************************/
/*! exports provided: RestaurantsShowModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsShowModule", function() { return RestaurantsShowModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _restaurants_show_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restaurants-show-routing.module */ "./src/app/layout/restaurants/restaurants-show/restaurants-show-routing.module.ts");
/* harmony import */ var _restaurants_show_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./restaurants-show.component */ "./src/app/layout/restaurants/restaurants-show/restaurants-show.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var RestaurantsShowModule = /** @class */ (function () {
    function RestaurantsShowModule() {
    }
    RestaurantsShowModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _restaurants_show_routing_module__WEBPACK_IMPORTED_MODULE_5__["RestaurantsShowRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"].forRoot()
            ],
            declarations: [_restaurants_show_component__WEBPACK_IMPORTED_MODULE_6__["RestaurantsShowComponent"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        })
    ], RestaurantsShowModule);
    return RestaurantsShowModule;
}());



/***/ })

}]);
//# sourceMappingURL=restaurants-restaurants-show-restaurants-show-module.js.map