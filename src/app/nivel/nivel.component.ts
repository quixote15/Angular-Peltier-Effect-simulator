import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nivel',
    templateUrl: './nivel.component.html',
    styleUrls: ['./nivel.component.css']
})
export class NivelComponent implements OnInit {
    nivelBaril = 400.0;
    totalCopos:number = 1;
    capacidade = 30; //15 litros
    litros = 30; 
    vazao = 0;
    tempo = 5;
    valorCopo = 0.5; //um copo === 500 ml
    private myClass = 'water';
    constructor() { }

    ngOnInit() { }


    /**
     *  Regra de 3
     *  se 400 cm - 30L
     *      Xcm - 0,5L ??
     *  resposta = 13,33 cm
     * 
     */

    nivelCalcutations(){
        let subCm = 6.7;
        console.log(this.totalCopos);
        if(this.totalCopos*subCm < this.nivelBaril){
            this.nivelBaril = this.nivelBaril - (this.totalCopos*subCm);
            this.litros = this.litros - (this.valorCopo*this.totalCopos);
            this.vazao = (this.valorCopo*this.totalCopos)/ this.totalCopos * 5; //Total de 
        }
            

    }
}