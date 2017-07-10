import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nivel',
    templateUrl: './nivel.component.html',
    styleUrls: ['./nivel.component.css']
})
export class NivelComponent implements OnInit {
    nivelBaril = 100.0;
    totalCopos:number = 1;
    capacidade = 30; //15 litros
    litros = 100; 
    vazao = 0;
    tempo = 5;
    valorCopo = 0.5; //um copo === 500 ml
    private myClass = 'water';
    isfull = false;
    isEmpty = true;
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
        

    }

    calcularVazao(quantidadeLitros:number,tempoEmSeg:number){
        return quantidadeLitros/tempoEmSeg;
    }

    esvaziar(){
       if(this.litros > 100){
                this.isEmpty = true;
                this.isfull = false;
                this.vazao = 0;
                setTimeout(()=>{
                    setTimeout(()=>{
                        this.litros -= 100;
                        this.nivelBaril -= 100;
                        this.vazao += this.calcularVazao(100,60); //esvaziam-se 300 litros em 3 segundos
                        setTimeout(()=>{
                            this.litros -= 100;
                            this.nivelBaril -= 100;
                            this.vazao += this.calcularVazao(100,60); //esvaziam-se 300 litros em 3 segundos
                        },1000)
                    },1000);
                    
                    this.litros -= 100;
                    this.nivelBaril -= 100;
                    this.vazao += this.calcularVazao(100,60); //esvaziam-se 300 litros em 3 segundos
                },1000);
                
            }else{
                alert("O reservatório já está cheio!");
            }
    }
    
    encher(){
     
            if(this.litros < 400){
                this.isEmpty = false;
                this.isfull = true;
                this.vazao = 0;
                setTimeout(()=>{
                    setTimeout(()=>{
                        this.litros += 100;
                        this.nivelBaril += 100;
                        this.vazao += this.calcularVazao(100,60); //esvaziam-se 300 litros em 3 segundos
                        setTimeout(()=>{
                            this.litros += 100;
                            this.nivelBaril += 100;
                            this.vazao += this.calcularVazao(100,2*60); //esvaziam-se 300 litros em 3 segundos
                        },2000); //4 segundos para encher
                    },1000);
                    
                    this.litros += 100;
                    this.nivelBaril += 100;
                    this.vazao += this.calcularVazao(100,60); //esvaziam-se 300 litros em 3 segundos
                },1000);
                
            }else{
                alert("O reservatório já está cheio!");
            }

      
       
       
        
    }
}