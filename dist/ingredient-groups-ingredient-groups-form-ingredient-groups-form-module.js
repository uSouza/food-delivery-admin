(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ingredient-groups-ingredient-groups-form-ingredient-groups-form-module"],{

/***/ "./src/app/layout/ingredient-groups/ingredient-groups-form/ingredient-groups-form-routing.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/layout/ingredient-groups/ingredient-groups-form/ingredient-groups-form-routing.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: IngredientGroupsFormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientGroupsFormRoutingModule", function() { return IngredientGroupsFormRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ingredient_groups_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ingredient-groups-form.component */ "./src/app/layout/ingredient-groups/ingredient-groups-form/ingredient-groups-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _ingredient_groups_form_component__WEBPACK_IMPORTED_MODULE_2__["IngredientGroupsFormComponent"]
    }
];
var IngredientGroupsFormRoutingModule = /** @class */ (function () {
    function IngredientGroupsFormRoutingModule() {
    }
    IngredientGroupsFormRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], IngredientGroupsFormRoutingModule);
    return IngredientGroupsFormRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/ingredient-groups/ingredient-groups-form/ingredient-groups-form.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/ingredient-groups/ingredient-groups-form/ingredient-groups-form.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Exclusão de grupo</h4>\n    </div>\n    <div class=\"modal-body\">\n        <p>Tem certeza de que deseja excluir o grupo de ingrediente?</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('dismiss')\">Não</button>\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('delete')\">Sim</button>\n    </div>\n</ng-template>\n\n<div class=\"row\">\n    <div class=\"col-lg-3\">\n    </div>\n    <div class=\"col-lg-6\">\n        <h3>Gerenciamento de grupo de ingrediente</h3>\n        <hr>\n        <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n        <form role=\"form\">\n            <div class=\"row\">\n                <div class=\"col-lg-7\">\n                    <div class=\"form-group\">\n                        <label>Nome do grupo</label>\n                        <input [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" type=\"text\">\n                    </div>\n                </div>\n                <div class=\"col-lg-5\">\n                    <div class=\"form-group\">\n                        <label>Qtd. opções do grupo</label>\n                        <input [(ngModel)]=\"number_options\" name=\"number_options\" class=\"form-control\" type=\"number\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"row\">\n                    <div class=\"col-xl-12 text-right\">\n                        <button type=\"button\" class=\"btn btn btn-success\" (click)=\"addIngredientGroup()\">Adicionar</button>\n                    </div>\n                </div>\n            </div>\n        </form>\n        <hr>\n        <table *ngIf=\"ingredients_groups.length > 0\" class=\"card-body table\">\n            <thead>\n               <tr>\n                  <th>Nome</th>\n                  <th>Qtd. de opções</th>\n                  <th>Ações</th>\n               </tr>\n            </thead>\n            <tbody *ngFor=\"let ingredient_group of ingredients_groups  | paginate: { itemsPerPage: 4, currentPage: page }\">\n               <tr class=\"table-default\">\n                  <td>{{ingredient_group.name}}</td>\n                  <td>{{ingredient_group.number_options}}</td>\n                  <td>\n                     <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"editIngredientGroup(ingredient_group)\">Editar</button>\n                     <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"deleteIngredientGroup(content, ingredient_group)\">Deletar</button>\n                  </td>\n               </tr>\n            </tbody>\n         </table>\n         <div class=\"has-text-centered\">\n            <pagination-controls (pageChange)=\"page = $event\" previousLabel=\"Anterior\" nextLabel=\"Próximo\"></pagination-controls>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/ingredient-groups/ingredient-groups-form/ingredient-groups-form.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/ingredient-groups/ingredient-groups-form/ingredient-groups-form.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin-top: 20px; }\n\n.btn-sm {\n  margin-left: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/ingredient-groups/ingredient-groups-form/ingredient-groups-form.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/ingredient-groups/ingredient-groups-form/ingredient-groups-form.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: IngredientGroupsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientGroupsFormComponent", function() { return IngredientGroupsFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ingredient_groups_ingredient_groups_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/ingredient-groups/ingredient-groups.service */ "./src/app/services/ingredient-groups/ingredient-groups.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var IngredientGroupsFormComponent = /** @class */ (function () {
    function IngredientGroupsFormComponent(route, router, ingredientGroupService, modalService) {
        this.route = route;
        this.router = router;
        this.ingredientGroupService = ingredientGroupService;
        this.modalService = modalService;
        this.alerts = [];
        this.name = null;
        this.ingredient_group_edit = null;
        this.number_options = null;
        this.ingredients_groups = [];
        this.page = 1;
    }
    IngredientGroupsFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('access_token') != null) {
            this.ingredientGroupService
                .getIngredientsGroups(localStorage.getItem('access_token'))
                .subscribe(function (ingredients_groups) {
                _this.ingredients_groups = ingredients_groups;
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    IngredientGroupsFormComponent.prototype.addIngredientGroup = function () {
        var _this = this;
        if (this.validate()) {
            var ingredient_group = {
                name: this.name,
                number_options: this.number_options
            };
            if (this.ingredient_group_edit == null) {
                this.ingredientGroupService
                    .addIngredientGroup(localStorage.getItem('access_token'), ingredient_group)
                    .subscribe(function (ingredient_group) {
                    _this.updateIngredientGroups(ingredient_group, false);
                });
            }
            else {
                this.ingredientGroupService
                    .editIngredientGroup(localStorage.getItem('access_token'), ingredient_group, this.ingredient_group_edit.id)
                    .subscribe(function (ingredient_group) {
                    _this.updateIngredientGroups(ingredient_group, true);
                });
            }
        }
    };
    IngredientGroupsFormComponent.prototype.updateIngredientGroups = function (ingredient_group, edit) {
        this.name = null;
        this.number_options = null;
        this.ingredients_groups.push(ingredient_group);
        if (edit) {
            this.showAlert('success', 'Grupo de ingrediente atualizado com sucesso!');
            var index = this.ingredients_groups.indexOf(this.ingredient_group_edit);
            this.ingredients_groups.splice(index, 1);
            this.ingredient_group_edit = null;
        }
        else {
            this.showAlert('success', 'Grupo de ingrediente adicionado com sucesso!');
        }
    };
    IngredientGroupsFormComponent.prototype.validate = function () {
        if (this.name == null) {
            this.showAlert('danger', 'Informe o nome do grupo de ingrediente!');
            return false;
        }
        else if (this.number_options == null) {
            this.showAlert('danger', 'Informe o número de opções para o grupo de ingrediente!');
            return false;
        }
        else if (this.number_options <= 0) {
            this.showAlert('danger', 'O número de opções não deve ser menor ou igual a zero!');
            return false;
        }
        else {
            return true;
        }
    };
    IngredientGroupsFormComponent.prototype.showAlert = function (type, err) {
        this.alerts.push({
            id: 1,
            type: type,
            message: err
        });
    };
    IngredientGroupsFormComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    IngredientGroupsFormComponent.prototype.editIngredientGroup = function (ingredient_group) {
        this.name = ingredient_group.name;
        this.number_options = ingredient_group.number_options;
        this.ingredient_group_edit = ingredient_group;
    };
    IngredientGroupsFormComponent.prototype.deleteIngredientGroup = function (content, ingredient_group) {
        var _this = this;
        this.modalService
            .open(content, { size: 'lg' })
            .result.then(function (result) {
            if (result == 'delete') {
                var index = _this.ingredients_groups.indexOf(ingredient_group);
                _this.ingredients_groups.splice(index, 1);
                _this.ingredientGroupService
                    .deleteIngredientGroup(localStorage.getItem('access_token'), ingredient_group.id)
                    .subscribe(function (res) {
                    console.log(res);
                });
            }
        });
    };
    IngredientGroupsFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ingredient-groups-form',
            template: __webpack_require__(/*! ./ingredient-groups-form.component.html */ "./src/app/layout/ingredient-groups/ingredient-groups-form/ingredient-groups-form.component.html"),
            styles: [__webpack_require__(/*! ./ingredient-groups-form.component.scss */ "./src/app/layout/ingredient-groups/ingredient-groups-form/ingredient-groups-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_ingredient_groups_ingredient_groups_service__WEBPACK_IMPORTED_MODULE_1__["IngredientGroupsService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], IngredientGroupsFormComponent);
    return IngredientGroupsFormComponent;
}());



/***/ }),

/***/ "./src/app/layout/ingredient-groups/ingredient-groups-form/ingredient-groups-form.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/ingredient-groups/ingredient-groups-form/ingredient-groups-form.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: IngredientGroupsFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientGroupsFormModule", function() { return IngredientGroupsFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _ingredient_groups_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ingredient-groups-form-routing.module */ "./src/app/layout/ingredient-groups/ingredient-groups-form/ingredient-groups-form-routing.module.ts");
/* harmony import */ var _ingredient_groups_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ingredient-groups-form.component */ "./src/app/layout/ingredient-groups/ingredient-groups-form/ingredient-groups-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var IngredientGroupsFormModule = /** @class */ (function () {
    function IngredientGroupsFormModule() {
    }
    IngredientGroupsFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ingredient_groups_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["IngredientGroupsFormRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"].forRoot(),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"]
            ],
            declarations: [_ingredient_groups_form_component__WEBPACK_IMPORTED_MODULE_6__["IngredientGroupsFormComponent"]]
        })
    ], IngredientGroupsFormModule);
    return IngredientGroupsFormModule;
}());



/***/ })

}]);
//# sourceMappingURL=ingredient-groups-ingredient-groups-form-ingredient-groups-form-module.js.map