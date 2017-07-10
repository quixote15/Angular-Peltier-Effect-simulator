import { Injectable } from '@angular/core';
import{Http} from '@angular/http';
import {createTestTemperature} from '../sensor-test';
import {peltierOn} from '../sensor-test';
import {peltierOff} from '../sensor-test';
import {Temperatura} from '../model';
import {correntes} from '../sensor-test';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class DataService {
    private temperaturesUrl = 'api/temperaturas';
    private OnUrl = 'api/peltierOn/';
    private OffUrl = 'api/peltierOff/';
    private ampereUrl = 'api/correntes';

    constructor(private http:Http){}

    getTemperatures():Promise<Temperatura[]>{
        const temperatures = createTestTemperature();

        return this.http.get(this.temperaturesUrl)
            .toPromise()
            .then(response =>{
                const temps = response.json().data as Temperatura[]; //cast json data into temp objects
                console.log(`Got ${temperatures.length} temperaturas`);
                return temps;

            },
            error => {
                console.log("Ocorreu um erro no carregamento");
                return Promise.reject(""); //alguma mensagem de eerro
            }
            );
        /* new Promise<Temperatura[]>(resolve =>{
            setTimeout(() => {
                
                resolve(temperatures);
            },1500);
        });*/
    }


    getTemperatura(id:number,isOn:boolean):Promise<Temperatura>{
        let url = isOn? this.OnUrl: this.OffUrl;
        return this.http.get(url+id)
            .toPromise()
            .then(response => {
               
                const temp = response.json().data as Temperatura;
                return temp;

            });
    }

    getTempByAmpere(ampere:number){

    }
}
