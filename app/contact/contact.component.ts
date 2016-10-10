import {Component} from '@angular/core';

@Component({
    selector: 'app-contact',
    template: `
    <h1 style="margin: 40px 0 30px 0;">{{welcome}}</h1>
    <div class="well">
        <span class="glyphicon glyphicon-envelope"></span>
        &nbsp; ryanbhenao@gmail.com
    </div>
    <div class="well">
        <span class="glyphicon glyphicon-user"></span>
        &nbsp; <a href="https://www.linkedin.com/in/ryan-henao-4173917b">LinkedIn</a>
    </div>
    <div class="well">
        <span class="glyphicon glyphicon-cloud"></span>
        &nbsp; <a href="https://github.com/mfgryan">GitHub</a>
    </div>
    `
})
export class ContactComponent {
    welcome : string;
    constructor(){
        this.welcome = "Contact";
    };
};