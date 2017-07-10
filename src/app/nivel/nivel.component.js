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
var NivelComponent = (function () {
    function NivelComponent() {
        this.nivelBaril = 100.0;
        this.totalCopos = 1;
        this.capacidade = 30; //15 litros
        this.litros = 100;
        this.vazao = 0;
        this.tempo = 5;
        this.valorCopo = 0.5; //um copo === 500 ml
        this.myClass = 'water';
        this.isfull = false;
        this.isEmpty = true;
    }
    NivelComponent.prototype.ngOnInit = function () { };
    /**
     *  Regra de 3
     *  se 400 cm - 30L
     *      Xcm - 0,5L ??
     *  resposta = 13,33 cm
     *
     */
    NivelComponent.prototype.nivelCalcutations = function () {
    };
    NivelComponent.prototype.calcularVazao = function (quantidadeLitros, tempoEmSeg) {
        return quantidadeLitros / tempoEmSeg;
    };
    NivelComponent.prototype.esvaziar = function () {
        var _this = this;
        if (this.litros > 100) {
            this.isEmpty = true;
            this.isfull = false;
            this.vazao = 0;
            setTimeout(function () {
                setTimeout(function () {
                    _this.litros -= 100;
                    _this.nivelBaril -= 100;
                    _this.vazao += _this.calcularVazao(100, 60); //esvaziam-se 300 litros em 3 segundos
                    setTimeout(function () {
                        _this.litros -= 100;
                        _this.nivelBaril -= 100;
                        _this.vazao += _this.calcularVazao(100, 60); //esvaziam-se 300 litros em 3 segundos
                    }, 1000);
                }, 1000);
                _this.litros -= 100;
                _this.nivelBaril -= 100;
                _this.vazao += _this.calcularVazao(100, 60); //esvaziam-se 300 litros em 3 segundos
            }, 1000);
        }
        else {
            alert("O reservatório já está cheio!");
        }
    };
    NivelComponent.prototype.encher = function () {
        var _this = this;
        if (this.litros < 400) {
            this.isEmpty = false;
            this.isfull = true;
            this.vazao = 0;
            setTimeout(function () {
                setTimeout(function () {
                    _this.litros += 100;
                    _this.nivelBaril += 100;
                    _this.vazao += _this.calcularVazao(100, 60); //esvaziam-se 300 litros em 3 segundos
                    setTimeout(function () {
                        _this.litros += 100;
                        _this.nivelBaril += 100;
                        _this.vazao += _this.calcularVazao(100, 2 * 60); //esvaziam-se 300 litros em 3 segundos
                    }, 2000); //4 segundos para encher
                }, 1000);
                _this.litros += 100;
                _this.nivelBaril += 100;
                _this.vazao += _this.calcularVazao(100, 60); //esvaziam-se 300 litros em 3 segundos
            }, 1000);
        }
        else {
            alert("O reservatório já está cheio!");
        }
    };
    return NivelComponent;
}());
NivelComponent = __decorate([
    core_1.Component({
        selector: 'nivel',
        templateUrl: './nivel.component.html',
        styleUrls: ['./nivel.component.css']
    }),
    __metadata("design:paramtypes", [])
], NivelComponent);
exports.NivelComponent = NivelComponent;
//# sourceMappingURL=nivel.component.js.map