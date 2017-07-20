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
var data_service_1 = require("../services/data.service");
var Rx_1 = require("rxjs/Rx");
var TempComponent = (function () {
    function TempComponent(dataservice) {
        this.dataservice = dataservice;
        this.twoImage = '../app/temperatura/imagens/two.png';
        this.beerImage = '../app/temperatura/imagens/beer.png';
        this.tempImage = '../app/temperatura/imagens/temperature.png';
        this.Correntes = [5.0, 4.6, 5.4];
        this.temperatura = { id: 1, temperatura: "6.7", corrente: "2.4" };
        this.tempArray = [0, 0];
        this.temperaturaAmbiente = { id: 1, temperatura: "30.9", corrente: "2.4" };
        this.isFreezing = true;
        this.id = 1;
        this.termoMessage = "Refrigerador Peltir está ligado e a temperatura irá variar entre -7 e -6 graus aproximadamente.";
        this.buttonMessage = "Desligar Refrigerador peltier";
    }
    TempComponent.prototype.ngOnInit = function () {
        var _this = this;
        var timer = Rx_1.Observable.timer(2000, 1500);
        this.dataservice.getHello();
        timer.subscribe(function (t) {
            _this.getTemperatura(t);
        });
    };
    TempComponent.prototype.getTemperatures = function () {
        var _this = this;
        this.dataservice.getTemperatures().then(function (temps) {
            _this.temperaturas = temps;
        });
    };
    TempComponent.prototype.getTemperatura = function (tick) {
        var _this = this;
        this.dataservice.getTemperatura(this.id, this.isFreezing).then(function (temp) {
            _this.temperatura = temp;
            _this.temperaturaAmbiente.temperatura = "3" + (_this.temperatura.temperatura);
            console.log("Got a temperature " + _this.temperatura.temperatura + "°C");
        });
        this.id = (this.id + 1) % 100;
    };
    TempComponent.prototype.toggle = function () {
        this.isFreezing = this.isFreezing === true ? false : true;
        this.termoMessage = this.isFreezing === true ?
            "Refrigerador Peltir está ligado e a temperatura irá variar entre -7 e -6 graus aproximadamente."
            : "Refrigerador Peltir está desligado e a temperatura irá variar entre -6 e -5 graus aproximadamente.";
        this.buttonMessage = this.isFreezing === true ? "Desligar Refrigerador Peltier" : "Ligar Refrigerador Peltier";
    };
    TempComponent.prototype.currentChange = function (corrente) {
        //alert("Evento " + corrente);
        this.dataservice.getTempByAmpere("1")
            .then(function (temp) {
            alert("Temperatura: " + temp);
        });
    };
    return TempComponent;
}());
TempComponent = __decorate([
    core_1.Component({
        selector: 'temperatura',
        templateUrl: './temperatura.component.html',
        styleUrls: ['./temp.comp.css']
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], TempComponent);
exports.TempComponent = TempComponent;
//# sourceMappingURL=temperatura.component.js.map