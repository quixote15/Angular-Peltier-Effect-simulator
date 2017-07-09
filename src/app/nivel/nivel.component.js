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
        this.nivelBaril = 400.0;
        this.totalCopos = 1;
        this.capacidade = 30; //15 litros
        this.litros = 30;
        this.vazao = 0;
        this.tempo = 5;
        this.valorCopo = 0.5; //um copo === 500 ml
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
        var subCm = 6.7;
        console.log(this.totalCopos);
        if (this.totalCopos * subCm < this.nivelBaril) {
            this.nivelBaril = this.nivelBaril - (this.totalCopos * subCm);
            this.litros = this.litros - (this.valorCopo * this.totalCopos);
            this.vazao = (this.valorCopo * this.totalCopos) / this.totalCopos * 5; //Total de 
        }
    };
    return NivelComponent;
}());
NivelComponent = __decorate([
    core_1.Component({
        selector: 'nivel',
        templateUrl: './nivel.component.html',
    }),
    __metadata("design:paramtypes", [])
], NivelComponent);
exports.NivelComponent = NivelComponent;
//# sourceMappingURL=nivel.component.js.map