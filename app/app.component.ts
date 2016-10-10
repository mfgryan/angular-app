import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.style.css']
})
export class AppComponent {
    description: string;
    name: string;
    copyright: string;
    showLinks: boolean;
    pageValues;
    color;
    constructor(private router: Router) {
        this.name = "Henserver";
        this.copyright = "henserver 2016";
        this.description = "Software and design solutions";
        this.showLinks = true;
        this.pageValues = {
            services: { message: "Innovative services", class: "blue"},
            projects: { message: "Diverse projects", class: "green"},
            experience: { message: "Solid experience", class: "orange"},
            contact: { message: "Quick contact", class: "purple"},
            default: { message: "Software and design solutions", class: ""}
        };
        this.color = [''];
    }
    ngOnInit() {
        // init code;
    }
    ngOnDestroy() {
        // destroy code;
    }
    linkPressed(e, name){
        if(name == "back"){
            name = '';
            this.showLinks = true;
            this.color = [''];
            this.description = this.pageValues.default.message;
        }else{
            this.showLinks = false;
            this.color = this.pageValues[name].class;
            this.description = this.pageValues[name].message;
        }
        this.router.navigate(['/'+name]);
    }
    setClass(e, name){
        if(name){
            if(name == 'services'){e.currentTarget.style.backgroundColor = "#e3f2fd"}
            else if(name == 'experience'){e.currentTarget.style.backgroundColor = "#ffab91"}
            else if(name == 'projects'){e.currentTarget.style.backgroundColor = "#e0f2f1"}
            else if(name == 'contact'){e.currentTarget.style.backgroundColor = "#c5cae9"};
        }else{
            e.currentTarget.style.backgroundColor = "";
        }
    }
}
