import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profesiones } from '../models/profesiones';
import { environment } from '../../environments/environment.prod';

const  urlProgramas = environment.urlProgramas;

@Injectable({
  providedIn: 'root'
})
export class ProgramasService {

  constructor(private httpClient:  HttpClient) { }

  obtenerProgramas()
  {
  return  this.httpClient.get<Profesiones[]>(urlProgramas);
  }

}
