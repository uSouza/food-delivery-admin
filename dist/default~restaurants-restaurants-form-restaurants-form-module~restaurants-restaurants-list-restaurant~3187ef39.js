(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~restaurants-restaurants-form-restaurants-form-module~restaurants-restaurants-list-restaurant~3187ef39"],{

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
        this.endpoint = 'api/v1/companies';
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
            address: location.address,
            number: location.number,
            district_id: location.district,
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
    RestaurantsService.prototype.getCities = function (access_token) {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + 'cities', {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        });
    };
    RestaurantsService.prototype.getDistricts = function (access_token, city_id) {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + 'districts/city/' + city_id, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        });
    };
    RestaurantsService.prototype.editLocation = function (access_token, location, restaurant, id) {
        var data = {
            address: location.address,
            number: location.number,
            district_id: location.district,
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
    RestaurantsService.prototype.addFreights = function (access_token, freight) {
        var data = {
            company_id: freight.company_id,
            district_id: freight.district_id,
            value: freight.value
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + 'freights', data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        });
    };
    RestaurantsService.prototype.destroyFreights = function (access_token, restaurant) {
        return this.http.delete(_config__WEBPACK_IMPORTED_MODULE_1__["url_api"] + 'freights/company/' + restaurant.id, {
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



/***/ })

}]);
//# sourceMappingURL=default~restaurants-restaurants-form-restaurants-form-module~restaurants-restaurants-list-restaurant~3187ef39.js.map