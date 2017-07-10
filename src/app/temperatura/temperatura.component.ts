import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Temperatura } from '../model';

import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'temperatura',
    templateUrl: './temperatura.component.html',
    styleUrls: ['./temp.comp.css']
})
export class TempComponent implements OnInit {
    twoImage = '../app/temperatura/imagens/two.png';
    beerImage = '../app/temperatura/imagens/beer.png';
    tempImage = '../app/temperatura/imagens/temperature.png';
    Correntes = [5.0, 4.6, 5.4];
    temperatura: Temperatura = { id: 1, temperatura: "6.7", corrente: "2.4" };
    tempArray = [0, 0];
    temperaturas: Temperatura[];
    temperaturaAmbiente: Temperatura = { id: 1, temperatura: "30.9", corrente: "2.4" };
    isFreezing = true;
    id = 1;
    tick: string;
    termoMessage = "Refrigerador Peltir está ligado e a temperatura irá variar entre -7 e -6 graus aproximadamente."
    buttonMessage = "Desligar Refrigerador peltier";
    constructor(private dataservice: DataService) { }


    ngOnInit() {
        let timer = Observable.timer(2000, 1500);
        timer.subscribe(t => {
            this.getTemperatura(t);

        }

        );


    }

    getTemperatures() {

        this.dataservice.getTemperatures().then(
            temps => {
                this.temperaturas = temps;
            });
    }


    getTemperatura(tick: number) {

        this.dataservice.getTemperatura(this.id, this.isFreezing).then(
            temp => {
                this.temperatura = temp;
                this.temperaturaAmbiente.temperatura = "3" + (this.temperatura.temperatura);

                console.log("Got a temperature " + this.temperatura.temperatura + "°C");
            });
        this.id = (this.id + 1) % 100;
    }


    toggle() {
        this.isFreezing = this.isFreezing === true ? false : true;
        this.termoMessage = this.isFreezing === true ?
            "Refrigerador Peltir está ligado e a temperatura irá variar entre -7 e -6 graus aproximadamente."
            : "Refrigerador Peltir está desligado e a temperatura irá variar entre -6 e -5 graus aproximadamente.";

        this.buttonMessage = this.isFreezing === true ? "Desligar Refrigerador Peltier" : "Ligar Refrigerador Peltier";
    }

    currentChange(corrente:number){
        //alert("Evento " + corrente);
      
        this.dataservice.getTempByAmpere("1")
            .then(temp=>{
                    alert("Temperatura: " + temp);
            });
    }




}