import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home-style.css']
})
export class HomeComponent implements OnInit {
    path = '/../../app/home/home-imgs/';
    img1 = this.path + 'img1.png';
    img2 = this.path + 'img2.png';
    img3 = this.path + 'img3.png';
    img4 = this.path + 'img4.png';

    fabImg = this.path + 'beerFab.jpg';

    constructor() { }

    ngOnInit() {
        
     }
}