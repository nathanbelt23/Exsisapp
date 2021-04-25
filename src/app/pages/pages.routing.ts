import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { AccountSettingsComponent } from './account-settings/account-settings.component';

import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { DetalleNoticiaComponent } from './detalle-noticia/detalle-noticia.component';

const routes: Routes = [
    { 
        path: 'home', 
        component:PagesComponent,
        children: [
            { path: '', component: NoticiasComponent, data: { titulo: 'Home' } },
            { path: 'registro', component: RegistroComponent, data: { titulo: 'registro' }},
            { path: 'noticias', component: NoticiasComponent, data: { titulo: 'Noticias' }},
            { path: 'noticia/:id', component: DetalleNoticiaComponent, data: { titulo: 'Noticia' }},
            { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Noticia' }},
            
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


/*
      children: [
            { path: '', component: HomeComponent, data: { titulo: 'Home' } },
            { path: 'registro', component: RegistroComponent, data: { titulo: 'registro' }},
            { path: 'noticias', component: NoticiasComponent, data: { titulo: 'Noticias' }},
            { path: 'noticia/:id', component: DetalleNoticiaComponent, data: { titulo: 'Noticia' }},
         
            
        ]*/
