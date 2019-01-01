(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition, slideToRight, slideToLeft, slideToBottom, slideToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToRight", function() { return slideToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToLeft", function() { return slideToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToBottom", function() { return slideToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToTop", function() { return slideToTop; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function routerTransition() {
    return slideToTop();
}
function slideToRight() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ }),

/***/ "./src/app/services/ingredient-groups/ingredient-groups.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/ingredient-groups/ingredient-groups.service.ts ***!
  \*************************************************************************/
/*! exports provided: IngredientGroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientGroupsService", function() { return IngredientGroupsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IngredientGroupsService = /** @class */ (function () {
    function IngredientGroupsService(http) {
        this.http = http;
        this.endpoint = 'ingredient_groups';
    }
    IngredientGroupsService.prototype.getIngredientsGroups = function (access_token) {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint, { headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        });
    };
    IngredientGroupsService.prototype.addIngredientGroup = function (access_token, ingredient_group) {
        var data = {
            name: ingredient_group.name,
            number_options: ingredient_group.number_options
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    IngredientGroupsService.prototype.editIngredientGroup = function (access_token, ingredient_group, id) {
        var data = {
            name: ingredient_group.name,
            number_options: ingredient_group.number_options
        };
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint + '/' + id, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    IngredientGroupsService.prototype.deleteIngredientGroup = function (access_token, id) {
        return this.http.delete(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint + '/' + id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    IngredientGroupsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IngredientGroupsService);
    return IngredientGroupsService;
}());



/***/ }),

/***/ "./src/app/services/ingredients/ingredients.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/ingredients/ingredients.service.ts ***!
  \*************************************************************/
/*! exports provided: IngredientsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientsService", function() { return IngredientsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IngredientsService = /** @class */ (function () {
    function IngredientsService(http) {
        this.http = http;
        this.endpoint = 'ingredients';
    }
    IngredientsService.prototype.getIngredients = function (access_token) {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint, { headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        });
    };
    IngredientsService.prototype.addIngredient = function (access_token, ingredient) {
        var data = {
            name: ingredient.name,
            ingredient_group_id: ingredient.ingredient_group_id
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    IngredientsService.prototype.editIngredient = function (access_token, ingredient, id) {
        var data = {
            name: ingredient.name,
            ingredient_group_id: ingredient.ingredient_group_id
        };
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint + '/' + id, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    IngredientsService.prototype.deleteIngredient = function (access_token, id) {
        return this.http.delete(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint + '/' + id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    IngredientsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IngredientsService);
    return IngredientsService;
}());



/***/ }),

/***/ "./src/app/services/menus/menus.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/menus/menus.service.ts ***!
  \*************************************************/
/*! exports provided: MenusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusService", function() { return MenusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenusService = /** @class */ (function () {
    function MenusService(http) {
        this.http = http;
        this.endpoint = 'menus';
    }
    MenusService.prototype.getMenus = function (access_token) {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint, { headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        });
    };
    MenusService.prototype.getMenu = function (access_token, id) {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint + '/' + id, { headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        });
    };
    MenusService.prototype.addMenu = function (access_token, menu) {
        var data = {
            description: menu.description,
            observation: menu.observation,
            date: menu.date,
            fixed_menu: menu.fixed_menu,
            ingredients_ids: menu.ingredients_ids,
            prices_ids: menu.prices_ids
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    MenusService.prototype.editMenu = function (access_token, menu, id) {
        var data = {
            description: menu.description,
            observation: menu.observation,
            date: menu.date,
            fixed_menu: menu.fixed_menu,
            ingredients_ids: menu.ingredients_ids,
            prices_ids: menu.prices_ids
        };
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint + '/' + id, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    MenusService.prototype.deleteMenu = function (access_token, id) {
        return this.http.delete(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint + '/' + id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    MenusService.prototype.restoreMenu = function (access_token, id) {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint + '/restore/' + id, { headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        });
    };
    MenusService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MenusService);
    return MenusService;
}());



/***/ }),

/***/ "./src/app/services/restaurants/restaurants.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/restaurants/restaurants.service.ts ***!
  \*************************************************************/
/*! exports provided: RestaurantsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsService", function() { return RestaurantsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestaurantsService = /** @class */ (function () {
    function RestaurantsService(http) {
        this.http = http;
        this.endpoint = 'companies';
    }
    RestaurantsService.prototype.getRestaurants = function (access_token) {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        });
    };
    RestaurantsService.prototype.getRestaurant = function (access_token, id) {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint + '/' + id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        });
    };
    RestaurantsService.prototype.addRestaurant = function (access_token, restaurant) {
        var data = {
            image_base64: restaurant.image,
            social_name: restaurant.social_name,
            fantasy_name: restaurant.fantasy_name,
            cell_phone: restaurant.cell_phone,
            phone: restaurant.phone,
            responsible_name: restaurant.responsible_name,
            responsible_phone: restaurant.responsible_phone,
            user_id: restaurant.user_id,
            observation: restaurant.observation,
            cnpj: restaurant.cnpj,
            order_limit: restaurant.order_limit,
            tags_ids: restaurant.tags_ids,
            delivery_value: restaurant.delivery_value,
            avg_delivery_time: restaurant.avg_delivery_time
        };
        console.log(data.image_base64);
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            }
        });
    };
    RestaurantsService.prototype.editRestaurant = function (access_token, restaurant, id) {
        var data = {
            social_name: restaurant.social_name,
            fantasy_name: restaurant.fantasy_name,
            cell_phone: restaurant.cell_phone,
            responsible_name: restaurant.responsible_name,
            responsible_phone: restaurant.responsible_phone,
            user_id: restaurant.user_id,
            observation: restaurant.observation,
            image_base64: restaurant.image,
            order_limit: restaurant.order_limit,
            tags_ids: restaurant.tags_ids,
            delivery_value: restaurant.delivery_value,
            avg_delivery_time: restaurant.avg_delivery_time
        };
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint + '/' + id, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json',
            }
        });
    };
    RestaurantsService.prototype.deleteRestaurant = function (access_token, id) {
        return this.http.delete(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint + '/' + id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    RestaurantsService.prototype.restoreRestaurant = function (access_token, id) {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint + '/restore/' + id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        });
    };
    RestaurantsService.prototype.addLocation = function (access_token, location, restaurant) {
        var data = {
            city: location.city,
            state: location.state,
            address: location.address,
            number: location.number,
            district: location.district,
            postal_code: location.postal_code,
            observation: location.observation,
            company_id: restaurant.id
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + 'companies_locations', data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    RestaurantsService.prototype.getLocations = function (access_token, id) {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + 'companies_locations/company/' + id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    RestaurantsService.prototype.editLocation = function (access_token, location, restaurant, id) {
        var data = {
            city: location.city,
            state: location.state,
            address: location.address,
            number: location.number,
            district: location.district,
            postal_code: location.postal_code,
            observation: location.observation
        };
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + 'companies_locations/' + id, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    RestaurantsService.prototype.addWorkedDays = function (access_token, wdays, restaurant) {
        var data = {
            company_id: restaurant.id,
            sunday: wdays.sunday,
            monday: wdays.monday,
            tuesday: wdays.tuesday,
            wednesday: wdays.wednesday,
            thursday: wdays.thursday,
            friday: wdays.friday,
            saturday: wdays.saturday
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + 'worked_days', data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    RestaurantsService.prototype.editWorkedDays = function (access_token, wdays, restaurant, id) {
        var data = {
            company_id: restaurant.id,
            sunday: wdays.sunday,
            monday: wdays.monday,
            tuesday: wdays.tuesday,
            wednesday: wdays.wednesday,
            thursday: wdays.thursday,
            friday: wdays.friday,
            saturday: wdays.saturday
        };
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + 'worked_days/' + id, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    RestaurantsService.prototype.addServiceHours = function (access_token, service_hours, restaurant) {
        var data = {
            company_id: restaurant.id,
            opening: service_hours.opening,
            closure: service_hours.closure
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + 'service_hours', data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    RestaurantsService.prototype.destroyServiceHours = function (access_token, restaurant) {
        return this.http.delete(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + 'service_hours/company/' + restaurant.id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    RestaurantsService.prototype.editServiceHours = function (access_token, service_hours, restaurant, id) {
        var data = {
            company_id: restaurant.id,
            opening: service_hours.opening,
            closure: service_hours.closure
        };
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + 'service_hours/' + id, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    RestaurantsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RestaurantsService);
    return RestaurantsService;
}());



/***/ }),

/***/ "./src/app/services/sizes/sizes.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/sizes/sizes.service.ts ***!
  \*************************************************/
/*! exports provided: SizesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizesService", function() { return SizesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SizesService = /** @class */ (function () {
    function SizesService(http) {
        this.http = http;
        this.endpoint = 'prices';
    }
    SizesService.prototype.getSizes = function (access_token) {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint, { headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        });
    };
    SizesService.prototype.addSize = function (access_token, size) {
        var data = {
            size: size.size,
            price: size.price
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    SizesService.prototype.editSize = function (access_token, size, id) {
        var data = {
            size: size.size,
            price: size.price
        };
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint + '/' + id, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    SizesService.prototype.deleteSize = function (access_token, id) {
        return this.http.delete(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint + '/' + id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    SizesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SizesService);
    return SizesService;
}());



/***/ }),

/***/ "./src/app/services/tags/tags.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/tags/tags.service.ts ***!
  \***********************************************/
/*! exports provided: TagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return TagsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TagsService = /** @class */ (function () {
    function TagsService(http) {
        this.http = http;
        this.endpoint = 'tags';
    }
    TagsService.prototype.getTags = function (access_token) {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        });
    };
    TagsService.prototype.addTag = function (access_token, tag) {
        var data = {
            name: tag
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    TagsService.prototype.editTag = function (access_token, tag, id) {
        var data = {
            name: tag
        };
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint + '/' + id, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    TagsService.prototype.deleteTag = function (access_token, id) {
        return this.http.delete(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + this.endpoint + '/' + id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    TagsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TagsService);
    return TagsService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map