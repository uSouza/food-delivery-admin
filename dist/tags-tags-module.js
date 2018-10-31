(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tags-tags-module"],{

/***/ "./src/app/layout/tags/tags-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/tags/tags-routing.module.ts ***!
  \****************************************************/
/*! exports provided: TagsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsRoutingModule", function() { return TagsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tags_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tags.component */ "./src/app/layout/tags/tags.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _tags_component__WEBPACK_IMPORTED_MODULE_2__["TagsComponent"]
    }
];
var TagsRoutingModule = /** @class */ (function () {
    function TagsRoutingModule() {
    }
    TagsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TagsRoutingModule);
    return TagsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/tags/tags.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/tags/tags.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Exclusão de Tag</h4>\n        </div>\n        <div class=\"modal-body\">\n            <p>Tem certeza de que deseja excluir a tag?</p>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-light\" (click)=\"c('dismiss')\">Não</button>\n            <button type=\"button\" class=\"btn btn-light\" (click)=\"c('delete')\">Sim</button>\n        </div>\n    </ng-template>\n\n    <div class=\"row\">\n        <div class=\"col-lg-3\">\n        </div>\n        <div class=\"col-lg-6\">\n            <h3>Gerenciamento de Tags</h3>\n            <hr>\n            <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n            <form role=\"form\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"form-group\">\n                            <label>Nome da Tag</label>\n                            <input [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" type=\"text\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"row\">\n                        <div class=\"col-xl-12 text-right\">\n                            <button type=\"button\" class=\"btn btn btn-success\" (click)=\"addTag()\">Adicionar</button>\n                        </div>\n                    </div>\n                </div>\n            </form>\n            <table *ngIf=\"tags.length > 0\" class=\"card-body table\">\n                <thead>\n                   <tr>\n                      <th>Nome</th>\n                      <th>Ações</th>\n                   </tr>\n                </thead>\n                <tbody *ngFor=\"let tag of tags  | paginate: { itemsPerPage: 4, currentPage: page }\">\n                   <tr class=\"table-default\">\n                      <td>{{tag.name}}</td>\n                      <td>\n                         <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"editTag(tag)\">Editar</button>\n                         <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"deleteTag(content, tag)\">Deletar</button>\n                      </td>\n                   </tr>\n                </tbody>\n             </table>\n             <div class=\"has-text-centered\">\n                <pagination-controls (pageChange)=\"page = $event\" previousLabel=\"Anterior\" nextLabel=\"Próximo\"></pagination-controls>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/layout/tags/tags.component.scss":
/*!*************************************************!*\
  !*** ./src/app/layout/tags/tags.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin-top: 20px; }\n\n.btn-sm {\n  margin-left: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/tags/tags.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/tags/tags.component.ts ***!
  \***********************************************/
/*! exports provided: TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tags_tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tags/tags.service */ "./src/app/services/tags/tags.service.ts");
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





var TagsComponent = /** @class */ (function () {
    function TagsComponent(route, router, tagsService, modalService) {
        this.route = route;
        this.router = router;
        this.tagsService = tagsService;
        this.modalService = modalService;
        this.alerts = [];
        this.name = null;
        this.tag_edit = null;
        this.tags = [];
        this.page = 1;
    }
    TagsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('access_token') != null) {
            this.tagsService
                .getTags(localStorage.getItem('access_token'))
                .subscribe(function (tags) {
                _this.tags = tags;
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    TagsComponent.prototype.addTag = function () {
        var _this = this;
        if (this.validate()) {
            if (this.tag_edit == null) {
                this.tagsService
                    .addTag(localStorage.getItem('access_token'), this.name)
                    .subscribe(function (tag) {
                    _this.updateTags(tag, false);
                });
            }
            else {
                this.tagsService
                    .editTag(localStorage.getItem('access_token'), this.name, this.tag_edit.id)
                    .subscribe(function (tag) {
                    _this.updateTags(tag, true);
                });
            }
        }
    };
    TagsComponent.prototype.updateTags = function (tag, edit) {
        this.name = null;
        this.tags.push(tag);
        if (edit) {
            this.showAlert('success', 'Tag atualizada com sucesso!');
            var index = this.tags.indexOf(this.tag_edit);
            this.tags.splice(index, 1);
            this.tag_edit = null;
        }
        else {
            this.showAlert('success', 'Tag cadastrada com sucesso!');
        }
    };
    TagsComponent.prototype.validate = function () {
        if (this.name == null) {
            this.showAlert('danger', 'Informe o nome da Tag!');
            return false;
        }
        else {
            return true;
        }
    };
    TagsComponent.prototype.showAlert = function (type, err) {
        this.alerts.push({
            id: 1,
            type: type,
            message: err
        });
    };
    TagsComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    TagsComponent.prototype.editTag = function (tag) {
        this.name = tag.name;
        this.tag_edit = tag;
    };
    TagsComponent.prototype.deleteTag = function (content, tag) {
        var _this = this;
        this.modalService
            .open(content, { size: 'lg' })
            .result.then(function (result) {
            if (result == 'delete') {
                var index = _this.tags.indexOf(tag);
                _this.tags.splice(index, 1);
                _this.tagsService
                    .deleteTag(localStorage.getItem('access_token'), tag.id)
                    .subscribe(function (res) {
                    console.log(res);
                });
            }
        });
    };
    TagsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tags',
            template: __webpack_require__(/*! ./tags.component.html */ "./src/app/layout/tags/tags.component.html"),
            styles: [__webpack_require__(/*! ./tags.component.scss */ "./src/app/layout/tags/tags.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_tags_tags_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], TagsComponent);
    return TagsComponent;
}());



/***/ }),

/***/ "./src/app/layout/tags/tags.module.ts":
/*!********************************************!*\
  !*** ./src/app/layout/tags/tags.module.ts ***!
  \********************************************/
/*! exports provided: TagsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsModule", function() { return TagsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _tags_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tags-routing.module */ "./src/app/layout/tags/tags-routing.module.ts");
/* harmony import */ var _tags_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tags.component */ "./src/app/layout/tags/tags.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var TagsModule = /** @class */ (function () {
    function TagsModule() {
    }
    TagsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _tags_routing_module__WEBPACK_IMPORTED_MODULE_5__["TagsRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"].forRoot()
            ],
            declarations: [_tags_component__WEBPACK_IMPORTED_MODULE_6__["TagsComponent"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        })
    ], TagsModule);
    return TagsModule;
}());



/***/ })

}]);
//# sourceMappingURL=tags-tags-module.js.map