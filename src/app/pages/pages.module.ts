import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// Modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';


import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { DetalleNoticiaComponent } from './detalle-noticia/detalle-noticia.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
    HomeComponent,
    AccountSettingsComponent,
    RegistroComponent,
    NoticiasComponent,
    DetalleNoticiaComponent,
    PagesComponent,
  ],
  exports: [

    HomeComponent,
    AccountSettingsComponent,
    RegistroComponent,
    NoticiasComponent,
    DetalleNoticiaComponent,
    PagesComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    BrowserModule,
    RouterModule,
    ComponentsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
