import {Component} from '@angular/core';

@Component({
    selector: 'app-experience',
    template: `<h1>{{welcome}}</h1>`
})
export class ExperienceComponent {
    welcome : string;
    constructor(){
        this.welcome = "Experience";
    };
};