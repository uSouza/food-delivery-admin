(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ingredients-ingredients-module"],{

/***/ "./src/app/layout/ingredients/ingredients-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/ingredients/ingredients-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: IngredientsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientsRoutingModule", function() { return IngredientsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ingredients_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ingredients.component */ "./src/app/layout/ingredients/ingredients.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _ingredients_component__WEBPACK_IMPORTED_MODULE_2__["IngredientsComponent"]
    }
];
var IngredientsRoutingModule = /** @class */ (function () {
    function IngredientsRoutingModule() {
    }
    IngredientsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], IngredientsRoutingModule);
    return IngredientsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/ingredients/ingredients.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/ingredients/ingredients.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Exclusão de ingrediente</h4>\n    </div>\n    <div class=\"modal-body\">\n        <p>Tem certeza de que deseja excluir o ingrediente?</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('dismiss')\">Não</button>\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('delete')\">Sim</button>\n    </div>\n</ng-template>\n\n<div class=\"row\">\n    <div class=\"col-lg-3\">\n    </div>\n    <div class=\"col-lg-6\">\n        <h3>Gerenciamento de Ingredientes</h3>\n        <hr>\n        <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n        <form role=\"form\">\n            <div class=\"row\">\n                <div class=\"col-lg-7\">\n                    <div class=\"form-group\">\n                        <label>Nome</label>\n                        <input [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" type=\"text\">\n                    </div>\n                </div>\n                <div class=\"col-lg-5\">\n                    <div class=\"form-group\">\n                        <label>Grupo</label>\n                        <select class=\"form-control\" [(ngModel)]=\"ingredient_group_id\" name=\"ingredient_group_id\">\n                            <option *ngFor=\"let i of ingredients_groups\" [ngValue]=\"i.id\">{{i.name}}</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"row\">\n                    <div class=\"col-xl-12 text-right\">\n                        <button type=\"button\" class=\"btn btn btn-success\" (click)=\"addIngredient()\">Adicionar</button>\n                    </div>\n                </div>\n            </div>\n        </form>\n        <hr>\n        <table *ngIf=\"ingredients.length > 0\" class=\"card-body table\">\n            <thead>\n               <tr>\n                  <th>Nome</th>\n                  <th>Grupo</th>\n                  <th>Ações</th>\n               </tr>\n            </thead>\n            <tbody *ngFor=\"let ingredient of ingredients  | paginate: { itemsPerPage: 4, currentPage: page }\">\n               <tr class=\"table-default\">\n                  <td>{{ingredient.name}}</td>\n                  <td>{{ingredient.ingredient_group.name}}</td>\n                  <td>\n                     <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"editIngredient(ingredient)\">Editar</button>\n                     <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"deleteIngredient(content, ingredient)\">Deletar</button>\n                  </td>\n               </tr>\n            </tbody>\n         </table>\n         <div class=\"has-text-centered\">\n            <pagination-controls (pageChange)=\"page = $event\" previousLabel=\"Anterior\" nextLabel=\"Próximo\"></pagination-controls>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/ingredients/ingredients.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/ingredients/ingredients.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin-top: 20px; }\n\n.btn-sm {\n  margin-left: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/ingredients/ingredients.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/ingredients/ingredients.component.ts ***!
  \*************************************************************/
