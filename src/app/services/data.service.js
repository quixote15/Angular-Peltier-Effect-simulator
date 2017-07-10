"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var sensor_test_1 = require("../sensor-test");
require("rxjs/add/operator/toPromise");
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.temperaturesUrl = 'api/temperaturas';
        this.OnUrl = 'api/peltierOn/';
        this.OffUrl = 'api/peltierOff/';
        this.ampereUrl = 'api/correntes';
    }
    DataService.prototype.getTemperatures = function () {
        var temperatures = sensor_test_1.createTestTemperature();
        return this.http.get(this.temperaturesUrl)
            .toPromise()
            .then(function (response) {
            var temps = response.json().data; //cast json data into temp objects
            console.log("Got " + temperatures.length + " temperaturas");
            return temps;
        }, function (error) {
            console.log("Ocorreu um erro no carregamento");
            return Promise.reject(""); //alguma mensagem de eerro
        });
        /* new Promise<Temperatura[]>(resolve =>{
            setTimeout(() => {
                
                resolve(temperatures);
            },1500);
        });*/
    };
    DataService.prototype.getTemperatura = function (id, isOn) {
        var url = isOn ? this.OnUrl : this.OffUrl;
        return this.http.get(url + id)
            .toPromise()
            .then(function (response) {
            var temp = response.json().data;
            return temp;
        });
    };
    DataService.prototype.getTempByAmpere = function (ampere) {
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map