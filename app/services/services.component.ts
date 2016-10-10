import { Component } from '@angular/core';

@Component({
    selector: 'app-services',
    templateUrl: './app/services/services.template.html',
    styleUrls: [ './app/services/services.style.css' ],
})

export class ServicesComponent {
    welcome : string;
    constructor(){
        this.welcome = "Services";
    };
};