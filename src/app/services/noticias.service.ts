import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Noticia } from '../models/noticia';

const urlNoticia=environment.urlNoticias;

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private HtppClient:HttpClient) { }


  public obtenerNoticias ()
  {
      let url= urlNoticia;
       return this.HtppClient.get<Noticia[]>(url);
  }  

  public obtenerNoticiaId (id:string)
  {
    console.log(' ${urlNoticia}?id=${id}');
    console.log(` ${urlNoticia}?id=${id}`);
      let url=` ${urlNoticia}?id=${id}`;
       return this.HtppClient.get<Noticia[]>(url);
  }  
}
