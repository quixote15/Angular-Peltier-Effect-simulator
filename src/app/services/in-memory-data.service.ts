import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {createTestTemperature} from '../sensor-test';
import {peltierOn} from '../sensor-test';
import {peltierOff} from '../sensor-test';
import {correntes} from '../sensor-test';

export class InMemoryService implements InMemoryDbService {
    createDb(){
        return {
            temperaturas: createTestTemperature(),
            peltierOn:peltierOn(),
            peltierOff:peltierOff(),
            correntes: correntes(),
            double: function(){return 2*3}
        };
    }
}