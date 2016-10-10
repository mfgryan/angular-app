import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home.component';

const appRoutes: Routes = [
{ path: 'contact', component: ContactComponent },
{ path: 'experience', component: ExperienceComponent },
{ path: 'projects', component: ProjectsComponent },
{ path: 'services', component: ServicesComponent },
{ path: '', component: HomeComponent, pathMatch: 'full'} // redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);