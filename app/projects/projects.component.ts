import {Component} from '@angular/core';

@Component({
    selector: 'app-projects',
    template: `
    <h1 style="margin: 40px 0 30px 0;" >{{welcome}}</h1>
    <div class=list-group-item>
        <h4 class="list-group-item-heading">Canvas Generator</h4>
        <p class="list-group-item-text">
            <a href="https://github.com/mfgryan/CanvasGen">CanvasGen</a>
            &nbsp; Java app compiling drawings into JS canvas code
        </p>
    </div>
    <div class=list-group-item>
        <h4 class="list-group-item-heading">Python Web App</h4>
        <p class="list-group-item-text">
            <a href="https://github.com/mfgryan/webapp">WebApp</a>
            &nbsp; Simple single page web application allowing users to read and create appointments
        </p>
    </div>
    <div class=list-group-item>
        <h4 class="list-group-item-heading">Project Euler</h4>
        <p class="list-group-item-text">
            <a href="https://github.com/mfgryan/projectEuler">ProjectEuler</a>
            &nbsp; solved many difficult project euler problems (in Java)
        </p>
    </div>
    <div class=list-group-item>
        <h4 class="list-group-item-heading">More...</h4>
        <p class="list-group-item-text">
            <a href="https://github.com/mfgryan">GitHub</a>
            &nbsp; to see the rest of my projects visit my GitHub
        </p>
    </div>
    `,
    styles: [`
    .list-group-item {
        padding: 25px;
        font-size: 1.3em;
    }
    h4{
        font-weight: bold;
    }
    `],

})
export class ProjectsComponent {
    welcome : string;
    constructor(){
        this.welcome = "Projects";
    };
};