/*! exports provided: IngredientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientsComponent", function() { return IngredientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ingredient_groups_ingredient_groups_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ingredient-groups/ingredient-groups.service */ "./src/app/services/ingredient-groups/ingredient-groups.service.ts");
/* harmony import */ var _services_ingredients_ingredients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ingredients/ingredients.service */ "./src/app/services/ingredients/ingredients.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IngredientsComponent = /** @class */ (function () {
    function IngredientsComponent(route, router, ingredientGroupService, ingredientsService, modalService) {
        this.route = route;
        this.router = router;
        this.ingredientGroupService = ingredientGroupService;
        this.ingredientsService = ingredientsService;
        this.modalService = modalService;
        this.alerts = [];
        this.name = null;
        this.ingredient_group_id = null;
        this.ingredient_edit = null;
        this.ingredients_groups = [];
        this.ingredients = [];
        this.page = 1;
    }
    IngredientsComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('access_token') != null) {
            this.load();
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    IngredientsComponent.prototype.load = function () {
        var _this = this;
        this.name = '';
        this.ingredient_group_id = -1;
        this.ingredientGroupService
            .getIngredientsGroups(localStorage.getItem('access_token'))
            .subscribe(function (ingredients_groups) {
            _this.ingredients_groups = ingredients_groups;
        });
        this.ingredientsService
            .getIngredients(localStorage.getItem('access_token'))
            .subscribe(function (ingredients) {
            _this.ingredients = ingredients;
        });
    };
    IngredientsComponent.prototype.addIngredient = function () {
        var _this = this;
        if (this.validate()) {
            var ingredient = {
                name: this.name,
                ingredient_group_id: this.ingredient_group_id
            };
            if (this.ingredient_edit == null) {
                this.ingredientsService
                    .addIngredient(localStorage.getItem('access_token'), ingredient)
                    .subscribe(function (ingredient) {
                    _this.updateIngredients(ingredient, false);
                });
            }
            else {
                this.ingredientsService
                    .editIngredient(localStorage.getItem('access_token'), ingredient, this.ingredient_edit.id)
                    .subscribe(function (ingredient) {
                    _this.updateIngredients(ingredient, true);
                });
            }
        }
    };
    IngredientsComponent.prototype.updateIngredients = function (ingredient, edit) {
        this.name = null;
        this.ingredient_group_id = null;
        this.load();
        console.log(ingredient);
        if (edit) {
            this.showAlert('success', 'Grupo de ingrediente atualizado com sucesso!');
            var index = this.ingredients.indexOf(this.ingredient_edit);
            this.ingredients.splice(index, 1);
            this.ingredient_edit = null;
        }
        else {
            this.showAlert('success', 'Grupo de ingrediente adicionado com sucesso!');
        }
    };
    IngredientsComponent.prototype.validate = function () {
        if (this.name == null) {
            this.showAlert('danger', 'Informe o nome do ingrediente!');
            return false;
        }
        else if (this.ingredient_group_id == null) {
            this.showAlert('danger', 'Informe o grupo do ingrediente!');
            return false;
        }
        else {
            return true;
        }
    };
    IngredientsComponent.prototype.showAlert = function (type, err) {
        this.alerts.push({
            id: 1,
            type: type,
            message: err
        });
    };
    IngredientsComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    IngredientsComponent.prototype.editIngredient = function (ingredient) {
        this.name = ingredient.name;
        this.ingredient_group_id = ingredient.ingredient_group_id;
        this.ingredient_edit = ingredient;
    };
    IngredientsComponent.prototype.deleteIngredient = function (content, ingredient) {
        var _this = this;
        this.modalService
            .open(content, { size: 'lg' })
            .result.then(function (result) {
            if (result == 'delete') {
                _this.ingredientsService
                    .deleteIngredient(localStorage.getItem('access_token'), ingredient.id)
                    .subscribe(function (res) {
                    _this.load();
                });
            }
        });
    };
    IngredientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ingredients',
            template: __webpack_require__(/*! ./ingredients.component.html */ "./src/app/layout/ingredients/ingredients.component.html"),
            styles: [__webpack_require__(/*! ./ingredients.component.scss */ "./src/app/layout/ingredients/ingredients.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_ingredient_groups_ingredient_groups_service__WEBPACK_IMPORTED_MODULE_1__["IngredientGroupsService"],
            _services_ingredients_ingredients_service__WEBPACK_IMPORTED_MODULE_2__["IngredientsService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], IngredientsComponent);
    return IngredientsComponent;
}());



/***/ }),

/***/ "./src/app/layout/ingredients/ingredients.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/ingredients/ingredients.module.ts ***!
  \**********************************************************/
/*! exports provided: IngredientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientsModule", function() { return IngredientsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _ingredients_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ingredients-routing.module */ "./src/app/layout/ingredients/ingredients-routing.module.ts");
/* harmony import */ var _ingredients_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ingredients.component */ "./src/app/layout/ingredients/ingredients.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var IngredientsModule = /** @class */ (function () {
    function IngredientsModule() {
    }
    IngredientsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ingredients_routing_module__WEBPACK_IMPORTED_MODULE_5__["IngredientsRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"].forRoot(),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"]
            ],
            declarations: [_ingredients_component__WEBPACK_IMPORTED_MODULE_6__["IngredientsComponent"]]
        })
    ], IngredientsModule);
    return IngredientsModule;
}());



/***/ })

}]);
//# sourceMappingURL=ingredients-ingredients-module.js.map