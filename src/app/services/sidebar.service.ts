import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Home', url: '/' },
        { titulo: 'Noticias', url: 'noticias' },
        { titulo: 'Registro', url: 'registro' },

      ]
    },
  ];
/*
        { path: 'registro', component: RegistroComponent, data: { titulo: 'registro' }},
            { path: 'noticias', component: NoticiasComponent, data: { titulo: 'Noticias' }},
            { path: 'noticia/:id', component: DetalleNoticiaComponent, data: { titulo: 'Noticia' }},
*/ 
  constructor() { }
}
